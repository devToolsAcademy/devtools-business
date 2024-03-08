import React from "react";
import CardServices from "./CardServices";
import { Slider } from "./Slider";
// import { Slider } from "./Slider";
// import { Slider2 } from "./Slider2";

export const Services = () => {
  return (
    <div>
      <div className="w-[100%] flex flex-col justify-center">
        <h2 className="text-[var(--greenDevtools)] font-bold text-2xl self-center mt-8">
          Nuestros Servicios
        </h2>
        <div
        // className={`flex flex-col md:grid grid-cols-3 gap-4 w-[60%] items-center self-center`}
        >
          {/* <CardServices />
        <CardServices />
        <CardServices />
      <CardServices /> */}
          <Slider />
        </div>
        {/* <Slider2 /> */}
      </div>
    </div>
  );
};
