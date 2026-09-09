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

const whatsappNumber = "552121439026";


/*
    Mensagem inicial do cliente.
*/

const whatsappMessage =
    "Oi encontrei o site da Meu Filtro.\nQuero uma solução para o meu problema com água de poço!";


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

            ÁREA RESERVADA PARA TAGS DE ANÁLISE DE CONVERSÕES

            - Google Ads
            - Google Analytics 4
            - Google Tag Manager

            Exemplo:

            gtag('event', 'generate_lead');

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
    ".benefit-card, .alert, .about-content, .about-image, .contact-card"
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
   HEADER - TRANSPARÊNCIA NO TOPO
========================================================= */

const header = document.querySelector(".header");

if (header) {

    const updateHeader = () => {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };

    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
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

/* =========================================================
   FUNCIONAMENTO CARROSSEL & FAQ
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Carrossel
    const about_slides = document.querySelectorAll(".about-slide");
    const about_dots = document.querySelectorAll(".about-dots span");
    
    let currentAbout = 0;

    function showAboutSlide(index) {
        about_slides.forEach(slide => slide.classList.remove("active"));
        about_dots.forEach(dot => dot.classList.remove("active"));

        // Correção das variáveis aqui:
        if (about_slides[index]) about_slides[index].classList.add("active");
        if (about_dots[index]) about_dots[index].classList.add("active");
    }

    // Só inicia o intervalo se os slides existirem na página
    if (about_slides.length > 0) {
        setInterval(() => {
            currentAbout++;

            if (currentAbout >= about_slides.length) {
                currentAbout = 0;
            }

            showAboutSlide(currentAbout);
        }, 4000);
    }


    // FAQ
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        if (question) {
            question.addEventListener("click", () => {
                item.classList.toggle("active");
            });
        }
    });

});
