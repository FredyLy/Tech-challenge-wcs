// Javascript file

// PAGE CONTACT
const messageForm = "Your message has been sent. King Aeetes will give you an answer within 24h. Thank you."

document
	.getElementById("contactForm")
	.addEventListener("submit",
		function(event) {
			event.preventDefault();
			alert(messageForm);
		}
	);


//Social networks pop-up
const message_reseaux_sociaux = "Unfortunately, social networks are not operational yet. Try again in 27 or 28 centuries."

document
	.getElementById("reseaux_sociaux")
	.addEventListener("click",
		function(event) {
			event.preventDefault();
			alert(message_reseaux_sociaux);
		}
	);


//scrollUp button
var mybutton = document.getElementById("scrollUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
		}
	else {
		mybutton.style.display = "none";
		}
	}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	}
