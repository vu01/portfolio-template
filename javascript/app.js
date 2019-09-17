// GLOBAL
var scrollSpeed = 1000;
var scrollDash = 400;
/************************************************************************************** */
// Change main-image on hover

function distortIn(element) {
	element.style.opacity = "1";
	element.setAttribute('src', 'images/distorted.jpg');
}

function distortOut(element) {
	element.style.opacity = "1";
	element.setAttribute('src', 'images/main-picture.jpg');
}
// END
/************************************************************************************** */


/************************************************************************************** *
// Setting up auto-scroll for nav links
function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var startTime = null;

	// This makes the animation smooth
	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, targetPosition, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	// Math formula used for ease motion
	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}
	requestAnimationFrame(animation);
}

// Projects link
var scrollProjects = document.querySelector('.projects-js-trigger');
scrollProjects.addEventListener('click', function () {
	smoothScroll('.projects-container', scrollSpeed);
});

var barProjects = document.querySelector('.projects-link');
barProjects.addEventListener('click', function () {
	smoothScroll('.projects-container', scrollDash);
});

// Resume link
var scrollResume = document.querySelector('.resume-js-trigger');
scrollResume.addEventListener('click', function () {
	smoothScroll('.resume-container', scrollSpeed);
});

var barResume = document.querySelector('.resume-link');
barResume.addEventListener('click', function () {
	smoothScroll('.resume-container', scrollDash);
});

// Contact link
var scrollContact = document.querySelector('.contact-js-trigger');
scrollContact.addEventListener('click', function () {
	smoothScroll('.contact-container', scrollSpeed);
});

var barContact = document.querySelector('.contact-link');
barContact.addEventListener('click', function () {
	smoothScroll('.contact-container', scrollDash);
});

/* Home Link
var scrollHome = document.querySelector('.home-link');
scrollHome.addEventListener('click', function() {
	smoothScroll('.top', scrollDash);
});
// END
************************************************************************************** */



/************************************************************************************** *
// Homepage animations
var scrollArea = window.innerWidth;
var projectsBox = document.querySelector('.projects');
var resumeBox = document.querySelector('.resume');
var contactBox = document.querySelector('.contact');
var logoBox = document.querySelector('.logo-container');

window.addEventListener('scroll', function () {
	var scrollTop = window.pageYOffset || window.scrollTop;
	var scrollPercent = scrollTop / scrollArea || 0;
	var moveDistance = (scrollPercent * window.innerWidth) * 0.3;
	var quickMove = (scrollPercent * window.innerWidth) * 0.7;


	if (moveDistance > 60) {
		var distanceTravelled = moveDistance - 60;
		contactBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 60) {
		contactBox.style.transform = "translateX(" + "-" + 0 + "vw)";
	}

	if (moveDistance > 40) {
		var distanceTravelled = moveDistance - 40;
		resumeBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 40) {
		resumeBox.style.transform = "translateX(" + "-" + 0 + "vw)";
	}

	if (moveDistance > 20) {
		var distanceTravelled = moveDistance - 20;
		projectsBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 20) {
		projectsBox.style.transform = "translateX(" + "-" + 0 + "vw)";
	}

	logoBox.style.transform = "translateX(" + "+" + quickMove + "vw)";

});
// END
************************************************************************************** */



/***************************************************************************************
// Setting up HOME bar to appear when below homepage, and disappear when at homepage. 
var currentPosition = "Above";
var homeClicked = false;
var scrollHome = document.querySelector('.home-link');

scrollHome.addEventListener('click', function() {
	smoothScroll('.html', scrollSpeed);

	if(currentPosition === "Below") {
		document.querySelector('.home-bar').style.animationName = "home-animation-in";
		homeClicked = true;
	}
});

window.addEventListener('scroll', function()  {
	var skillsPos = document.querySelector('.skills-container').offsetTop;

	if(skillsPos >= (window.pageYOffset+5)) {
		// this.console.log("Above");

		if((currentPosition === "Below") && homeClicked === false) {
			document.querySelector('.home-bar').style.animationName = "home-animation-in";
			currentPosition = "Above";
		}
	}
	else {
		// this.console.log("Below");

		if((currentPosition === "Above") && homeClicked === false) {
			document.querySelector('.home-bar').style.animationName = "home-animation-out";
			currentPosition = "Below";
		}
	}
	
	if(this.window.pageYOffset === 0) {
		homeClicked = false;
	}
		// Used for debugging
		//this.console.log("skills C offset: " + document.querySelector('.skills-container').offsetTop);
		//this.console.log("pageYoffset: " + window.pageYOffset);

	});
// END
************************************************************************************** */

/***************************************************************************************/
// Setting up HOME bar to appear when below homepage, and disappear when at homepage. 
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
		document.querySelector('.home-bar').style.top = "0";
	} else {
		document.querySelector('.home-bar').style.top = "-10vw";
	}
}
// END
/************************************************************************************** */


/***************************************************************************************/
// Setting up type writer animation for sub-logo
var i = 0;
var txt = '     TONY VU';
var speed = 100;

function typeWriter() {
	if (i === 8) {
		document.querySelector('.loadme').innerHTML += "Y ";
		i++;
		i++;
		setTimeout(typeWriter, speed);
	}
	else if (i < txt.length) {
		document.querySelector('.loadme').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

typeWriter();
// END
/************************************************************************************** */


