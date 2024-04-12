import CardServices from "./CardServices";
import { Slider } from "./Slider";

export const Services = () => {
  return (
    <section id="home-services" className="bg-black-d w-full ">
      <div className="w-[100%] flex flex-col justify-center">
        <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl self-center my-8">
          Nuestros Servicios
        </h2>
          <Slider />
      </div>
    </section>
  );
};
