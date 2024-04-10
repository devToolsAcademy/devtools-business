import ArrowDown from "../assessment/icons/ArrowDown";
import styles from "./Welcome.module.css";

export const Welcome = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/welcomeHome.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <section
        className={` md:flex md:justify-center
      ${styles["container-welcome"]} relative z-10`}
      >
        <div className="md:w-[70%] md:flex items-center">
          <img
            src="/assesst/Isotipo.svg"
            alt=""
            className="w-[200px] h-[200px] md:block"
          />

          <div className="ml-4">
            <h1 className="text-[50px] text-[var(--greenDevtools)] font-bold mt-4 text-center">
              devTools
            </h1>
            <p className="p-[8px] text-[var(--white)] pb-8 text-center">
              Somos un equipo de expertos en desarrollo web y marketing
              digital.¡Déjanos llevar tu presencia en línea al siguiente nivel!
            </p>
          </div>
        </div>
        <ArrowDown className="absolute self-end w-[100%] transition-all hover:cursor-pointer float-right animate-bounce hidden md:block mb-4 text-[var(--greenDevtools)]" />
      </section>
    </div>
  );
};
