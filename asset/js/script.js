document.addEventListener("DOMContentLoaded", () => {
  const sliderItem = document.querySelectorAll(".slider-item");
  const sliderItems = document.querySelector(".slider-items");
  const arrowRight = document.querySelector(".ri-arrow-right-line");
  const arrowLeft = document.querySelector(".ri-arrow-left-line");
  const Menubar = document.querySelector(".header-bar-icon");
  const headerNav = document.querySelector(".header-nav");

  if (sliderItems) {
    for (let index = 0; index < sliderItem.length; index++) {
      sliderItem[index].style.left = index * 100 + "%";
    }
  }

  //* Click chuyển ảnh
  function sidlerMove(i) {
    if (sliderItems) {
      sliderItems.style.transform = `translateX(-${i * 100}%)`;
    }
  }

  let i = 0;
  if (arrowRight && arrowLeft) {
    arrowRight.addEventListener("click", () => {
      i++;
      if (i < sliderItem.length) {
        sidlerMove(i);
      } else {
        i = sliderItem.length - 1;
      }
    });
    arrowLeft.addEventListener("click", () => {
      if (i > 0) {
        i--;
        sidlerMove(i);
      } else {
        i = 0;
      }
    });
  }

  //* Di chuyển ảnh tự động
  function autoSlider() {
    if (i < sliderItem.length - 1) {
      i++;
      sidlerMove(i);
    } else {
      i = 0;
      sidlerMove(i);
    }
  }

  setInterval(autoSlider, 5000);

  //* Menubar responsive
  if (Menubar && headerNav) {
    Menubar.addEventListener("click", () => {
      headerNav.classList.toggle("active");
    });
  }
});
// *click product image detail
const imageSmall = document.querySelectorAll(".product-images-items img");
const imageMain = document.querySelector(".main-image");
for (let index = 0; index < imageSmall.length; index++) {
  imageSmall[index].addEventListener("click", () => {
    for (let a = 0; a < imageSmall.length; a++) {
      imageSmall[a].classList.remove('active')
    }
    imageMain.src = imageSmall[index].src;
    imageSmall[index].classList.add("active");
  });
}
