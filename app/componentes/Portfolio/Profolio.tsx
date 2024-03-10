import React from "react";
import ImagePortfolio from "./ImagePortfolio";

export const Portfolio = () => {
  return (
    <div className="md:w-[70%] flex flex-col ">
      <h2 className="text-[var(--greenDevtools)] font-bold text-2xl self-center mt-8">
        Portafolio
      </h2>
      <div className="flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 mt-8 mb-8">
        <ImagePortfolio />
        <ImagePortfolio />
        <ImagePortfolio />
        <ImagePortfolio />
        <ImagePortfolio />
        <ImagePortfolio />
        <ImagePortfolio />
      </div>
    </div>
  );
};
