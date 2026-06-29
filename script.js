"use strict";

/* ==========================================================
   Dr. Parikshit Website
   Version 2.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeWebsite();

});

/* ==========================================================
   INITIALIZATION
========================================================== */

function initializeWebsite() {

    smoothScrolling();
    activeNavigation();
    navbarOnScroll();
    revealOnScroll();
    mobileMenu();

}/* ==========================================================
   SMOOTH SCROLLING
========================================================== */

function smoothScrolling() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", (event) => {

            const target = document.querySelector(link.getAttribute("href"));

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

}/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

function activeNavigation() {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                currentSection = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    });

}/* ==========================================================
   NAVBAR SCROLL EFFECT
========================================================== */

function navbarOnScroll() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        header.classList.toggle(

            "scrolled",

            window.scrollY > 80

        );

    });

}/* ==========================================================
   SCROLL REVEAL
========================================================== */

function revealOnScroll() {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    sections.forEach(section => {

        section.classList.add("reveal");

        observer.observe(section);

    });

}/* ==========================================================
   MOBILE MENU
========================================================== */

function mobileMenu() {

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (!menuButton || !navigation) return;

    menuButton.addEventListener("click", () => {

        menuButton.classList.toggle("active");

        navigation.classList.toggle("active");

    });

    const links = navigation.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("active");

            navigation.classList.remove("active");

        });

    });

}const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});