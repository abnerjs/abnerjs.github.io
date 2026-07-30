import { NextResponse } from "next/server";
import React from "react";
import { Resend } from "resend";
import { z } from "zod";
import { ContactEmailTemplate } from "@/components/emails/contact-template";

const contactSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório." }),
  email: z.string().email({ message: "Insira um e-mail válido." }),
  message: z
    .string()
    .min(3, { message: "Digite um texto de 3 a 3000 caracteres." })
    .max(3000, { message: "Máximo de 3000 caracteres." }),
});

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY não foi encontrada no ambiente.");
      return NextResponse.json(
        { error: "Erro de configuração no servidor de envio de e-mails." },
        { status: 500 },
      );
    }

    const body = await request.json();
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Dados inválidos", details: validation.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, message } = validation.data;
    const resend = new Resend(apiKey);

    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "AbnerJS <onboarding@resend.dev>";
    const toEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "abner.js05@gmail.com";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Novo contato no site de ${name}`,
      replyTo: email,
      react: React.createElement(ContactEmailTemplate, {
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.error("Erro ao enviar email pelo Resend:", error);
      return NextResponse.json(
        { error: "Falha ao enviar e-mail. Tente novamente mais tarde." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Erro inesperado na rota /api/contact:", err);
    return NextResponse.json(
      { error: "Ocorreu um erro interno no servidor." },
      { status: 500 },
    );
  }
}
