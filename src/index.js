export const imageCarousel = () => {
  const indicators = document.querySelector(".carousel-indicators");
  const images = document.querySelectorAll(".carousel-item");
  const next = document.querySelector(".carousel-control-next");
  const prev = document.querySelector(".carousel-control-prev");

  let slideNo = 0;

  const showImage = (index) => {
    images.forEach((img, i) => {
      index !== i ? img.classList.remove("show") : img.classList.add("show");
    });
  };

  const showIndicator = (index) => {
    indicators.childNodes.forEach((indicator, i) => {
      index !== i
        ? indicator.classList.remove("active")
        : indicator.classList.add("active");
    });
  };

  const displayImages = (slide) => {
    showImage(slide);
    showIndicator(slide);
  };

  const slideCheck = (op) => {
    if (op === "+") {
      slideNo++;
      if (slideNo === images.length) slideNo = 0;
    } else if (op === "-") {
      slideNo--;
      if (slideNo === -1) slideNo = images.length - 1;
    }
  };

  const slideShow = (slide) => {
    displayImages(slide);
    slideCheck("+");
    setTimeout(() => {
      slideShow(slideNo);
    }, 5000);
  };

  const createControls = () => {
    prev.addEventListener("click", () => {
      slideCheck("-");
      displayImages(slideNo);
    });
    next.addEventListener("click", () => {
      slideCheck("+");
      displayImages(slideNo);
    });
  };

  const selectIndicator = (index) => {
    indicators.childNodes[index].addEventListener("click", () => {
      displayImages(index);
      slideNo = index;
    });
  };

  const createIndicator = (i) => {
    let dot = document.createElement("span");
    dot.classList.add("indicator");
    if (i === 0) dot.classList.add("active");
    indicators.appendChild(dot);
  };

  const dsiplayIndicators = () => {
    for (let i = 0; i < images.length; i++) {
      createIndicator(i);
      selectIndicator(i);
    }
  };

  dsiplayIndicators();
  createControls();
  slideShow(slideNo);
};

imageCarousel();
