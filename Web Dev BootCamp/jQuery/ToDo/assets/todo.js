var num = 0;
var list = $('.container');
var todo = document.querySelectorAll(".list");
var newToDo = $("#newToDo");
var deleteButton = document.querySelectorAll(".deletebutton");
var hide = $("#hideshow");
function fun(i) {
	var todo = document.querySelectorAll(".list");
	var deleteButton = document.querySelectorAll(".deletebutton");
	for(var j = i;j<todo.length;j++) {
				todo[j].id -=1 ;
				if(todo[j].id%2 == 1){
					todo[j].style.backgroundColor = "pink";
				}
				else{
					todo[j].style.backgroundColor = "white";
				}
				deleteButton[j].id -= 1;
			}
}
function deleteToDo() {
	console.log(this);
	var todo = document.querySelectorAll(".list");
	var deleteButton = document.querySelectorAll(".deletebutton");
	var id = this.id;
	for(var i=0;i<todo.length;i++) {
		if(todo[i].id == id) {
			console.log(i);
			todo[i].remove();
			console.log(todo);
			fun(i);
			num-=1;
			break;
		}
	}
}

hide.click(function(){
	var x = document.querySelector("#newToDo");
	if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
   }
});
function addToDo(event) {
	var list = $('.container');
	if(event.which == 13){
   		list.append('<div class="list" id='+ (num+1) + '> <button class="deletebutton" id=' + (num+1) + '> <i class="far fa-trash-alt"></i> </button> ' + newToDo.val() + '</div>'); 
   		deleteButton = document.querySelectorAll(".deletebutton");
   		deleteButton[num].addEventListener("click",deleteToDo);
   		todo = document.querySelectorAll(".list");
   		if(num%2 == 0) {
   		 	todo[num].style.backgroundColor = "pink";
   		 }
   		newToDo.val("");
   		num+=1;
	}
	
}


newToDo.on("keypress",addToDo);





//deleteButton.on("click",deleteToDo);