export const About = () => {
  return (
    <section id="home-aboutus" className="mt-10 p-3 flex flex-col justify-center items-center md:w-[70%] lg:w-[70%] lg:items-center">
      <h2 className="text-[var(--greenDevtools)] font-bold text-2xl self-center mb-5 lg:w-[100%] text-center items-center">
        Sobre nosotros
      </h2>
      <div className="lg:flex lg:flex-col lg:justify-center lg:items-center">
        <img
          src="/assesst/about.jpg"
          alt="image about"
          className="lg:w-[300px]"
        />
        <div className="mt-10 flex flex-col justify-center items-center">
          <p className="mb-3">
            En devTools Academy, nos emociona que hagas parte de nuestra
            plataforma digital. Somos un equipo apasionado de profesionales
            dedicados al mundo del desarrollo web y el marketing digital. Además
            de nuestros servicios como empresa, también nos complace presentar
            nuestro proyecto educativo.
          </p>
          <p className="mb-3">
            Nuestro promiso es ofrecer soluciones innovadoras y creativas para
            satisfacer las necesidades únicas de nuestros clientes. Ya sea que
            estén buscando crear una presencia en línea impactante, aumentar su
            visibilidad en el mercado digital o desarrollar aplicaciones web
            personalizadas, estamos aquí para ayudar.{" "}
          </p>
          <p className="mb-3">
            Nos hemos embarcado en una misión para formar a la próxima
            generación de profesionales en el campo del desarrollo web. Con
            programas de formación estructurados, estamos comprometidos a
            compartir nuestro conocimiento y experiencia con aquellos que deseen
            embarcarse en esta emocionante carrera.
          </p>
        </div>
      </div>
    </section>
  );
};
