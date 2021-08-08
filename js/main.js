/* ============== MENU SHOW AND HIDDEN ==============*/
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close');

/* ======= PC SHOW/HIDDEN =======*/
/* MENU SHOW*/
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	})
}
/* MENU HIDDEN*/
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	})
}

/* ======= MOBILE SHOW/HIDDEN =======*/

const navlink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click',linkAction));

/* ======= SKILLS LIST =======*/

const skillsContent = document.getElementsByClassName('skills__content'),
	   skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
	let itemClass = this.parentNode.className;

	for (i=0; i<skillsContent.length; i++) {
		skillsContent[i].className = 'skills__content skills__close';
	}

	if (itemClass === 'skills__content skills__close') 
		this.parentNode.className = 'skills__content skills__open';
}

skillsHeader.forEach((elem) =>{
	elem.addEventListener('click',toggleSkills)
})

/* ======= SLIDER =======*/

 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

/* ======= SCROLL SECTION ACTIVE LINK =======*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
	const scrollY = window.pageYOffset;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop ;

		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
		}
	})
}

window.addEventListener('scroll', scrollActive);

/* ======= BACKGROUND HEADER =======*/

function scrollHeader(){
	const nav = document.getElementById('header');

	if(80 <= this.scrollY)
		nav.classList.add('scroll-header');
	else
		nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

/* ======= SHOW SCROLL BUTTON =======*/

function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	if (560 <= this.scrollY)
		scrollUp.classList.add('show-scroll');
	else
		scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)

/* ======= CHANGE THEME =======*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})