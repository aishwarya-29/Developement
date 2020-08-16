var arr = [];
var ch = "gibberish"
while(ch != "quit") {
	ch = prompt("Enter choice");
	if(ch == "new") {
		var todo = prompt("Enter task");
		arr.push(todo);
	}
	else if(ch == "list") {
		console.log(arr);
	}
	else if(ch == "quit") {
			
	}
	else {
		alert("Invalid gibberish");
	}
}