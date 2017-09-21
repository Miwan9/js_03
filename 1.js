var array= [1,2,3,4,5];

// Zadacha 1
// function fir (){
// 	document.getElementById('new').innerHTML=array;
// }
// fir ();


//Zadacha2
// document.getElementById('btn').onclick=mass;
// function mass (){
// 	var b=document.getElementById('inp1');
// 	console.log(b.value);
// 	var c=document.getElementById('inp2');
// 	console.log(c.value);
// }


//Zadacha3
document.getElementById('pop').onclick=metodPop;
function metodPop () {
	array.pop();
	console.log(array);
}

//Zadacha4
document.getElementById('shift').onclick=metodShift;
function metodShift () {
	array.shift();
	console.log(array);
}

//Zadacha5
document.getElementById('push').onclick=metodPush;
function metodPush () {
	array.push(6);
	console.log(array);
}
