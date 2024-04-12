import { Icon } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Footer = () => {
  return (
    <section className="w-full mx-[50px] bg-[#ffbd59]">
      <p className="my-5 mx-10 font-bold text-2xl">CONTÁCTANOS</p>

      <div className="flex justify-around w-[100%] flex-nowrap">
        <a href="https://web.whatsapp.com/573116978993" className="w-[10%]" target="_blank">
          <img src="/images/whatsapp.png" alt="whatsapp" />
        </a>

        <a href="https://www.instagram.com/devtoolsacademy/" className="w-[10%]" target="_blank">
          <img src="/images/instagram.png" alt="instagram" />
        </a>

        <a href="https://www.facebook.com/profile.php?id=100091929195795" className="w-[10%]" target="_blank">
          <img src="/images/facebook.png" alt="Facebook" />
        </a>

        <a href="https://github.com/devToolsAcademy" className="w-[10%]" target="_blank">
          <img src="/images/gitHub.png" alt="gitHub" />
        </a>

        <a href="https://www.linkedin.com/school/devtoolsacademy/" className="w-[10%]" target="_blank">
          <img src="/images/linkedln.png" alt="linkedln" />
        </a>

        <a href="" className="w-[10%]">
          <img src="/images/telegram.png" alt="telegram" />
        </a>
      </div>
      <span className="flex flex-col sm:flex-row my-5 mx-10 text-small">
        <p className=" ">
          También puedes dejar un mensaje en nuestro correo:
        </p>
        <a
          href="mailto:devtoolsbusinesspro@gmail.com"
          className="text-blue-500 hover:underline "
          target="_blank"
        >
          devtoolsbusinesspro@gmail.com
        </a>
      </span>
    </section>
  );
};
