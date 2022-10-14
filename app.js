window.onload = function () {
	const menu = document.querySelector('.navbar__btn');
	const menuLinks = document.querySelector('.navbar__menu');

	menu.addEventListener('click', () => {
		menuLinks.classList.toggle('active');
	});
};
