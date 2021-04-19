const burger = document.querySelector('.burger');
const nav = document.getElementsByTagName('aside')[0];
const navLinks = document.querySelectorAll('.nav__links li');
const htmlOverlay = document.getElementById('htmlOverlay');

function burgerClick(){
	//Toggle Nav
	nav.classList.toggle('nav-active');

	//prevent scroll while active nav
	if (nav.classList.contains("nav-active")) {
		document.body.style.overflow = "hidden"
		htmlOverlay.style.opacity = 0.2;
		htmlOverlay.style.pointerEvents = "auto"
		
	} else {
		document.body.style.overflow = "auto"
		htmlOverlay.style.opacity = 0;
	}

	//Scroll to top
	scrollTo(0,0);

	//animate Links
	navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = ''
		} else {
			link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
		}
	});

	//Burger Animation
	burger.classList.toggle('burger-toggle')
}

//Clicking dark area closes the nav
htmlOverlay.addEventListener('click', () => { burgerClick() })

// Burger menu clicked
burger.addEventListener('click', () => { burgerClick() });