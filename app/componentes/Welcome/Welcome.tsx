import ArrowDown from "../assessment/icons/ArrowDown";

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
        className={`sm:flex sm:justify-center 
      sm:h-[75vh] lg:h-[80vh] relative z-10`}
      >
        <div className="sm:w-[85%] md:w-[80%] flex flex-col sm:flex-row sm:items-center">
          <div className="sm:w-1/2 sm:pr-4">
            <img
              src="/assesst/isotipofondotransparente.png"
              alt=""
              className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] mx-auto sm:mx-0 "
            />
          </div>

          <div className="sm:w-1/2 mx-2 sm:mx-0 drop-shadow-xl">
            <h1 className="text-center text-[var(--greenDevtools)] font-bold my-3 text-7xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]">
              devTools
            </h1>
            <p className="px-[10px] text-[var(--white)] pb-8 text-center sm:px-1 text-small sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              Somos un equipo de expertos en desarrollo web y marketing
              digital.¡Déjanos llevar tu presencia en línea al siguiente nivel!
            </p>
          </div>
        </div>
        <ArrowDown className="absolute self-end w-[100%] transition-all hover:cursor-pointer float-right animate-bounce hidden md:block mb-4 text-[var(--greenDevtools)]" />
        <div className="fixed bottom-10 right-5">
          <a href="https://web.whatsapp.com/573116978993" target="_blank">
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp"
              className="h-10 w-10 "
            />
          </a>
        </div>
      </section>
    </div>
  );
};
