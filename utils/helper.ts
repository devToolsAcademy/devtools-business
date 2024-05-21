export const handleWhatsappLink = () => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // El usuario está en un dispositivo móvil, abre el enlace de WhatsApp para móviles
      window.location.href = `https://wa.me/3127570197`;
    } else {
      // El usuario está en una computadora de escritorio, abre el enlace de WhatsApp Web
      window.open(`https://web.whatsapp.com/send?phone=3127570197`);
    }
  };