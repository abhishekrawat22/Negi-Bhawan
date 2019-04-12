/* For Class - navigation. */
window.onscroll = function() {navPanelOne()};

let nav = document.getElementById('panelOne');

let sticky = nav.offsetTop;

function navPanelOne() {
	if (window.pageYOffset > sticky) {
		nav.classList.add('sticky');
		nav.classList.remove('navigation');
	}
	else {
		nav.classList.remove('sticky');
		nav.classList.add('navigation');
	}
}

/* To Show On Clicking Menu Icon. */
let hiddenPanel = document.getElementById('panelTwo');

let button = document.getElementById('bar');

let close = document.getElementsByClassName('close')[0];

button.onclick = function() {
	hiddenPanel.setAttribute('style', 'display: block; position: fixed; width: 100%;height: 30em;background: #DAE0E2;display: grid;grid: auto;top: 0;line-height: 2em;');
}

close.onclick = function() {
  	hiddenPanel.style.display = 'none';
}

/* Show Room Price. */
let roomType = document.getElementById('room-type');
let roomPrice = document.getElementById('room-price');

roomPrice.innerHTML = 'Rs. 2000/- + GST';

let room = () => {
	if(roomType[0].selected == true) {
		roomPrice.innerHTML = 'Rs. 2000/- + GST';
	}
		
	if(roomType[1].selected == true) {
		roomPrice.innerHTML = 'Rs. 5000/- + GST';
	}
		
	else if(roomType[2].selected == true) {
		roomPrice.innerHTML = 'Rs. 8000/- + GST';
	}
}
