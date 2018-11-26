function event1(x){
		document.getElementById("typed").value+=x;
}
function event2(){
		var x = document.getElementById("typed").value;
		document.getElementById("typed").value = eval(x);
}