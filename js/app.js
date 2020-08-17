const mq = window.matchMedia("(min-width: 768px)");

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

removeHiddenClass(mq); // Call listener function at run time
mq.addListener(removeHiddenClass); // Attach listener function on state changes
