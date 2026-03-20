"use client";

import { useForm as useFormspree } from "@formspree/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "next/form";
import Link from "next/link";
import { useEffect } from "react";
import { useForm as useHookForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "O nome é obrigatório." }),
  email: z.string().email({ message: "Insira um e-mail válido." }),
  message: z
    .string()
    .min(3, { message: "Digite um texto de 3 a 3000 caracteres." })
    .max(3000, { message: "Máximo de 3000 caracteres." }),
});

export function FormSection() {
  const form = useHookForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [state, handleSubmit] = useFormspree("mzdjwyjb");

  useEffect(() => {
    if (state.succeeded) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    }
    if (state.errors) {
      alert(
        "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.",
      );
    }
  }, [state.succeeded, state.errors, form]);

  async function handleAction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const valid = await form.trigger();
    if (valid) {
      handleSubmit(form.getValues());
    }
  }

  return (
    <div className="w-full bg-white text-black rounded-t-4xl px-8 lg:px-20 py-20 pb-40 pt-20 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        {/* Left Column - Form */}
        <div className="flex-1 w-full relative">
          <Form action="" onSubmit={handleAction} className="flex flex-col">
            {/* Nome */}
            <Field className="flex flex-col border-b border-gray-200 pb-8 mb-8 relative">
              <FieldLabel
                htmlFor="name"
                className="text-xl lg:text-2xl font-medium mb-6"
              >
                Qual o seu nome?
              </FieldLabel>
              <Input
                {...form.register("name")}
                id="name"
                placeholder="Fulano da Silva *"
                className="bg-transparent border-0 px-0 shadow-none focus-visible:ring-0 text-lg lg:text-xl rounded-none h-auto p-0 placeholder:text-gray-400 autofill:bg-transparent autofill:shadow-[0_0_0_1000px_white_inset]"
              />
              {form.formState.errors.name && (
                <FieldError className="text-red-500 mt-4 flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block mr-2" />
                  {form.formState.errors.name.message}
                </FieldError>
              )}
            </Field>

            {/* Email */}
            <Field className="flex flex-col border-b border-gray-200 pb-8 mb-8 relative">
              <FieldLabel
                htmlFor="email"
                className="text-xl lg:text-2xl font-medium mb-6"
              >
                Qual o seu email?
              </FieldLabel>
              <Input
                {...form.register("email")}
                id="email"
                placeholder="fulano@email.com *"
                className="bg-transparent border-0 px-0 shadow-none focus-visible:ring-0 text-lg lg:text-xl rounded-none h-auto p-0 placeholder:text-gray-400 autofill:bg-transparent autofill:shadow-[0_0_0_1000px_white_inset]"
              />
              {form.formState.errors.email && (
                <FieldError className="text-red-500 mt-4 flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block mr-2" />
                  {form.formState.errors.email.message}
                </FieldError>
              )}
            </Field>

            {/* Mensagem */}
            <Field className="flex flex-col border-b border-gray-200 pb-8 relative">
              <FieldLabel
                htmlFor="message"
                className="text-xl lg:text-2xl font-medium mb-6"
              >
                Sua mensagem
              </FieldLabel>
              <Textarea
                {...form.register("message")}
                id="message"
                placeholder="Olá, Abner. Vi seu portfólio e gostaria de... *"
                className="bg-transparent border-0 px-0 shadow-none focus-visible:ring-0 text-lg lg:text-xl rounded-none h-auto min-h-32 p-0 resize-none placeholder:text-gray-400 field-sizing-content autofill:bg-transparent autofill:shadow-[0_0_0_1000px_white_inset]"
              />
              {form.formState.errors.message && (
                <FieldError className="text-red-500 mt-4 flex items-center text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block mr-2" />
                  {form.formState.errors.message.message}
                </FieldError>
              )}

              {/* Button placed at the bottom right corner of the last field */}
              <div className="absolute right-20 bottom-0 w-32! lg:w-40! translate-y-1/2 z-10">
                <Button
                  type="submit"
                  disabled={state.submitting}
                  className="size-32 lg:size-40 p-0 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm lg:text-base font-semibold shadow-none uppercase tracking-wider cursor-pointer disabled:filter disabled:brightness-110 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Enviando..." : "Enviar"}
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
            <Link href="mailto:abner.js05@gmail.com">
              <Button
                variant="link"
                className="block p-0 h-auto text-black mb-2 font-medium justify-start w-fit text-base"
                asChild
              >
                ABNER.JS05@GMAIL.COM
              </Button>
            </Link>
            <Button
              variant="link"
              className="block p-0 h-auto text-black font-medium justify-start w-fit text-base"
              asChild
            >
              <Link href="tel:+5518997361645">+55 18 99736-1645</Link>
            </Button>
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
