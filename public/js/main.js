(function navSlide() {
	const burger = document.querySelector('.burger');
	const nav = document.getElementsByTagName('aside')[0];
	const navLinks = document.querySelectorAll('.nav__links li');
	
	burger.addEventListener('click', () => {
		//Toggle Nav
		nav.classList.toggle('nav-active');

        //prevent scroll while active nav
        if (nav.classList.contains("nav-active")) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
            
        }
        
        //Scroll to top
        window.scrollTo(0,0);
		
		//animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ''
			} else {
				link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
			}
		});

		//Burger Animation
		burger.classList.toggle('burger-toggle')
	});
})();