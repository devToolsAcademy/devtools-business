import { Button, Link } from "@nextui-org/react";
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
          className="w-[200px] h-[200px] rounded-full hidden md:block md:mr-6"
        />
        <div>
          <div className="flex flex-col justify-center w-full items-center">
            <h1 className="text-[50px]  text-[var(--greenDevtools)] font-bold w-auto mt-20 md:mt-1">
              devTools
            </h1>
            <span className="flex justify-end w-[180px] text-[var(--orangeDevtools)] text-[20px] mb-4">
              Academy
            </span>
          </div>
          <p className="p-[8px] text-[var(--white)] pb-[28px] mt-5 mb-5 md:mb-0 md:pb-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            commodi voluptatum dolorem quam, maiores quaerat deleniti minima
            sint consequuntur aliquam impedit placeat dolorum et repellat
            repellendus nobis optio! Mollitia, fugiat!
          </p>
          <div className="flex justify-center items-center lg:justify-start">
          <Button
            as={Link}
            className="text-[var(--bluePrimary)] bg-[var(--greenDevtools)] font-bold mb-10 md:ml-20 md:mb-20 lg:ml-0 lg:mt-5"
            href="#"
            variant="flat"
          >
            Quiero asesoria
          </Button>
          </div>
        </div>
      </div>
      <ArrowDown className="absolute self-end w-[100%] transition-all hover:cursor-pointer float-right animate-bounce mt-7 md:block mt-15 mb-4 text-[var(--greenDevtools)]" />
    </section>
  );
};
