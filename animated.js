"use strict";
const animateElements = document.querySelectorAll(".animate");

if (animateElements) {
	function playAnimation(element) {
		if (
			element.getBoundingClientRect().top > 0 &&
			element.getBoundingClientRect().top <= window.innerHeight * 0.75
		) {
			element.classList.add("animated");
		}
	}

	for (let element of animateElements) {
		window.addEventListener("load", function () {
			playAnimation(element);
		});
		window.addEventListener("scroll", function () {
			playAnimation(element);
		});
	}
}

/* Animate Repeat */
/* https://webdesign.tutsplus.com/tutorials/animate-on-scroll-with-javascript--cms-36671 */
const scrollElements = document.querySelectorAll(".animate-repeat");

if (scrollElements) {
	const elementInView = (el, dividend = 1) => {
		const elementTop = el.getBoundingClientRect().top;

		return (
			elementTop <=
			(window.innerHeight || document.documentElement.clientHeight) / dividend
		);
	};

	const elementOutofView = (el) => {
		const elementTop = el.getBoundingClientRect().top;

		return (
			elementTop > (window.innerHeight || document.documentElement.clientHeight)
		);
	};

	const displayScrollElement = (element) => {
		element.classList.add("animated");
	};

	const hideScrollElement = (element) => {
		element.classList.remove("animated");
	};

	const handleScrollAnimation = () => {
		scrollElements.forEach((el) => {
			if (elementInView(el, 1.25)) {
				displayScrollElement(el);
			} else if (elementOutofView(el)) {
				hideScrollElement(el);
			}
		});
	};

	window.addEventListener("load", () => {
		handleScrollAnimation();
	});

	window.addEventListener("scroll", () => {
		handleScrollAnimation();
	});
}
