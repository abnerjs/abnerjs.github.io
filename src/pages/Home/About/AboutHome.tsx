import "./about-home.css";
import MagneticButton from "src/components/MagneticButton/MagneticButton";
import { useParallax } from "react-scroll-parallax";
import { useNavigate } from "react-router";
import useTransitionStore from "src/store/storeConfig";

const AboutHome = () => {
  const changeTransition = useTransitionStore((state) => state.change);
  const changeLabel = useTransitionStore((state) => state.changeLabel);
  const navigate = useNavigate();
  const parallax = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateY: [50, -25],
  });
  const parallaxTxt = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateY: [50, -25],
  });
  const parallaxTxt2 = useParallax<HTMLDivElement>({
    easing: "easeOutQuad",
    translateY: [50, -25],
  });

  const handlerGoToAbout = () => {
    changeTransition(1);
    changeLabel("• SOBRE •");

    const timer = setTimeout(() => {
      navigate("/about");
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <div className="about-home">
      <div className="paragraph" ref={parallaxTxt.ref}>
        Olá, me chamo Abner!
        <br />
        Desenvolvedor React pronto pra ajudar a projetar e/ou desenvolver o
        software que você precisa.
        <br />
        Pronto para criar a sua experiência digital e do seu cliente!
      </div>
      <div className="about-btn" ref={parallaxTxt2.ref}>
        <div className="text">
          A combinação da minha paixão por design, código e interações.
        </div>
        <div className="div" ref={parallax.ref}>
          <MagneticButton devOrientation onClick={handlerGoToAbout}>
            Sobre mim
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
