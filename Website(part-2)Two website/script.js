console.log("JavaScript connected");

// MOBILE MENU //

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("open");

        const menuOpen = navLinks.classList.contains("open");
        menuButton.setAttribute("aria-expanded", menuOpen);
    });
}
// TEXT SIZE //

const decreaseText = document.getElementById("decreaseText");
const normalText = document.getElementById("normalText");
const increaseText = document.getElementById("increaseText");

if (decreaseText) {
    decreaseText.addEventListener("click", function () {
        document.documentElement.style.fontSize = "90%";
    });
}

if (normalText) {
    normalText.addEventListener("click", function () {
        document.documentElement.style.fontSize = "100%";
    });
}

if (increaseText) {
    increaseText.addEventListener("click", function () {
        document.documentElement.style.fontSize = "115%";
    });
}


//  LIGHT AND DARK MODE // 

const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");

if (darkMode) {
    darkMode.addEventListener("click", function () {
        document.body.classList.add("darkMode");

        darkMode.classList.add("active");
        lightMode.classList.remove("active");
    });
}

if (lightMode) {
    lightMode.addEventListener("click", function () {
        document.body.classList.remove("darkMode");

        lightMode.classList.add("active");
        darkMode.classList.remove("active");
    });
}


//  SEARCH //

const searchButton = document.getElementById("searchButton");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");

if (searchButton && searchPanel) {
    searchButton.addEventListener("click", function () {
        searchPanel.classList.toggle("open");
    });
}

if (closeSearch && searchPanel) {
    closeSearch.addEventListener("click", function () {
        searchPanel.classList.remove("open");
    });
}


// -------------------------
// HERO SLIDER
// -------------------------

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const previousSlide = document.getElementById("previousSlide");
const nextSlide = document.getElementById("nextSlide");
const heroSlider = document.querySelector(".heroSlider");

let currentSlide = 0;
let autoSlide;

function showSlide(index) {

    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    if (slides[index]) {
    slides[index].classList.add("active");
}

if (dots[index]) {
    dots[index].classList.add("active");
}

    currentSlide = index;
}


if (nextSlide) {
    nextSlide.addEventListener("click", function () {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    });
}


if (previousSlide) {
    previousSlide.addEventListener("click", function () {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    });
}


dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {
        showSlide(index);
    });

});


// Automatic slideshow

