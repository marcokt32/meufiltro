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
   ANIMAÇÃO DOS CARDS DE SOLUÇÕES
========================================================= */

const solutionCards = document.querySelectorAll(".solution-card");

if (solutionCards.length) {

    const solutionObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("in-view");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    solutionCards.forEach((card) => {
        solutionObserver.observe(card);
    });

}

/* CARROSSEL ANTES X DEPOIS */

const cards = document.querySelectorAll(".comparison-card");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;

function showCard(index) {

    cards.forEach(card => {
        card.classList.remove("active");
    });

    cards[index].classList.add("active");
}

function updateCarouselMode() {

    if (window.innerWidth <= 768) {

        // Mobile: mostra apenas o card atual
        showCard(current);

    } else {

        // Desktop: mostra todos
        cards.forEach(card => {
            card.classList.remove("active");
        });

    }
}

nextBtn.addEventListener("click", () => {

    current++;

    if (current >= cards.length) {
        current = 0;
    }

    showCard(current);

});

prevBtn.addEventListener("click", () => {

    current--;

    if (current < 0) {
        current = cards.length - 1;
    }

    showCard(current);

});

updateCarouselMode();

window.addEventListener("resize", updateCarouselMode);


document.addEventListener("DOMContentLoaded", () => {

    const carousel = document.querySelector(".benefits-carousel");
    const cards = document.querySelectorAll(".benefit-card");

    if (!carousel || !cards.length) return;

    let currentIndex = 0;

    function isMobile() {
        return window.innerWidth <= 700;
    }

    function goToCard(index) {

        if (!isMobile()) return;

        currentIndex = Math.max(
            0,
            Math.min(index, cards.length - 1)
        );

        const card = cards[currentIndex];

        carousel.scrollTo({
            left: card.offsetLeft - carousel.offsetLeft,
            behavior: "smooth"
        });
    }


    /* =========================
       SWIPE / ARRASTE
    ========================= */

    let startX = 0;
    let isDragging = false;

    carousel.addEventListener("touchstart", (event) => {

        if (!isMobile()) return;

        startX = event.touches[0].clientX;
        isDragging = true;

    }, { passive: true });


    carousel.addEventListener("touchend", (event) => {

        if (!isMobile() || !isDragging) return;

        const endX = event.changedTouches[0].clientX;
        const difference = startX - endX;

        const threshold = 50;

        if (Math.abs(difference) > threshold) {

            if (difference > 0) {
                // deslizou para esquerda
                goToCard(currentIndex + 1);
            } else {
                // deslizou para direita
                goToCard(currentIndex - 1);
            }

        }

        isDragging = false;

    });


    /* =========================
       ATUALIZA CARD ATUAL
       AO ROLAR MANUALMENTE
    ========================= */

    carousel.addEventListener("scroll", () => {

        if (!isMobile()) return;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {

            const distance = Math.abs(
                card.offsetLeft - carousel.scrollLeft
            );

            if (distance < closestDistance) {

                closestDistance = distance;
                closestIndex = index;

            }

        });

        currentIndex = closestIndex;

    });


    /* =========================
       RESIZE
    ========================= */

    window.addEventListener("resize", () => {

        if (!isMobile()) {
            currentIndex = 0;
            carousel.scrollLeft = 0;
        }

    });

    /*carrossel hero */

    const slides = document.querySelectorAll(".hero-slide");
    const nextBtn = document.querySelector(".hero-next");
    const prevBtn = document.querySelector(".hero-prev");
    const dots = document.querySelectorAll(".hero-dot");

    let current = 0;

    function showSlide(index) {

        slides.forEach(slide => {
            slide.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    let touchStartX = 0;
    let touchEndX = 0;

    const hero = document.querySelector(".hero");

    hero.addEventListener("touchstart", (e) => {

        touchStartX = e.changedTouches[0].screenX;

    }, { passive: true });


    hero.addEventListener("touchend", (e) => {

        touchEndX = e.changedTouches[0].screenX;

        handleSwipe();

    }, { passive: true });


    function handleSwipe() {

        const difference = touchStartX - touchEndX;

        // Ignora movimentos muito pequenos
        if (Math.abs(difference) < 50) {
            return;
        }

        // Arrastou para a esquerda → próximo
        if (difference > 0) {

            current++;

            if (current >= slides.length) {
                current = 0;
            }

        }

        // Arrastou para a direita → anterior
        else {

            current--;

            if (current < 0) {
                current = slides.length - 1;
            }

        }

        showSlide(current);
    }

    nextBtn.addEventListener("click", () => {

        console.log("next");

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        showSlide(current);
    });

    prevBtn.addEventListener("click", () => {

        current--;

        if (current < 0) {
            current = slides.length - 1;
        }

        showSlide(current);
    });

    setInterval(() => {

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        showSlide(current);

    }, 6000);

    nextBtn.addEventListener("click", () => {
        console.log("next");
    });

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            current = index;

            showSlide(current);

        });

    });

});

/* HIDROMETRO */

const contador = document.getElementById("contador-hidro");

const valorInicial = 1000000;
const dataInicial = new Date("2026-01-01T00:00:00");

function atualizarContador() {
    const agora = new Date();

    const segundosPassados =
        (agora - dataInicial) / 1000;

    const taxa =
        agora.getHours() < 18
            ? 0.8  // m³ por segundo
            : 0.2;

    const valorAtual =
        valorInicial + segundosPassados * taxa;

    contador.textContent =
        Math.floor(valorAtual).toLocaleString("pt-BR") + " m³";
}

atualizarContador();
setInterval(atualizarContador, 1000);

const ponteiro = document.querySelector(".meio");

let angulo = 0;

function girarPonteiro() {

    const agora = new Date();

    const taxa = agora.getHours() < 16 ? 20 : 10;

    angulo += taxa;

    if (angulo >= 360) {
        angulo -= 360;
    }

    ponteiro.style.transform = `rotate(${angulo}deg)`;

    requestAnimationFrame(girarPonteiro);
}

requestAnimationFrame(girarPonteiro);


/* ENVIO DE EMAIL */

document.getElementById("contact-form").addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const destinatario = "contato@seudominio.com.br";

    const assunto = subject
        ? subject
        : `Contato pelo site - ${name}`;

    const corpo =
        `Olá,

Recebemos um novo contato através do site Meu Filtro.

Nome: ${name}
E-mail: ${email}
WhatsApp: ${phone}

Assunto: ${subject}

Mensagem:
${message}

--------------------------------
Mensagem enviada pelo site Meu Filtro`;

    const mailto =
        `mailto:${destinatario}` +
        `?subject=${encodeURIComponent(assunto)}` +
        `&body=${encodeURIComponent(corpo)}`;

    window.location.href = mailto;

});