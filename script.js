document.addEventListener("DOMContentLoaded", function () {
  // Update the Typed.js initialization
  const typedName = new Typed("#typed-name", {
    strings: ["Oluwasegun Babawale"],
    typeSpeed: 100,
    showCursor: false,
    onStringTyped: function () {
      // Force reflow to prevent layout shift
      document.querySelector(".hero-content").style.height = "auto";
    },
  });

  const typedRole = new Typed("#typed-role", {
    strings: ["Frontend Developer", "UI/UX Enthusiast", "Web Designer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    showCursor: false,
    startDelay: 1500,
    onStringTyped: function () {
      // Force reflow to prevent layout shift
      document.querySelector(".hero-content").style.height = "auto";
    },
  });

  // Add this to prevent mobile layout shift
  function setHeroHeight() {
    if (window.innerWidth <= 768) {
      const heroContent = document.querySelector(".hero-content");
      const computedHeight = window.getComputedStyle(heroContent).height;
      heroContent.style.minHeight = computedHeight;
    }
  }

  window.addEventListener("load", setHeroHeight);
  window.addEventListener("resize", setHeroHeight);

  // AOS initialization
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  // GSAP animations
  gsap.registerPlugin(ScrollTrigger);

  // Hero section animations
  // gsap.from('.hero-content h4', {
  //     opacity: 1,
  //     y: 50,
  //     duration: 0.8,
  //     delay: 0.2
  // });

  // gsap.from('.hero-content p', {
  //     opacity: 1,
  //     y: 50,
  //     duration: 0.8,
  //     delay: 0.4
  // });

  // gsap.from('.hero-content .cta-btn', {
  //     opacity: 1,
  //     y: 50,
  //     duration: 0.8,
  //     delay: 0.6
  // });

  // Shape animations
  gsap.to(".shape-1", {
    y: 20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".shape-2", {
    y: 30,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 1,
  });

  gsap.to(".shape-3", {
    y: 40,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 2,
  });

  //Animate skills on scroll//
  // gsap.utils.toArray('.skill-item').forEach(skill => {
  //     gsap.from(skill, {
  //         scrollTrigger: {
  //             trigger: skill,
  //             start: "top 80%",
  //             toggleActions: "play none none none"
  //         },
  //         y: 50,
  //         opacity: 0.5,
  //         duration: 0.8,
  //         ease: "back.out(1.7)"
  //     });
  // });

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    document.body.classList.toggle("nav-open");
  });

  // Copy email functionality
  const copyBtn = document.getElementById("copy-email");
  const emailText = document.getElementById("email-text");

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(emailText.textContent);
    copyBtn.textContent = "Copied!";
    copyBtn.style.backgroundColor = "var(--success-color)";

    setTimeout(() => {
      copyBtn.textContent = "Copy Email";
      copyBtn.style.backgroundColor = "rgba(108, 99, 255, 0.1)";
    }, 2000);
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (document.body.classList.contains("nav-open")) {
          hamburger.classList.remove("active");
          document.body.classList.remove("nav-open");
        }
      }
    });
  });

  // Project card hover effect enhancement
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const x = e.clientX - this.getBoundingClientRect().left;
      const y = e.clientY - this.getBoundingClientRect().top;

      const centerX = this.offsetWidth / 2;
      const centerY = this.offsetHeight / 2;

      const angleX = (y - centerY) / 20;
      const angleY = (centerX - x) / 20;

      gsap.to(this, {
        rotationX: angleX,
        rotationY: angleY,
        transformPerspective: 1000,
        ease: "power1.out",
        duration: 0.5,
      });
    });

    card.addEventListener("mouseleave", function () {
      gsap.to(this, {
        rotationX: 0,
        rotationY: 0,
        ease: "power1.out",
        duration: 0.5,
      });
    });
  });
});
