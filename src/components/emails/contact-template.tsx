import type * as React from "react";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<ContactEmailTemplateProps> = ({
  name,
  email,
  message,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#09090b",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        padding: "40px 16px",
        minHeight: "100%",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          border: "1px solid #e4e4e7",
        }}
      >
        {/* Header with Dark Branding */}
        <div
          style={{
            backgroundColor: "#09090b",
            padding: "32px 32px 24px 32px",
            textAlign: "center" as const,
            borderBottom: "1px solid #27272a",
          }}
        >
          <a
            href="https://abnerjs.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            {/* SVG Logo Fallback / High-res logo */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src="https://abnerjs.dev/favicon.svg"
                alt="AbnerJS Logo"
                width="36"
                height="36"
                style={{ display: "block", borderRadius: "8px" }}
              />
              <span
                style={{
                  color: "#ffffff",
                  fontSize: "24px",
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  fontFamily: "sans-serif",
                }}
              >
                Abner<span style={{ color: "#a855f7" }}>JS</span>
              </span>
            </div>
          </a>
          <p
            style={{
              color: "#a1a1aa",
              fontSize: "13px",
              marginTop: "8px",
              marginBottom: "0",
              fontWeight: 500,
              letterSpacing: "0.5px",
              textTransform: "uppercase" as const,
            }}
          >
            Mensagem do Formulário de Contato
          </p>
        </div>

        {/* Content Body */}
        <div style={{ padding: "36px 32px 32px 32px", color: "#18181b" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              marginTop: 0,
              marginBottom: "24px",
              color: "#09090b",
            }}
          >
            Você recebeu um novo contato!
          </h2>

          <div
            style={{
              marginBottom: "20px",
              paddingBottom: "16px",
              borderBottom: "1px solid #f4f4f5",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#71717a",
                textTransform: "uppercase" as const,
                letterSpacing: "1px",
                display: "block",
                marginBottom: "4px",
              }}
            >
              Remetente
            </span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#09090b",
              }}
            >
              {name}
            </span>
          </div>

          <div
            style={{
              marginBottom: "24px",
              paddingBottom: "16px",
              borderBottom: "1px solid #f4f4f5",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#71717a",
                textTransform: "uppercase" as const,
                letterSpacing: "1px",
                display: "block",
                marginBottom: "4px",
              }}
            >
              E-mail
            </span>
            <a
              href={`mailto:${email}`}
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#7c3aed",
                textDecoration: "none",
              }}
            >
              {email}
            </a>
          </div>

          <div style={{ marginBottom: "32px" }}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#71717a",
                textTransform: "uppercase" as const,
                letterSpacing: "1px",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Mensagem
            </span>
            <div
              style={{
                backgroundColor: "#f8fafc",
                borderRadius: "16px",
                padding: "20px 24px",
                border: "1px solid #e2e8f0",
                color: "#27272a",
                fontSize: "15px",
                lineHeight: "1.6",
                whiteSpace: "pre-wrap" as const,
                wordBreak: "break-word" as const,
              }}
            >
              {message}
            </div>
          </div>

          {/* Reply CTA */}
          <div style={{ textAlign: "center" as const, marginTop: "32px" }}>
            <a
              href={`mailto:${email}?subject=Re:%20Contato%20via%20abnerjs.dev`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#7c3aed",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "14px",
                padding: "14px 32px",
                borderRadius: "9999px",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
              }}
            >
              Responder a {name}
            </a>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#f4f4f5",
            padding: "20px 32px",
            textAlign: "center" as const,
            borderTop: "1px solid #e4e4e7",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#71717a",
              margin: 0,
              lineHeight: "1.5",
            }}
          >
            Enviado via formulário de contato em{" "}
            <a
              href="https://abnerjs.dev"
              style={{
                color: "#7c3aed",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              abnerjs.dev
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
