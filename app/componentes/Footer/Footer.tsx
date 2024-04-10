import { Icon } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  return (
    <section className="w-full mx-[50px] bg-[#ffbd59]">
      <p className="my-5 mx-10 font-bold text-2xl">CONTÁCTANOS</p>

      <div className="flex justify-around w-[100%] flex-nowrap">
        <img src="/images/whatsapp.png" alt="Descripción de la imagen 1" className="w-[10%]" />
        <img src="/images/instagram.png" alt="Descripción de la imagen 2" className="w-[10%]" />
        <img src="/images/gitHub.png" alt="Descripción de la imagen 3" className="w-[10%]"/>
        <img src="/images/linkedln.png" alt="Descripción de la imagen 4" className="w-[10%]"/>
        <img src="/images/telegram.png" alt="Descripción de la imagen 5" className="w-[10%]" />
      </div>
      <p className="my-5 mx-10 text-small">También puedes dejar un mensaje en nuestro correo:</p>
    </section>
  );
};
