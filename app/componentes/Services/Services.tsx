import CardServices from "./CardServices";
import { Slider } from "./Slider";

export const Services = () => {
  return (
    <section id="home-services" className="bg-black-d w-full ">
      <div className="w-[100%] flex flex-col justify-center">
        <h2 className="text-white font-bold text-2xl self-center mt-8">
          Nuestros Servicios
        </h2>
          <Slider />
      </div>
    </section>
  );
};
