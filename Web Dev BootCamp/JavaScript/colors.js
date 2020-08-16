var correct = ""
var boxes = document.querySelectorAll(".boxes");
var easy = 0;
var hard = 1;
function newColors() {
	hard = 1;
	easy = 0;
	var red = document.querySelector("#R");
	var green = document.querySelector("#G");
	var blue = document.querySelector("#B");

	var red2 = Math.floor(Math.random() * 256);
	var green2 = Math.floor(Math.random() * 256);
	var blue2 = Math.floor(Math.random() * 256);

	red.textContent = red2;
	green.textContent = green2;
	blue.textContent = blue2;

	var correctAnswer = Math.floor(Math.random() * 6);

	var fullColorHex = function(r,g,b){   
	  var red = rgbToHex(r);
	  var green = rgbToHex(g);
	  var blue = rgbToHex(b);
	  return red+green+blue;
	}

	var rgbToHex = function (rgb) { 
	  var hex = Number(rgb).toString(16);
	  if (hex.length < 2) {
	       hex = "0" + hex;
	  }
	  return hex;
	}
	for (var i = 0; i < boxes.length; i++) {
		if(i==correctAnswer) {
			boxes[i].style.backgroundColor = "#" + fullColorHex(red2,green2,blue2);
			correct = boxes[i].style.backgroundColor;
			console.log("correct == " + correct);
		}
		else {
			var red3 = Math.floor(Math.random() * 256);
			var green3 = Math.floor(Math.random() * 256);
			var blue3 = Math.floor(Math.random() * 256);
			boxes[i].style.backgroundColor = "#" + fullColorHex(red3,green3,blue3);
		}
	}
}

function check () {
	if(hard) {
		newColors();
	}
	else {
		newColors2();
	}
}
newColors();
var newGame = document.querySelector("#newColors");
newGame.addEventListener("click", check);

function addEventListenerList(list, event, fn) {
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn);
    }
}

function buttonClick() {
	if(this.style.backgroundColor == correct) {
		alert("Winner");
	}
	else {
		this.style.backgroundColor = "#212027";
	}
}

addEventListenerList(boxes,"click",buttonClick);

var hard = document.querySelector("#hard");
hard.addEventListener("click",newColors);

function newColors2() {
	easy = 1;
	hard = 0;
	var red = document.querySelector("#R");
	var green = document.querySelector("#G");
	var blue = document.querySelector("#B");

	var red2 = Math.floor(Math.random() * 256);
	var green2 = Math.floor(Math.random() * 256);
	var blue2 = Math.floor(Math.random() * 256);

	red.textContent = red2;
	green.textContent = green2;
	blue.textContent = blue2;

	var correctAnswer = Math.floor(Math.random() * 2);

	var fullColorHex = function(r,g,b){   
	  var red = rgbToHex(r);
	  var green = rgbToHex(g);
	  var blue = rgbToHex(b);
	  return red+green+blue;
	}

	var rgbToHex = function (rgb) { 
	  var hex = Number(rgb).toString(16);
	  if (hex.length < 2) {
	       hex = "0" + hex;
	  }
	  return hex;
	}
	for (var i = 0; i < boxes.length; i++) {
		if(i==correctAnswer) {
			boxes[i].style.backgroundColor = "#" + fullColorHex(red2,green2,blue2);
			correct = boxes[i].style.backgroundColor;
			console.log("correct == " + correct);
		}
		else if(i%2==0) {
			var red3 = Math.floor(Math.random() * 256);
			var green3 = Math.floor(Math.random() * 256);
			var blue3 = Math.floor(Math.random() * 256);
			boxes[i].style.backgroundColor = "#" + fullColorHex(red3,green3,blue3);
		}
		else {
			boxes[i].style.backgroundColor = "#212027";
		}
	}
}
var easy = document.querySelector("#easy");
easy.addEventListener("click",newColors2);

