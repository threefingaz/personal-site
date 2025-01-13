// Animation utility functions
const animatePath = (path, delay = 0, duration = 300) => {
  return new Promise((resolve) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    const animation = path.animate(
      [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
      {
        duration,
        delay,
        easing: "ease",
        fill: "forwards",
      },
    );

    animation.onfinish = resolve;
  });
};

const handlePathHover = (path, visible = true) => {
  if (!path) return;
  path.style.visibility = visible ? "visible" : "hidden";
  path.style.strokeDashoffset = visible ? "0" : "1186px";
};

const createObserver = (target, callback) => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver(callback, options);
  if (target) observer.observe(target);
  return observer;
};

// Lettering animation
const animateLettering = async () => {
  const paths = document.querySelectorAll(".lettering path");

  paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  });

  let delay = 0;
  for (const path of paths) {
    await animatePath(path, delay);
    delay += 20;
  }
};

// Initialize animations
document.addEventListener("DOMContentLoaded", async () => {
  // Setup and animate main paths
  const pathMe = document.querySelector(".me-line path");
  if (pathMe) {
    const length = pathMe.getTotalLength() + 500;
    pathMe.style.strokeDasharray = length;
    pathMe.style.strokeDashoffset = length;

    const animation = pathMe.animate(
      [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
      {
        duration:
          parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--animation-duration",
            ),
          ) * 1000,
        easing: "ease-in-out",
        fill: "forwards",
      },
    );

    await new Promise((resolve) => (animation.onfinish = resolve));
  }

  // Animate lettering
  await animateLettering();

  // Setup hover path
  const hoverPath = document.querySelector(".line-hover");
  if (hoverPath) {
    hoverPath.style.strokeDashoffset = "1186px";
    hoverPath.style.transition = "stroke-dashoffset 0.6s ease";
    hoverPath.style.visibility = "hidden";
  }

  // Fade in element
  const fadeInElement = document.querySelector(".fade-in-element");
  if (fadeInElement) {
    fadeInElement.classList.add("visible");
  }

  // Setup workplace hover effects
  const workPlaces = document.querySelectorAll(".work-place");
  const dbElement = document.querySelector(".db");

  const handleWorkplaceHover = (workPlace, isHovering) => {
    workPlaces.forEach((otherWorkPlace) => {
      if (otherWorkPlace !== workPlace) {
        otherWorkPlace.classList[isHovering ? "add" : "remove"]("fade");
      }
    });

    if (dbElement && workPlace !== dbElement) {
      dbElement.classList[isHovering ? "add" : "remove"]("fade");
    }
  };

  workPlaces.forEach((workPlace) => {
    workPlace.addEventListener("mouseover", () =>
      handleWorkplaceHover(workPlace, true),
    );
    workPlace.addEventListener("mouseout", () =>
      handleWorkplaceHover(workPlace, false),
    );
  });

  // Setup image sequences
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

  const handleImageSequence = (element, section) => {
    let currentIndex = 0;
    let intervalId;

    const startSequence = () => {
      const imageSequenceDiv = element.querySelector(".image-sequence");
      if (!imageSequenceDiv) return;

      imageSequenceDiv.innerHTML = "";
      const img = document.createElement("img");
      imageSequenceDiv.appendChild(img);

      intervalId = setInterval(() => {
        currentIndex = (currentIndex % section.count) + 1;
        img.src = `${section.folder}/${section.className}${String(currentIndex).padStart(5, "0")}${section.extension}`;
      }, 300);
    };

    const stopSequence = () => {
      const imageSequenceDiv = element.querySelector(".image-sequence");
      if (imageSequenceDiv) {
        clearInterval(intervalId);
        imageSequenceDiv.innerHTML = "";
      }
    };

    element.addEventListener("mouseover", startSequence);
    element.addEventListener("mouseout", stopSequence);
  };

  sections.forEach((section) => {
    const element = document.querySelector(`.${section.className}`);
    if (element) {
      handleImageSequence(element, section);
    }
  });
});

// Book meeting hover handlers
document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("book-meeting")) {
    const path = document.querySelector(".line-hover");
    if (path) {
      path.style.visibility = "visible";
      path.style.strokeDashoffset = "0";
    }
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("book-meeting")) {
    const path = document.querySelector(".line-hover");
    if (path) {
      path.style.strokeDashoffset = "1186px";
      path.style.visibility = "hidden";
    }
  }
});

// Links sticky observer
const linksElement = document.querySelector(".links");
const introElement = document.querySelector(".intro");

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    linksElement.classList[!entry.isIntersecting ? "add" : "remove"](
      "sticky-b-l",
    );
  });
};

createObserver(introElement, observerCallback);
