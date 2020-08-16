var maxScore = document.querySelector("#max");
maxScore.min = 1;
maxScore.default = 5;
var MAX = 5;
var gameOver = 0;
var currScore = document.querySelector("#maxScore");
maxScore.addEventListener("change",function(){
	currScore.textContent = this.value;
	MAX = this.value;
});

var s1 = document.querySelector("#score1");
var s2 = document.querySelector("#score2");

var p1 = document.querySelector("#p1");
p1.addEventListener("click",function() {
	if(gameOver == 0) {
		var score1 = Number(s1.textContent);
		score1 = score1 + 1;
		s1.textContent = score1;
		if(score1 == MAX){
			endGame(s1);
		}
	}
});

var p2 = document.querySelector("#p2");
p2.addEventListener("click",function(){
	if(!gameOver) {
		var score1 = Number(s2.textContent);
		score1 = score1 + 1;
		s2.textContent = score1;
		if(score1 == MAX){
			endGame(s2);
		}
	}
});

function endGame(s) {
	gameOver = 1;
	s.style.color = "green";
}

var reset = document.querySelector("#reset");
reset.addEventListener("click",function(){
	gameOver = 0;
	s1.textContent = "0";
	s2.textContent = "0";
	s1.style.color = "black";
	s2.style.color = "black";
});