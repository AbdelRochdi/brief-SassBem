const navSlide = () => {
	const burger = document.querySelector('.nav__burger');
	const nav = document.querySelector('.nav');
	const close = document.querySelector('.nav__close');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	});
	close.addEventListener('click', () => {
		nav.classList.remove('nav-active');
	});
};

navSlide();
