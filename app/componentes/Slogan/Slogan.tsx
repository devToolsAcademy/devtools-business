export const Slogan = () => {
  return (
    <section className="h-[60vh] sm:h-[80vh] w-full relative">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/Slogan1.mp4"
          autoPlay
          loop
          muted
        ></video>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-green-l m-[50px]">
          <h1 className="text-5xl lg:text-6xl font-bold">
            Planting Seeds of Opportunity, Harvesting Success
          </h1>

            <img
              src="/assesst/isotipofondotransparente.png"
              alt=""
              className="h-[100px] w-[100px] lg:w-[200px] lg:h-[200px] md:block self-end"
            />
        </div>
    </section>
  );
};
