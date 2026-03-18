export function About() {
  return (
    <section
      id="about"
      className="flex flex-col px-8 sm:px-16 md:px-32 transition-all py-40 gap-40"
    >
      {/* Greetings */}
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">Olá, mundo! Me chamo Abner 👋</h2>
        <p className="text-xl font-medium">
          Sou o <span>Desenvolvedor Web</span> especializado em criar
          experiências digitais excepcionais e estou pronto para desenvolver o
          software que você ou seu cliente precisa!
        </p>
      </div>

      {/* O que eu faço */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">Minhas habilidades</h3>
        <p className="text-lg font-medium">
          Desenvolvo experiências web e sou apaixonado por criar soluções
          inovadoras e eficientes. Minha abordagem é sempre centrada no usuário,
          garantindo uma satisfação do usuário em usar um aplicativo. Construo
          interfaces ricas, intuitivas, responsivas e otimizadas para SEO.
        </p>
        <p className="text-lg font-medium">
          Construo sites escaláveis a partir do zero, bem como adiciono novas
          funcionalidades em sites pré-existentes. Tenho habilidades para
          construir aplicações performáticas e escaláveis com um backend
          robusto, utilizando as melhores práticas com princípios SOLID e
          Clean-Code.
        </p>
        <p className="text-lg font-medium">
          Ofereço a criação de um site completo, desde o conceito até a
          implementação. Com meu senso de design e habilidades de
          desenvolvimento, sou capaz de criar projetos que se encaixam
          perfeitamente no contexto da sua necessidade.
        </p>
      </div>
    </section>
  );
}
