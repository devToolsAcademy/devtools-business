import React from "react";
import CardTeam from "./CardTeam";

export const Team = () => {
  return (
    <section className="md:w-[90%] flex flex-col">
      <div className="flex justify-center">
        <h2 className="text-[var(--greenDevtools)] font-bold text-2xl self-center mt-8">
          Nuestro equipo
        </h2>
      </div>
        <div className="flex flex-wrap justify-center items-stretch gap-3 mt-8 mb-8">
          <CardTeam />
          <CardTeam />
          <CardTeam />
          <CardTeam />
        </div>
    </section>
  );
};

