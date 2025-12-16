import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Seja bem-vindo a </p>
          <p>Companhia Circense Harley Dance</p>
        

        <AnimatedTitle
          title="Descubra a aventura com a CIA"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>Companhia "CIA Circense Harley Dance</p>
          <p className="text-gray-500">
            integra essa nova
            camada levando a magia dos espetáculos circenses, animação de festas e
            experiências únicas para dentro do metagame. Nossos números espetaculares
            são agora side quests interativas da sua jornada épica.
          </p>
        </div>
      </div>

      <div className="h-dvh w-full" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;