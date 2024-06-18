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
      imageSmall[a].classList.remove("active");
    }
    imageMain.src = imageSmall[index].src;
    imageSmall[index].classList.add("active");
  });
}
// * quantity-product
const quadPlus = document.querySelector(".ri-add-line");
const quadMinus = document.querySelector(".ri-subtract-line");
const quadInput = document.querySelector(".quantity-input");
let qty = 1;
if (quadMinus != null && quadPlus != null) {
  quadPlus.addEventListener("click", () => {
    qty++;
    quadInput.value = qty;
  });
  quadMinus.addEventListener("click", () => {
    if (qty <= 1) {
      return false;
    } else {
      qty--;
      quadInput.value = qty;
    }
  });
}

// xử lý quận huyện
document.addEventListener("DOMContentLoaded", function () {
  const citySelect = document.getElementById("city");
  const districtSelect = document.getElementById("district");
  const wardSelect = document.getElementById("ward");

  // Mock data for districts and wards
  const mockDistricts = [
    { id: "1", name: "Quận 1" },
    { id: "2", name: "Quận 2" },
    { id: "3", name: "Quận 3" },
    // Add more districts as needed
  ];

  const mockWards = [
    { id: "101", name: "Phường Bến Nghé" },
    { id: "102", name: "Phường Cầu Kho" },
    { id: "103", name: "Phường Nguyễn Cư Trinh" },
    // Add more wards as needed
  ];

  // Function to populate districts dropdown
  function populateDistricts(provinceId) {
    districtSelect.innerHTML = '<option value="">Chọn Quận/Huyện</option>';
    mockDistricts.forEach((district) => {
      let option = document.createElement("option");
      option.value = district.id;
      option.textContent = district.name;
      districtSelect.appendChild(option);
    });
  }

  // Function to populate wards dropdown
  function populateWards(districtId) {
    wardSelect.innerHTML = '<option value="">Chọn Phường/Xã</option>';
    mockWards.forEach((ward) => {
      let option = document.createElement("option");
      option.value = ward.id;
      option.textContent = ward.name;
      wardSelect.appendChild(option);
    });
  }

  // Event listener for city select change
  citySelect.addEventListener("change", function () {
    const selectedCityId = this.value;
    // Call function to populate districts dropdown
    populateDistricts(selectedCityId);
  });

  // Event listener for district select change
  districtSelect.addEventListener("change", function () {
    const selectedDistrictId = this.value;
    // Call function to populate wards dropdown
    populateWards(selectedDistrictId);
  });
});
