"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Form from "next/form";
import Link from "next/link";
import { useState } from "react";
import { useForm as useHookForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SOCIAL_LINKS } from "@/config/social";

const formSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório." }),
  email: z.string().email({ message: "Insira um e-mail válido." }),
  message: z
    .string()
    .min(3, { message: "Digite um texto de 3 a 3000 caracteres." })
    .max(3000, { message: "Máximo de 3000 caracteres." }),
});

export function FormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);

  const form = useHookForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function handleAction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isRateLimited) return;

    const valid = await form.trigger();
    if (!valid) return;

    try {
      setIsSubmitting(true);
      const values = form.getValues();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }
    } catch (err) {
      console.error("Erro ao enviar o formulário:", err);
    } finally {
      setIsSubmitting(false);
      setIsRateLimited(true);
      setTimeout(() => {
        setIsRateLimited(false);
      }, 5000);
    }
  }

  return (
    <div className="w-full bg-white text-black rounded-[3rem] px-8 lg:px-20 py-20 pb-40 pt-20 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        {/* Left Column - Form */}
        <div className="flex-1 w-full min-w-0 relative">
          <Form action="" onSubmit={handleAction} className="flex flex-col min-w-0">
            {/* Nome */}
            <Field className="group/field flex flex-col min-w-0 border-b-2 border-gray-200 focus-within:border-orange-500 pb-8 mb-10 relative transition-colors duration-200">
              <FieldLabel
                htmlFor="name"
                className="text-xl lg:text-2xl font-medium mb-4 transition-colors duration-200 group-focus-within/field:text-orange-500"
              >
                Qual o seu nome?
              </FieldLabel>
              <Input
                {...form.register("name")}
                id="name"
                placeholder="Fulano da Silva *"
                className="bg-transparent border-0 px-0 shadow-none outline-none focus:outline-none focus-visible:ring-0 focus-visible:outline-none text-xl lg:text-2xl rounded-none h-auto py-3 placeholder:text-gray-400 autofill:bg-transparent autofill:shadow-[0_0_0_1000px_white_inset] w-full"
              />
              {form.formState.errors.name && (
                <FieldError className="text-red-500 mt-4 flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block mr-2" />
                  {form.formState.errors.name.message}
                </FieldError>
              )}
            </Field>

            {/* Email */}
            <Field className="group/field flex flex-col min-w-0 border-b-2 border-gray-200 focus-within:border-orange-500 pb-8 mb-10 relative transition-colors duration-200">
              <FieldLabel
                htmlFor="email"
                className="text-xl lg:text-2xl font-medium mb-4 transition-colors duration-200 group-focus-within/field:text-orange-500"
              >
                Qual o seu email?
              </FieldLabel>
              <Input
                {...form.register("email")}
                id="email"
                placeholder="fulano@email.com *"
                className="bg-transparent border-0 px-0 shadow-none outline-none focus:outline-none focus-visible:ring-0 focus-visible:outline-none text-xl lg:text-2xl rounded-none h-auto py-3 placeholder:text-gray-400 autofill:bg-transparent autofill:shadow-[0_0_0_1000px_white_inset] w-full"
              />
              {form.formState.errors.email && (
                <FieldError className="text-red-500 mt-4 flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block mr-2" />
                  {form.formState.errors.email.message}
                </FieldError>
              )}
            </Field>

            {/* Mensagem */}
            <Field className="group/field flex flex-col min-w-0 border-b-2 border-gray-200 focus-within:border-orange-500 pb-8 relative transition-colors duration-200">
              <FieldLabel
                htmlFor="message"
                className="text-xl lg:text-2xl font-medium mb-4 transition-colors duration-200 group-focus-within/field:text-orange-500"
              >
                Sua mensagem
              </FieldLabel>
              <Textarea
                {...form.register("message")}
                id="message"
                placeholder="Olá, Abner. Vi seu portfólio e gostaria de... *"
                className="bg-transparent border-0 px-0 shadow-none outline-none focus:outline-none focus-visible:ring-0 focus-visible:outline-none text-xl lg:text-2xl rounded-none h-auto min-h-36 py-3 resize-none placeholder:text-gray-400 field-sizing-content autofill:bg-transparent autofill:shadow-[0_0_0_1000px_white_inset] w-full max-w-full overflow-x-auto"
              />
              {form.formState.errors.message && (
                <FieldError className="text-red-500 mt-4 flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block mr-2" />
                  {form.formState.errors.message.message}
                </FieldError>
              )}

              <div className="absolute right-20 bottom-0 w-32! lg:w-40! translate-y-1/2 z-10">
                <Button
                  type="submit"
                  disabled={isSubmitting || isRateLimited}
                  className={`size-32 lg:size-40 p-0 rounded-full text-white flex items-center justify-center text-sm lg:text-base font-semibold shadow-none uppercase tracking-wider cursor-pointer disabled:filter disabled:brightness-110 disabled:cursor-not-allowed outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 transition-colors duration-300 ${
                    isSuccess
                      ? "bg-green-500 hover:bg-green-600 disabled:opacity-100"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  {isSubmitting ? "Enviando..." : isSuccess ? "Enviado" : "Enviar"}
                </Button>
              </div>
            </Field>
          </Form>
        </div>

        {/* Info */}
        <div className="w-full lg:w-[30%] flex flex-col gap-12 pt-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
              Contato
            </h3>
            <Link
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="outline-none focus:outline-none focus-visible:outline-none rounded w-fit block"
            >
              <Button
                variant="link"
                className="block p-0 h-auto text-black mb-2 font-medium justify-start w-fit text-base uppercase outline-none focus:outline-none focus-visible:outline-none"
                tabIndex={-1}
              >
                {SOCIAL_LINKS.email}
              </Button>
            </Link>
            <Link
              href={`tel:${SOCIAL_LINKS.phone.replace(/\s+/g, "")}`}
              className="outline-none focus:outline-none focus-visible:outline-none rounded w-fit block"
            >
              <Button
                variant="link"
                className="block p-0 h-auto text-black font-medium justify-start w-fit text-base outline-none focus:outline-none focus-visible:outline-none"
                tabIndex={-1}
              >
                {SOCIAL_LINKS.phone}
              </Button>
            </Link>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">
              Detalhes
            </h3>
            <p className="text-black mb-2 font-medium">PRESIDENTE EPITÁCIO</p>
            <p className="text-black mb-2 font-medium">SÃO PAULO</p>
            <p className="text-black font-medium">BRASIL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
