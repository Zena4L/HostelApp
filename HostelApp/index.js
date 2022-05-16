"use strict";

const btnShowModel = document.querySelectorAll(".gallary-show");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const booked = document.querySelector(".modal__btn");
const succes = document.querySelector(".booked-text");
const ctaText = document.querySelector(".cta-text");
let rooms = 50;
const btnBook = document.querySelector(".cta-btn");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  succes.classList.add("hidden");
};

for (let i = 0; i < btnShowModel.length; i++) {
  btnShowModel[i].addEventListener("click", showModal);
}

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.remove("hidden")) {
    closeModal();
  }
});
//cta

btnBook.addEventListener("click", function () {
  if (rooms > 1) {
    rooms--;
    rooms;
    ctaText.textContent = `${rooms} Rooms left`;
  }
});

booked.addEventListener("click", function () {
  succes.classList.remove("hidden");
});
