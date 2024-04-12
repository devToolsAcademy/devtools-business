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
        className={` md:flex md:justify-center
      sm:h-[75vh] relative z-10`}
      >
        <div className="md:w-[70%] flex flex-col sm:flex-row sm:items-center">
          <div className="sm:w-1/2 sm:pr-4">
            <img
              src="/assesst/isotipofondotransparente.png"
              alt=""
              className="w-[200px] h-[200px] mx-auto sm:mx-0 mb-2 sm:mb-0"
            />
          </div>

          <div className="sm:w-1/2 mx-2 sm:mx-0 drop-shadow-xl">
            <h1 className="text-center text-[var(--greenDevtools)] font-bold my-6 text-4xl sm:text-7xl ">
              devTools
            </h1>
            <p className="p-[8px] text-[var(--white)] pb-8 text-center sm:px-6">
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
