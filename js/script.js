/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");
        menuToggle.classList.toggle("active");

    });

}


/* =========================================================
   FECHAR MENU AO CLICAR EM UM LINK
========================================================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.classList.remove("active");
        }

    });

});


/* =========================================================
   SCROLL SUAVE
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   WHATSAPP
========================================================= */

/*
    Substitua posteriormente pelo número real.

    Formato:
    55 + DDD + número

    Exemplo:
    5521999999999
*/

const whatsappNumber = "5500000000000";


/*
    Mensagem inicial do cliente.
*/

const whatsappMessage =
    "Olá! Gostaria de saber mais sobre o Meu Filtro.";


/*
    Gera o link do WhatsApp.
*/

const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


/*
    Elementos que devem abrir o WhatsApp.
*/

const whatsappElements = [

    document.querySelector("#whatsappLink"),
    document.querySelector("#footerWhatsapp"),
    document.querySelector("#floatingWhatsapp")

];


whatsappElements.forEach(element => {

    if (!element) {
        return;
    }

    element.href = whatsappURL;

    element.target = "_blank";
    element.rel = "noopener noreferrer";

});


/* =========================================================
   FORMULÁRIO
========================================================= */

const contactForm = document.querySelector("#contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.querySelector("#name")?.value.trim();

        const phone =
            document.querySelector("#phone")?.value.trim();

        const email =
            document.querySelector("#email")?.value.trim();

        const message =
            document.querySelector("#message")?.value.trim();


        /*
            Validação básica
        */

        if (!name || !phone) {

            alert(
                "Por favor, preencha seu nome e WhatsApp."
            );

            return;

        }


        /*
            Monta a mensagem para o WhatsApp.
        */

        let whatsappText =
            `Olá! Meu nome é ${name}.`;


        whatsappText +=
            `\n\nGostaria de saber mais sobre o Meu Filtro.`;


        if (phone) {

            whatsappText +=
                `\n\nWhatsApp: ${phone}`;

        }


        if (email) {

            whatsappText +=
                `\nE-mail: ${email}`;

        }


        if (message) {

            whatsappText +=
                `\n\nMensagem:\n${message}`;

        }


        const formWhatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;


        /*
            =================================================
            CONVERSÃO
            =================================================

            Futuramente podemos disparar aqui:

            - Google Ads
            - Google Analytics 4
            - Google Tag Manager

            Exemplo:

            gtag('event', 'generate_lead');

            Não ativamos agora para evitar eventos
            falsos antes da configuração definitiva.
        */


        window.open(
            formWhatsappURL,
            "_blank",
            "noopener,noreferrer"
        );


        /*
            Limpa o formulário.
        */

        contactForm.reset();

    });

}


/* =========================================================
   ANIMAÇÃO AO ENTRAR NA TELA
========================================================= */

const animatedElements = document.querySelectorAll(
    ".benefit-card, .step, .about-content, .about-image, .contact-card"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            });

        },

        {
            threshold: 0.15
        }

    );


    animatedElements.forEach(element => {

        element.classList.add("scroll-animation");

        observer.observe(element);

    });

}


/* =========================================================
   HEADER - TRANSPARÊNCIA AO ROLAR
========================================================= */

const header = document.querySelector(".header");

if (header) {

    const updateHeader = () => {

        const scroll = window.scrollY;

        /*
            De 0 até 150px de scroll,
            o header vai ficando mais transparente.
        */

        const progress = Math.min(scroll / 150, 1);

        /*
            Opacidade:
            topo    = 95%
            scroll  = 70%
        */

        const opacity = 0.95 - (progress * 0.25);

        header.style.background =
            `rgba(255, 255, 255, ${opacity})`;

        /*
            Blur também diminui suavemente.
        */

        const blur = 14 - (progress * 6);

        header.style.backdropFilter =
            `blur(${blur}px)`;

        header.style.webkitBackdropFilter =
            `blur(${blur}px)`;

    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );
}

/* =========================================================
   LUCIDE ICONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

});