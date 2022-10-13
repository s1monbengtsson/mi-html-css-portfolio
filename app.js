// Creating variables for hamburger menu

const navBtn = document.querySelector("#navbar__btn");
const navMenu = document.querySelector("#navbar__items");

navBtn.addEventListener("click", () => {
	navBtn.classList.toggle("active");
	navMenu.classList.toggle("active");
});
