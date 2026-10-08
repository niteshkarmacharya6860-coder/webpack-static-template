import 'swiper/css/bundle';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import '../scss/style.scss'
import '../scss/responsive.scss'
import Swiper from 'swiper';

const sliders = [
	{
		container: '.slider__contents',
		button: '.brands__body .show__more',
		length: window.innerWidth < 1025 && window.innerWidth > 512 ? 6 : 8
	},
	{
		container: '.repair__contents',
		button: '.repair__body .show__more',
		length: window.innerWidth < 1025 && window.innerWidth > 512 ? 3 : 4
	},
	{
		container: '.price__contents',
		length: window.innerWidth < 1025 && window.innerWidth > 512 ? 3 : 4
	}
]

function initSwiper() {
	sliders.forEach(slider => {
		const swiperContainer = document.querySelector(slider.container);
		swiperContainer.classList.add('swiper');
	});

	const swiper = new Swiper('.swiper', {
		modules: [Pagination],
		slidesPerView: 1.2,
		spaceBetween: 15,
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}

function initSlides() {

	sliders.forEach(slider => {

		console.log(slider.length);

		const slides = document.querySelectorAll(
			`${slider.container} .swiper-slide`
		);

		const showMore = document.querySelector(slider.button);
		const showMoreText = document.querySelector(`${slider.button} span`);
		const showMoreImg = document.querySelector(`${slider.button} img`);

		slides.forEach((item, index) => {
			item.style.display = index < slider.length ? 'block' : 'none';
		});

		if (!showMore) return;

		showMore.addEventListener('click', function (e) {
			e.preventDefault();
			console.log(showMoreText);

			const isShowingMore = showMoreText.textContent === 'Show All';
			slides.forEach((item, index) => {
				if (index >= slider.length) {
					item.style.display = isShowingMore ? 'block' : 'none'
				}
			});

			showMoreText.textContent = isShowingMore ? 'Hide' : 'Show All'
			showMoreImg.style.transform = isShowingMore ? 'rotate(180deg)' : 'rotate(0deg)'
		});
	});
};
if (window.innerWidth <= 512) {
	initSwiper();
} else {
	initSlides();
}


let openMobileMenu = document.querySelector('.logo__with__menu__icon>svg');
let closeMobileMenu = document.querySelector('.mobile__menu__container .close__icon');
let mobileMenuContainer = document.querySelector('.mobile__menu__container');
openMobileMenu.addEventListener('click', (e) => {
	e.preventDefault();
	mobileMenuContainer.classList.add('open');
});
closeMobileMenu.addEventListener('click', (e) => {
	e.preventDefault();
	mobileMenuContainer.classList.remove('open');
});