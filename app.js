// Javascript for hamburger.
// window.onload was used since my eventListener was read before my variables

window.onload = function () {
	const menu = document.querySelector('.navbar__btn');
	const menuLinks = document.querySelector('.navbar__menu');

	menu.addEventListener('click', () => {
		menuLinks.classList.toggle('active');
	});
};
