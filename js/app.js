const mq = window.matchMedia("(min-width: 768px)");
// let image = document.getElementById("headingImage");
// const bigImage = document.createElement("img");

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

// bigImage.onload = function () {
//   image.style.backgroundImage = this.style.backgroundImage;
// };

// setTimeout(function () {
//   bigImage.style.backgroundImage = "url('../img/test.jpg')";
// }, 50);

removeHiddenClass(mq); // Call listener function at run time
mq.addListener(removeHiddenClass); // Attach listener function on state changes
