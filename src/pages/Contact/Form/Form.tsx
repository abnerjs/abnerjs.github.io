import React, { useEffect, useRef, useState } from "react";
import "./form.css";
import Field from "src/components/Field/Field";
import MagneticButton from "src/components/MagneticButton/MagneticButton";
import Stripe from "src/components/Stripe/Stripe";
import { Parallax } from "react-scroll-parallax";
import { SubmitHandler, Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import MailCredencials from "src/utils/MailCredencials/MailCredencials";
import emailjs from "@emailjs/browser";

interface FormProps {
  name: string;
  mail: string;
  message: string;
}

const defaultValues: FormProps = {
  name: "",
  mail: "",
  message: "",
};

const schema = Yup.object({
  name: Yup.string().required("Campo obrigatório."),
  mail: Yup.string()
    .required("Insira um e-mail válido.")
    .email("Insira um e-mail válido"),
  message: Yup.string()
    .required("Digite um texto de 3 a 3000 caracteres.")
    .min(3, (params) => `Digite um texto de 3 a 3000 caracteres.`)
    .max(3000, (params) => `Digite um texto de 3 a 3000 caracteres.`),
});

const Form = () => {
  const [formStateSubmit, setFormStateSubmit] = useState("submit");
  const { handleSubmit, clearErrors, reset, control, formState } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: any) => {
    setFormStateSubmit("loading");
    emailjs
      .send(
        "portfolio-service",
        "template_portfolio",
        data,
        "MdFAKzTrD4JG7vUEH"
      )
      .then(
        (result) => {
          setFormStateSubmit("success");
        },
        (error) => {
          setFormStateSubmit("error");
        }
      );
  };

  useEffect(() => {
    if (formStateSubmit === "success") {
      reset();
      clearErrors();
      const timer = setTimeout(() => {
        setFormStateSubmit("submit");
      }, 3000);
      return () => {
        clearTimeout(timer);
      }
    }
  }, [formStateSubmit]);

  return (
    <form className="content" onSubmit={handleSubmit(onSubmit)}>
      <Stripe margin={0} />
      <Controller
        name="name"
        control={control}
        render={({ field: { ref, value, ...rest }, fieldState }) => (
          <Field
            label="Qual o seu nome?"
            placeholder="Fulano da Silva *"
            helperText={fieldState.error?.message}
            rest={rest}
            value={value}
          />
        )}
      />
      <Stripe margin={0} />
      <Controller
        name="mail"
        control={control}
        render={({ field: { ref, value, ...rest }, fieldState }) => (
          <Field
            label="Qual o seu email?"
            type="email"
            placeholder="fulano@email.com *"
            helperText={fieldState.error?.message}
            rest={rest}
            value={value}
          />
        )}
      />
      <Stripe margin={0} />
      <Controller
        name="message"
        control={control}
        render={({ field: { ref, value, ...rest }, fieldState }) => (
          <Field
            label="Sua mensagem"
            multiline
            placeholder="Olá, Abner. Vi seu portfólio e gostaria de... *"
            helperText={fieldState.error?.message}
            rest={rest}
            value={value}
          />
        )}
      />
      <Stripe margin={0} />
      <Parallax
        translateX={["-120px", "80px"]}
        style={{
          alignSelf: "flex-end",
        }}
      >
        <div
          className={`sendMailController${
            formStateSubmit === "success" ? " success" : ""
          }`}
        >
          <MagneticButton devOrientationX type="submit" className="sendMail">
            Enviar
          </MagneticButton>
        </div>
      </Parallax>
    </form>
  );
};

export default Form;
