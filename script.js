const generateGlowButtons = () => {
  document.querySelectorAll(".glow-button").forEach((button) => {
    let gradientElem = button.querySelector(".gradient");

    if (!gradientElem) {
      gradientElem = document.createElement("div");
      gradientElem.classList.add("gradient");

      button.appendChild(gradientElem);
    }

    button.addEventListener("pointermove", (e) => {
      const rect = button.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(button, {
        "--pointer-x": `${x}px`,
        "--pointer-y": `${y}px`,
        duration: 0.6,
      });

      gsap.to(button, {
        "--button-glow": chroma
          .mix(
            getComputedStyle(button)
              .getPropertyValue("--button-glow-start")
              .trim(),
            getComputedStyle(button)
              .getPropertyValue("--button-glow-end")
              .trim(),
            x / rect.width,
          )
          .hex(),
        duration: 0.2,
      });
    });
  });
};

// Set variables on resize
window.addEventListener("resize", generateGlowButtons);

document.addEventListener("DOMContentLoaded", function () {
  generateGlowButtons();
  // Fade-in element logic
  const fadeInElement = document.querySelector(".fade-in-element");
  if (fadeInElement) {
    fadeInElement.classList.add("visible");
  }

  const workPlaces = document.querySelectorAll(".work-place");

  workPlaces.forEach((workPlace) => {
    workPlace.addEventListener("mouseover", () => {
      workPlaces.forEach((otherWorkPlace) => {
        if (otherWorkPlace !== workPlace) {
          otherWorkPlace.classList.add("fade");
        }
      });
    });

    workPlace.addEventListener("mouseout", () => {
      workPlaces.forEach((otherWorkPlace) => {
        otherWorkPlace.classList.remove("fade");
      });
    });
  });

  const sections = [
    {
      className: "sber",
      folder: "resources/img/sber",
      count: 25,
      extension: ".png",
    },
    {
      className: "pik",
      folder: "resources/img/pik",
      count: 4,
      extension: ".png",
    },
    {
      className: "sbertech",
      folder: "resources/img/sbertech",
      count: 9,
      extension: ".jpg",
    },
    {
      className: "rucenter",
      folder: "resources/img/rucenter",
      count: 5,
      extension: ".jpg",
    },
    {
      className: "action",
      folder: "resources/img/action",
      count: 7,
      extension: ".jpg",
    },
    {
      className: "artlebedev",
      folder: "resources/img/artlebedev",
      count: 11,
      extension: ".jpg",
    },
  ];

  sections.forEach((section) => {
    const element = document.querySelector(`.${section.className}`);
    if (element) {
      let currentIndex = 0;
      let intervalId;

      element.addEventListener("mouseover", () => {
        const imageSequenceDiv = element.querySelector(".image-sequence");
        if (imageSequenceDiv) {
          // Clear any previous image content
          imageSequenceDiv.innerHTML = "";

          // Create an img element to cycle through
          const img = document.createElement("img");
          imageSequenceDiv.appendChild(img);

          // Start cycling through the images
          intervalId = setInterval(() => {
            currentIndex = (currentIndex % section.count) + 1;
            img.src = `${section.folder}/${section.className}${String(currentIndex).padStart(5, "0")}${section.extension}`;
          }, 300); // Change image every 150ms
        }
      });

      element.addEventListener("mouseout", () => {
        const imageSequenceDiv = element.querySelector(".image-sequence");
        if (imageSequenceDiv) {
          // Stop the cycling and clear the image
          clearInterval(intervalId);
          imageSequenceDiv.innerHTML = "";
        }
      });
    }
  });
});
