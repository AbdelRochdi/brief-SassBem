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

const featuresList = document.querySelector('.features__list');
const featuresItems = document.querySelectorAll('.features__list li');
const featuresArticles = document.querySelectorAll('.features__articles');

featuresList.addEventListener('click', changeFeature);

function changeFeature(e) {
	console.log(featuresArticles);
	if (e.target.classList.contains('bar')) {
		return;
	}

	featuresItems.forEach((item, index) => {
		if (item === e.target) {
			item.lastChild.style.display = 'block';
			featuresArticles[index].style.display = 'block';
		} else {
			item.lastChild.style.display = 'none';
			featuresArticles[index].style.display = 'none';
		}
	});
}

const questions = document.querySelector('.questions__menu');

questions.addEventListener('click', slideText);

function slideText(e) {
	console.log(e.target);
	console.log(e.target.parentElement);
	if (e.target.classList.contains('accordion')) {
		if (e.target.parentElement.lastElementChild.style.display === 'block') {
			e.target.parentElement.lastElementChild.style.display = 'none';
		} else {
			e.target.parentElement.lastElementChild.style.display = 'block';
		}
	}
	e.preventDefault();
}
