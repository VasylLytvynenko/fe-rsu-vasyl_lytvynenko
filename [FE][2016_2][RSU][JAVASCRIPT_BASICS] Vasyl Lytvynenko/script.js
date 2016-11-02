/*task 1-st:Declare two variables and show them*/
function show_var(){
	var a = document.getElementById('fstfig').value;
	console.log(a);
	var b = document.getElementById('sndfig').value;
	var p=document.createElement("p");
	var text=document.createTextNode(b);	
	p.appendChild(text);
	var area = document.getElementById('addb');
	area.appendChild(p);
}
/*task 2-nd Write a function that can find triangle's area*/
/*
function area(){
	var q = parseFloat(prompt("Enter first the length of the sides of the triangle, only numbers please", 3));
	var w = parseFloat(prompt("Enter second the length of the sides of the triangle, only numbers please", 3));
	var e = parseFloat(prompt("Enter third the length of the sides of the triangle, only numbers please", 3));
	p=(q+w+e)/2;
	r=p*(p-q)*(p-w)*(p-e)
	s=Math.pow(r,0.5)
	return alert("The area of triangle is: "+s+"(whatever your entered)");
};
*/
function area(){
	var q = parseFloat(document.getElementById('fstsid').value);
	var w = parseFloat(document.getElementById('sndsid').value);
	var e = parseFloat(document.getElementById('trthsid').value);
	p=(q+w+e)/2;
	r=p*(p-q)*(p-w)*(p-e)
	s=Math.pow(r,0.5)
	var p=document.createElement("p");
	var text=document.createTextNode("The area of triangle is: "+s.toFixed(3)+"(whatever your entered)"+String.fromCharCode(178));
	p.appendChild(text);
	var area = document.getElementById('addarr');
	area.appendChild(p);
};
/*task 3-rd Write a function that reverse the given array using three kind of loops*/
/*loop for*/
function array(){
var arr=[];
	arr[0] = document.getElementById('fstarr1').value;
	arr[1] = document.getElementById('sndarr1').value;
	arr[2] = document.getElementById('trtharr1').value;
var barr=[];	
	for (i=0;i<arr.length;i++){
		barr.push(arr[arr.length-(i+1)]);
	}
	var p=document.createElement("p");
	var text=document.createTextNode(barr[0]+barr[1]+barr[2]);
	p.appendChild(text);
	var area = document.getElementById('addarray');
	area.appendChild(p);
};
/*loop while*/
function array2(){
var arr=[];
	arr[0] = document.getElementById('fstarr2').value;
	arr[1] = document.getElementById('sndarr2').value;
	arr[2] = document.getElementById('trtharr2').value;
var barr=[];	
	var i=0;
	while (i<arr.length){
		barr.push(arr[arr.length-(i+1)]);
		i++;
	}
	var p=document.createElement("p");
	var text=document.createTextNode(barr[0]+barr[1]+barr[2]);
	p.appendChild(text);
	var area = document.getElementById('addarray2');
	area.appendChild(p);
};
/*loop do while*/
function array3(){
var arr=[];
	arr[0] = document.getElementById('fstarr3').value;
	arr[1] = document.getElementById('sndarr3').value;
	arr[2] = document.getElementById('trtharr3').value;
var barr=[];	
	var i=0;
	do{
		barr.push(arr[arr.length-(i+1)]);
		i++;	
	}
	while (i<arr.length);
	var p=document.createElement("p");
	var text=document.createTextNode(barr[0]+barr[1]+barr[2]);
	p.appendChild(text);
	var area = document.getElementById('addarray3');
	area.appendChild(p);
};
/*task 5-th Write a function that checks if the given arguments is positive number or negative number or is 0*/
function match(){
	var a = parseFloat(document.getElementById('match').value);
	var b = null;
	if(a>0){
		b = "You entered positive number";
	}
	else if(a===0){
		b = "You entered zero";	
	}
	else if(a<0){
		b = "You entered negative number";	
	}
	else{
		b = "Dude be a man, just use numbers";		
	}
	var p=document.createElement("p");
	var text=document.createTextNode(b);	
	p.appendChild(text);
	var area = document.getElementById('addmatch');
	area.appendChild(p);
}
/*task 6-th Create a page that asks the user his name and alert it back*/
	function req(){
		var q = prompt("Enter your name please", "Лада Ильина");
		alert("You enter: "+q);
	};
/*task 7-th Write a function that calculates factorial*/
	function fact(){
		var a = parseInt(document.getElementById('fact').value);
		var b = null;
		function factor(n){		
			if(n!==1) return n*factor(n-1);
			else return 1;
		};
		if(a>0){
			b=factor(a);
		var text=document.createTextNode("Factorial from "+a+" will be: "+b);					
		}
		else{
			b="Dude be a man, just use positive numbers more than a zero";
		var text=document.createTextNode(b);				
		}
		var p=document.createElement("p");
		p.appendChild(text);
		var area = document.getElementById('addfact');
		area.appendChild(p);
	};