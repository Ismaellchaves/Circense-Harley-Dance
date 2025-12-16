import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

/* =========================
   BENTO TILT
========================= */
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(0.97)`
    );
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransformStyle("")}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

/* =========================
   BENTO CARD
========================= */
export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="relative size-full overflow-hidden rounded-md">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute inset-0 size-full object-cover"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-[#dfdff2]">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-md text-sm md:text-base opacity-80">
              {description}
            </p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHoverOpacity(1)}
            onMouseLeave={() => setHoverOpacity(0)}
            className="relative flex w-fit items-center gap-2 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/50"
          >
            <div
              className="pointer-events-none absolute -inset-px transition"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(120px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, transparent)`,
              }}
            />
            <TiLocationArrow className="relative z-10" />
            <span className="relative z-10">coming soon</span>
          </div>
        )}
      </div>
    </div>
  );
};

/* =========================
   FEATURES
========================= */
const Features = () => (
  <section className="bg-black pb-40">
    <div className="container mx-auto px-4 md:px-10">

      {/* TEXTO */}
      <div className="py-32 max-w-xl">
        <p className="text-lg text-[#dfdff2]">
          O Espetáculo é a Nova Camada do Metagame
        </p>
        <p className="mt-4 text-lg text-[#dfdff2]/50">
          Mergulhe no universo da CIA Circense Harley Dance, onde produtos,
          números espetaculares e festas se convergem.
        </p>
      </div>

      {/* CARD GRANDE */}
      <a
        href="https://wa.me/5588993041877?text=Quero%20contratar%20festa%20infantil"
        target="_blank"
        className="block mb-10"
      >
        <BentoTilt className="h-[60vh] w-full">
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>Festas<b> Infantis</b></>}
            description="Animação completa com personagens circenses."
            isComingSoon
          />
        </BentoTilt>
      </a>

      {/* GRID RESPONSIVO */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:auto-rows-[32vh]">

        {/* PUBLICIDADE */}
        <a
          href="https://wa.me/5588993041877?text=Quero%20contratar%20publicidade"
          target="_blank"
          className="md:row-span-2"
        >
          <BentoTilt className="h-full w-full hover:scale-[1.02] transition">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>Pub<b>licidade</b></>}
              description="Animações promocionais e ações de impacto."
              isComingSoon
            />
          </BentoTilt>
        </a>

        {/* CASAMENTOS */}
        <a
          href="https://wa.me/5588993041877?text=Quero%20contratar%20casamentos"
          target="_blank"
        >
          <BentoTilt className="h-full w-full hover:scale-[1.02] transition">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>Cas<b>amentos & Shows</b></>}
              description="Performances elegantes para cerimônias."
              isComingSoon
            />
          </BentoTilt>
        </a>

        {/* CONFRATERNIZAÇÃO */}
        <a
          href="https://wa.me/5588993041877?text=Quero%20contratar%20confraterniza%C3%A7%C3%A3o"
          target="_blank"
        >
          <BentoTilt className="h-full w-full hover:scale-[1.02] transition">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>Conf<b>raternização</b></>}
              description="Eventos corporativos e entretenimento completo."
              isComingSoon
            />
          </BentoTilt>
        </a>

        {/* EXTRA */}
        <BentoTilt className="bg-violet-300 rounded-md p-6 flex flex-col justify-between">
          <h1 className="bento-title text-black max-w-xs">
            M<b>a</b>is N<b>o</b>vidades em breve
          </h1>
          <TiLocationArrow className="scale-[4] self-end text-black" />
        </BentoTilt>

        <BentoTilt>
          <video
            src="videos/feature-5.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover rounded-md"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
