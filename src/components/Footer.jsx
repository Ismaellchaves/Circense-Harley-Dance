import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Footer = () => {
  return (
    <div className="my-10 min-h-96 w-full overflow-hidden px-10">
      <div className="relative rounded-lg bg-black py-24 text-[#dfdff2] sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Zentry
          </p>

          <AnimatedTitle
            title="vamos c<b>r</b>iar a <br /> nova era do espe<b>t</b>áculo <br /> j<b>u</b>ntos."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <a
            href="https://wa.me/5588993041877?text=Ol%C3%A1%21%20Quero%20contratar%20um%20servi%C3%A7o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10"
          >
            <Button
              title="Contratar serviço"
              containerClass="cursor-pointer w-full px-8 py-4"
            />
          </a>

        </div>
      </div>
      {/* Botões */}
      <div className="dev-title">
        <h1>Desenvolvedores!</h1>
      </div>

      <div className="mt-10 flex w-full flex-row items-center justify-between gap-6 px-6">
        <a
          href="https://isnex.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
        >
          <img
            src="/img/logo-isnex.png"
            alt="ISNEX"
            className="h-6 w-6 object-contain"
          />
          <span className="uppercase tracking-wide">ISNEX</span>
        </a>

        <a
          href="https://kiperfection.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
        >
          <img
            src="/img/logo-kiperfection.png"
            alt="KIPERFECTION"
            className="h-6 w-6 object-contain"
          />
          <span className="uppercase tracking-wide">KIPERFECTION</span>
        </a>
      </div>

    </div>

  );
};

export default Footer;