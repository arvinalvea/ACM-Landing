const mq = window.matchMedia("(min-width: 768px)");
const images = document.querySelectorAll("[data-src");
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 700px 0px",
};

function removeHiddenClass(mq) {
  const contactBannerImages = document.querySelectorAll(".contactBannerImg");
  if (mq.matches) {
    // If media query matches
    console.log(contactBannerImages);
    console.log(contactBannerImages[0]);
    for (let i = 0; i < contactBannerImages.length; i++) {
      contactBannerImages[i].classList.remove("hidden");
    }
  } else {
    for (let j = 0; j < contactBannerImages.length; j++) {
      contactBannerImages[j].classList.add("hidden");
    }
  }
}

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});

removeHiddenClass(mq); // Call listener function at run time
mq.addListener(removeHiddenClass); // Attach listener function on state changes
