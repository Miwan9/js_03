var array= [1,2,3,4,5];

// Zadacha 1
// function fir (){
// 	document.getElementById('new').innerHTML=array;
// }
// fir ();


//Zadacha 2
// document.getElementById('btn').onclick=mass;
// function mass (){
// 	var b=document.getElementById('inp1');
// 	array.push(b.value);
// 	var c=document.getElementById('inp2');
// 	array.push(c.value);
// 	console.log(array);
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
	var d=document.getElementById('inp1')
	array.push(d.value);
	console.log(array);
}
