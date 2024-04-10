import styles from "./About.module.css";

export const About = () => {
  return (
    <section  className="flex h-full" >
      <div className="flex-1 h-full" id={`${styles['container-img']}`} >
      <video
        autoPlay
        loop
        muted
        className="inset-10 w-[80%] h-[119%] object-cover z-0"
      >
        <source src="/videos/equipo.mp4" type="video/mp4" />       
      </video>
      </div>
      <div className="flex-1 ml-2 flex flex-col justify-center  items-center text-center text-small">
        <h2 className="text-[#ffbd59] font-bold text-2xl self-center mb-5 lg:w-[100%] text-center items-center mb-0 mt-2">
          Sobre nosotros
        </h2>
        <hr className="border-t-4 border-[#ffbd59] mb-3 ml-2 w-[50%]"/>
        <p className="mb-3">
          En <span className="text-green-l font-bold">devTools</span>, nos emociona que hagas parte de nuestra
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
