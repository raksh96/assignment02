function changeColor1(quote)
{
  document.getElementById("quote").style.color = "white";
  document.getElementById("quote").style.backgroundColor = "#007bb5";
  document.getElementById("quote").style.borderColor = "#000066";
  document.getElementById("quote").style.fontFamily = "'Amita',Charcoal,sans-serif"; 
  document.getElementById("quote").style.fontSize= "17px";
}
function changeColor2(quote)
{
  document.getElementById("quote").style.color = "black"; 
  document.getElementById("quote").style.backgroundColor = "#4CAF50";
  document.getElementById("quote").style.borderColor = "green";
  document.getElementById("quote").style.fontFamily = "Impact,Charcoal,sans-serif";
  document.getElementById("quote").style.fontSize= "20px";
}

function changeColor3(quote)
{
  document.getElementById("quote").style.color = "gold"; 
  document.getElementById("quote").style.backgroundColor = "maroon";
  document.getElementById("quote").style.borderColor = "red";
  document.getElementById("quote").style.fontFamily = "'Barrio',sans-serif";
  document.getElementById("quote").style.fontSize= "19px";
}

function changeColor4(quote)
{
  document.getElementById("quote").style.color = "black"; 
  document.getElementById("quote").style.backgroundColor = "yellow";
  document.getElementById("quote").style.borderColor = "#cc9900";
  document.getElementById("quote").style.fontFamily = "'Indie Flower',sans-serif";
  document.getElementById("quote").style.fontSize= "23px";
}
function calc()
{
	var n1 = parseFloat(document.getElementById('n1').value);
	var oper = document.getElementById('operators').value;

	if(oper === 'kgtolb')
	{
		document.getElementById("result").innerHTML = n1*2.2046+" Pounds";
	}

	if(oper === 'lbtokg')
	{
		document.getElementById("result").innerHTML = n1/2.2046+" Kilograms";
	}
}

function calculate() {
  var values = document.getElementById('box1').value.split(/,/g);
  var sum = values.reduce(function(a, b) { return parseInt(a) + parseInt(b); });
  document.querySelector('#max').innerHTML = values.max();
  document.querySelector('#min').innerHTML = values.min();
  document.querySelector('#sum').innerHTML = sum;
  document.querySelector('#avg').innerHTML = sum / values.length;
  document.querySelector('#reverse').innerHTML = values.reverse().join(',');
}

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

window.onload = function(e){ 

    
    
    document.getElementById("clear").onclick = clear;
    document.getElementById("capital").onclick = captilize;
    document.getElementById("sort").onclick = sort;
    document.getElementById("reverse").onclick = reverse;
    document.getElementById("strip_blank").onclick = strip_blank;
    document.getElementById("add_number").onclick = add_number;
    document.getElementById("shuffle").onclick = shuffle;
}

var clickState = 0;



function clear(){
	
	var magic_element = document.getElementById("magic_id");
		
	magic_element.value = "";

}

function captilize(){

    var magic_element = document.getElementById("magic_id");
		
    var value = magic_element.value;

    if (clickState == 0) {
       
        magic_element.value = value.toUpperCase();
        clickState = 1;
      } else {
        
        magic_element.value = value.toLowerCase();
        clickState = 0;
      }
  

}

function sort(){

   	var magic_element = document.getElementById("magic_id");
		
    var value = magic_element.value;
    
    magic_element.value = value.split("\n").sort().join("\n");

}

function reverse(){

    var magic_element = document.getElementById("magic_id");
     
 var value = magic_element.value;

 var x = value.split("\n");
for(i=0; i<x.length; i++){    
    x[i] = x[i].split("").reverse().join("");
} 
 magic_element.value = x.join("\n");

}

function strip_blank(){

    var magic_element = document.getElementById("magic_id");
     
 var value = magic_element.value;

 
 magic_element.value = value.replace(/\s/g,"");

}

function add_number(){

    var magic_element = document.getElementById("magic_id");
     
 var value = magic_element.value;
 
 var x = value.split("\n");
for(i=0; i<x.length; i++){    
    x[i] = x[i]+"1. ";;
} 
 magic_element.value = x.join("\n");

}




