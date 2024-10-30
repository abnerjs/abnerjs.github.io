import React from "react";
import "./works-with.css";
import Stripe from "src/components/Stripe/Stripe";

const WorksWith = () => {
  return (
    <div className="works-with">
      <div className="title">Posso te ajudar com</div>
      <div className="row">
        <div className="section">
          <div className="number">01</div>
          <Stripe height="2" />
          <div className="titleSkill">Design</div>
          <div className="skillText">
            Com um histórico sólido na criação de sites e aplicativos, eu
            ofereço designs digitais fortes e fáceis de usar. A marca sólida da
            empresa é a base de qualquer site bem sucedido.
          </div>
        </div>
        <div className="section">
          <div className="number">02</div>
          <Stripe height="2" />
          <div className="titleSkill">Desenvolvimento</div>
          <div className="skillText">
            Construo sites escaláveis a partir do zero, bem como adiciono novas
            funcionalidades em sites pré-existentes. Meu foco está no front-end,
            que inclui o desenvolvimento de conteúdo, micro animações,
            transições e interação do usuário.
          </div>
        </div>
        <div className="section">
          <div className="number">03</div>
          <Stripe height="2" />
          <div className="titleSkill">O pacote completo</div>
          <div className="skillText">
            Ofereço a criação de um site completo, desde o conceito até a
            implementação. Com meu senso de design e habilidades de
            desenvolvimento, sou capaz de criar projetos que se encaixam
            perfeitamente no contexto da sua necessidade.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksWith;
