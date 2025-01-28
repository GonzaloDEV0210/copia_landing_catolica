document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function() {
      fbq('track', 'Lead', {
        content_name: 'Formulario de Contacto',
        status: 'Enviado'
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("icon_wsp_flotante").addEventListener("click", function() {
        fbq('track', 'ClickWsp', {
          content_name: 'Click en WhatsApp',
          action: 'Click'
        });
      });
    });