function startAutoSlide() {

    autoSlide = setInterval(function () {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 5000);
}


function stopAutoSlide() {
    clearInterval(autoSlide);
}


if (slides.length > 0) {
    startAutoSlide();
}


if (heroSlider) {

    heroSlider.addEventListener("mouseenter", function () {
        stopAutoSlide();
    });

    heroSlider.addEventListener("mouseleave", function () {
        startAutoSlide();
    });
}


//  READ ALOUD  //

const speechButton = document.getElementById("speechButton");

let isSpeaking = false;

if (speechButton) {

    speechButton.addEventListener("click", function () {

        if (isSpeaking) {

            window.speechSynthesis.cancel();
            isSpeaking = false;

            speechButton.innerHTML =
                '<i class="fa-solid fa-volume-high"></i><span>Read aloud</span>';

            speechButton.classList.remove("listening");

            return;
        }


        const mainContent = document.getElementById("mainContent");

        if (!mainContent) {
            return;
        }


        const speech =
            new SpeechSynthesisUtterance(mainContent.innerText);

        speech.rate = 1;
        speech.pitch = 1;
        speech.volume = 1;

        speechButton.innerHTML =
            '<i class="fa-solid fa-stop"></i><span>Stop reading</span>';

        speechButton.classList.add("listening");

        isSpeaking = true;

        window.speechSynthesis.speak(speech);


        speech.addEventListener("end", function () {

            isSpeaking = false;

            speechButton.classList.remove("listening");

            speechButton.innerHTML =
                '<i class="fa-solid fa-volume-high"></i><span>Read aloud</span>';

        });

    });

}


// LANGUAGE // 

const languageSelect = document.getElementById("languageSelect");

const translations = {

    en: {
        home: "Home",
        team: "Team",
        history: "History & Honors",
        matches: "Matches & Fixtures",
        news: "News & Updates",
        gallery: "Media & Gallery",
        contact: "Contact Us",
        nextMatch: "Next Match",
        latestNews: "Latest News",
        viewAllNews: "View All News"
    },

    pt: {
        home: "Início",
        team: "Equipa",
        history: "História e Honras",
        matches: "Jogos e Calendário",
        news: "Notícias",
        gallery: "Media e Galeria",
        contact: "Contactos",
        nextMatch: "Próximo Jogo",
        latestNews: "Últimas Notícias",
        viewAllNews: "Ver Todas as Notícias"
    },

    es: {
        home: "Inicio",
        team: "Equipo",
        history: "Historia y Honores",
        matches: "Partidos y Calendario",
        news: "Noticias",
        gallery: "Medios y Galería",
        contact: "Contacto",
        nextMatch: "Próximo Partido",
        latestNews: "Últimas Noticias",
        viewAllNews: "Ver Todas las Noticias"
    },

    fr: {
        home: "Accueil",
        team: "Équipe",
        history: "Histoire et Honneurs",
        matches: "Matchs et Calendrier",
        news: "Actualités",
        gallery: "Médias et Galerie",
        contact: "Contact",
        nextMatch: "Prochain Match",
        latestNews: "Dernières Actualités",
        viewAllNews: "Voir Toutes les Actualités"
    },

    de: {
        home: "Startseite",
        team: "Mannschaft",
        history: "Geschichte & Erfolge",
        matches: "Spiele & Termine",
        news: "Neuigkeiten",
        gallery: "Medien & Galerie",
        contact: "Kontakt",
        nextMatch: "Nächstes Spiel",
        latestNews: "Neueste Nachrichten",
        viewAllNews: "Alle Nachrichten"
    },

    it: {
        home: "Home",
        team: "Squadra",
        history: "Storia e Onori",
        matches: "Partite e Calendario",
        news: "Notizie",
        gallery: "Media e Galleria",
        contact: "Contatti",
        nextMatch: "Prossima Partita",
        latestNews: "Ultime Notizie",
        viewAllNews: "Vedi Tutte le Notizie"
    },

    ne: {
        home: "गृहपृष्ठ",
        team: "टोली",
        history: "इतिहास र सम्मान",
        matches: "खेल र तालिका",
        news: "समाचार",
        gallery: "मिडिया र ग्यालरी",
        contact: "सम्पर्क",
        nextMatch: "अर्को खेल",
        latestNews: "ताजा समाचार",
        viewAllNews: "सबै समाचार हेर्नुहोस्"
    }

};


function changeLanguage(language) {

    const words = translations[language];

    if (!words) {
        return;
    }

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(function (element) {

        const key = element.dataset.i18n;

        if (words[key]) {
            element.textContent = words[key];
        }

    });

    document.documentElement.lang = language;
}


if (languageSelect) {

    languageSelect.addEventListener("change", function () {
        changeLanguage(languageSelect.value);
    });

}

//PHOTO GALLERY FILTER AND LIGHTBOX //

const galleryFilters = document.querySelectorAll(".galleryFilter");
const galleryCards = document.querySelectorAll(".galleryCard");
const galleryStatus = document.getElementById("galleryStatus");

galleryFilters.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.filter;
        let count = 0;

        galleryFilters.forEach(filter => {
            const active = filter === button;
            filter.classList.toggle("active", active);
            filter.setAttribute("aria-pressed", String(active));
        });

        galleryCards.forEach(card => {
            const show = category === "all" ||
                         card.dataset.category === category;

            card.hidden = !show;
            if (show) count++;
        });

        if (galleryStatus) {
            galleryStatus.textContent =
                `Showing ${count} ${count === 1 ? "photo" : "photos"}.`;
        }
    });
});

/* LARGE PHOTO VIEWER */

const galleryLightbox = document.getElementById("galleryLightbox");
const galleryLargeImage = document.getElementById("galleryLargeImage");
const galleryCaption = document.getElementById("galleryCaption");
const closeGallery = document.getElementById("closeGallery");

if (galleryLightbox && galleryLargeImage && closeGallery) {
    let previousFocus = null;

    document.querySelectorAll(".galleryImageButton").forEach(button => {
        button.addEventListener("click", () => {
            const image = button.querySelector("img");
            const caption = button.closest(".galleryCard")
                                  .querySelector("figcaption");

            previousFocus = button;
            galleryLargeImage.src = image.src;
            galleryLargeImage.alt = image.alt;
            galleryCaption.textContent = caption.textContent;
            galleryLightbox.hidden = false;
            closeGallery.focus();
        });
    });

    function hideGallery() {
        galleryLightbox.hidden = true;
        galleryLargeImage.removeAttribute("src");
        if (previousFocus) previousFocus.focus();
    }

    closeGallery.addEventListener("click", hideGallery);

    galleryLightbox.addEventListener("click", event => {
        if (event.target === galleryLightbox) hideGallery();
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && !galleryLightbox.hidden) {
            hideGallery();
        }

        if (event.key === "Tab" && !galleryLightbox.hidden) {
            event.preventDefault();
            closeGallery.focus();
        }
    });
}