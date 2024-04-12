import styles from "./About.module.css";

export const About = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:gap-10 md:w-[90%] " id="home-aboutus">
      <div className="flex-1 flex-grow sm:pr-5">
        <video
          autoPlay
          loop
          muted
          className="object-cover h-full"
        >
          <source src="/videos/equipo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex-1 ml-2 flex flex-col justify-center items-center text-center text-xs xl:text-sm sm:pr-5">
        <h2 className="text-[#ffbd59] font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-6xl self-center mb lg:w-[100%] text-center items-center mb-0 mt-4">
          Sobre nosotros
        </h2>
        <hr className="border-t-4 border-[#ffbd59] mb-3 ml-2 w-[50%] " />
        <p className="mb-2">
          En <span className="text-green-l font-bold">devTools</span>, nos
          emociona que hagas parte de nuestra plataforma digital. Somos un
          equipo apasionado de profesionales dedicados al mundo del desarrollo
          web y el marketing digital. Además de nuestros servicios como empresa,
          también nos complace presentar nuestro proyecto educativo.
        </p>
        <p className="mb-3">
          Nuestro compromiso es ofrecer soluciones innovadoras y creativas para
          satisfacer las necesidades únicas de nuestros clientes. Ya sea que
          estén buscando crear una presencia en línea impactante, aumentar su
          visibilidad en el mercado digital o desarrollar aplicaciones web
          personalizadas, estamos para ayudar.{" "}
        </p>
        <p className="mb-5">
          Nos hemos embarcado en una misión para formar a la próxima generación
          de profesionales en el campo del desarrollo web. Con programas de
          formación estructurados, estamos comprometidos a compartir nuestro
          conocimiento y experiencia con aquellos que deseen embarcarse en esta
          emocionante carrera.
        </p>
      </div>
    </section>
  );
};
