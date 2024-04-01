import ArrowDown from "../assessment/icons/ArrowDown";
import styles from "./Welcome.module.css";

export const Welcome = () => {
  return (
    <section
      className={`bg-[var(--bluePrimary)] md:flex md:justify-center
      ${styles["container-welcome"]}`}
    >
      <div className="md:w-[60%] md:flex items-center">
        <img
          src="/assesst/Logo-isotipo.png"
          alt=""
          className="w-[200px] h-[200px] rounded-full hidden md:block"
        />

        <div>
          <div className="flex flex-col justify-center w-full items-center">
            <h1 className="text-[50px]  text-[var(--greenDevtools)] font-bold w-auto mt-4">
              devTools
            </h1>
            <span className="text-[var(--orangeDevtools)] text-[20px] ">
              Academy
            </span>
          </div>
          <p className="p-[8px] text-[var(--white)] pb-8 ">
          Somos un equipo de expertos en desarrollo web y marketing digital.¡Déjanos llevar tu presencia en línea al siguiente nivel!
          </p>
        </div>
      </div>
      <ArrowDown className="absolute self-end w-[100%] transition-all hover:cursor-pointer float-right animate-bounce hidden md:block mb-4 text-[var(--greenDevtools)]" />
    </section>
  );
};
