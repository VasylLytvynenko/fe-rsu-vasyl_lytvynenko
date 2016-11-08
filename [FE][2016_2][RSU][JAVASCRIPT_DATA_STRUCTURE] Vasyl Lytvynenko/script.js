"use strict"

/*task 1-st:Write a JavaScript program to display the current day and time in the following format. Sample Output: Today is: Friday.*/
function show_day_time(){
	var d =new Date();
	function getWeekDay(){
		var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return days[d.getDay()];
	};
	var day=getWeekDay();
	var hours= d.getHours();
	var minutes=(d.getMinutes() < 10)?("0" + d.getMinutes()):d.getMinutes();
	var seconds=(d.getSeconds() < 10)?("0" + d.getSeconds()):d.getSeconds();
	var p=document.createElement("p");
	p.appendChild(document.createTextNode
	("Today is: "+day+", and time it is now "+hours+":"+minutes+":"+seconds));
	document.getElementById('add_d').appendChild(p);
};

/*task 2-nd:Write a JavaScript program to get the current date.*/
function show_date(){
	var d =new Date();
	var days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var monthes=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	function getSomth(n, m){return n[m];};
	var day=getSomth(days, d.getDay());
	var month=getSomth(monthes, d.getMonth());
	var year= d.getFullYear();
	var date= d.getDate();
	var p=document.createElement("p");
	p.appendChild(document.createTextNode
	("Today is: "+date+" "+month+" "+year+" years, and it's "+day+" by the way."));
	document.getElementById('add_date').appendChild(p);
}

/*task 3-rd:Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.(after optimization)*/
function show_fst(){
	var sty = Number(document.getElementById('sty').value);
	var fy = Number(document.getElementById('fy').value);
	if((sty%1!==0 && fy%1!==0) || !(sty>=0 && sty<=9998 && fy>=1 && fy<=9999)||(sty>fy)){
		alert("Dude, dont waste your time enter right numbers!");
	}
	else{
		function gfst(){
			for(var i=sty;i<=fy;i++){
			var pnt = new Date();
			pnt.setFullYear(i,0,1);
						if(pnt.getDay()==0){
							return pnt.getFullYear();
						}continue;			
			}
		}
		var point = gfst();
		var p=document.createElement("p");
		p.appendChild(document.createTextNode((point!=undefined)?("1st January be a Sunday between "+sty+" and "+fy+" years is: "+point):("Sorry, may be you have to expand range.")));
		document.getElementById('add_fst').appendChild(p);
	}
};
/* Before optimization:
	function show_fst(){
	var sty = Number(document.getElementById('sty').value);
	var fy = Number(document.getElementById('fy').value);
	if((sty%1!==0 && fy%1!==0) || !(sty>=0 && sty<=9998 && fy>=1 && fy<=9999)||(sty>fy)){
		alert("Dude, dont waste your time enter right numbers!");
	}
	else{
		var st = new Date();
		st =st.setFullYear(sty,0,0);
		var f = new Date();
		f =f.setFullYear(fy,0,0);
		function gfst(){
			for(var i=st;i<=f;i+=86400000){
				var pnt =new Date(i);
				if(pnt.getMonth()==0){
					if(pnt.getDate()==1){
						if(pnt.getDay()==0){
							return pnt.getFullYear();
						}continue;	
					}continue;					
				}continue;			
			}
		}
		var point = gfst();
		var p=document.createElement("p");
		p.appendChild(document.createTextNode((point!=undefined)?("1st January be a Sunday between "+sty+" and "+fy+" years is: "+point):("Sorry, may be you have to expand range.")));
		document.getElementById('add_fst').appendChild(p);
	}
};
 */
 
/*task 4-th:Write a JavaScript program to calculate days left until next New Year.*/
function left_day(){
	var fd = new Date();
	var ny = fd.getFullYear()+1;
	fd.setFullYear(ny,0,1);	
	var pd =new Date();
	var count = Math.round((fd.getTime() - pd.getTime())/(1000*60*60*24));
	var p=document.createElement("p");
	p.appendChild(document.createTextNode("For next New Year("+ny+") left: "+count+" day(s)."));
	document.getElementById('left_day').appendChild(p);
}

/*task 5-th:Write a JavaScript function to check whether an `input` is an array or not.*/
function is_array(){
var input = [0,1,2,3,4,5,6,7];
var  message = null;
	(input instanceof Array)?(message="My congratulations to you, it's Array"):(message="Sorry it's not Array"); 
	/*	
	(Array.isArray(input))?(message="My congratulations to you, it's Array"):(message="Sorry it's not Array");
	*/
	var p=document.createElement("p");
	p.appendChild(document.createTextNode(message));
	document.getElementById('is_array').appendChild(p);
}

/*task 6-th:Write a JavaScript function to clone an array*/
function clon_array(){
var input = [0,1,2,3,4,5,6,7];
	var new_input = input.slice();
//Let's check maybe we created just a link:
	new_input[0]=1;
	var p=document.createElement("p");
	p.appendChild(document.createTextNode("This is original array : "+input+", and it's copy : "+new_input+", sorry we changed first value array's copy for check"));
	document.getElementById('clon_array').appendChild(p);
};

/*task 7-th. Write a JavaScript function to find the most frequent item of an array.*/
function letsFindMaxInArray(){
var input=["I want","to be part of","to be part of",false,"to be part of",11,11,"to be part of","to be part of","to be part of","to be part of",false,"I want",false,2,"to be part of",11,"I want","to be part of",2,"I want",2,"I want","I want",false,"I want",false,"I want","I want",11,"I want",2,11,"to be part of",11,1,2,2,2,false,"to be part of",false,"to be part of",11,11,"to be part of","to be part of","to be part of","to be part of",false,"I want",false,2,"to be part of",11,"I want","to be part of",2,"I want",2,"I want","I want",false,"I want",false,"I want","I want",11,"I want",2,11,"to be part of",11,1,2,2,2,false,"to be part of",false,"to be part of",11,11,"to be part of","to be part of","to be part of","to be part of",false,"I want",false,2,"to be part of",11,"I want","to be part of",2,"I want",2,"I want","I want",false,"I want",false,"I want","I want",11,"I want",2,11,"to be part of",11,1,2,2,2,false,"to be part of",false,"to be part of",11,11,"to be part of","to be part of","to be part of","to be part of",false,"I want",false,2,"to be part of",11,"I want","to be part of",2,"I want",2,"I want","I want",false,"I want",false,"I want","I want",11,"I want",2,11,"to be part of",11,1,2,2,2,false,"EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team","EPAM team"];
findMaxInArray(input);
	function findMaxInArray(n){
		var arrayCounter =[];
		for(var i=0; i<n.length; i++){
				var z=0;		
			for(var j=i; j<n.length; j++){
				(n[i]===n[j])?(++z):(z);
			}				
			arrayCounter.push(z);
		}
		function arrayMax(){return Math.max.apply(Math, arrayCounter);};				
		function arrayPosition(sourceArray){
			for(var i=0; i<arrayCounter.length; i++){
			if (arrayCounter[i] ===arrayMax()){ 
			var p=document.createElement("p");
			p.appendChild(document.createTextNode("The most frequent item of an array is: '"+sourceArray[i]+"', it's first detected on the "+i+" position, and detected "+arrayMax()+" times."));
			document.getElementById('arrayMax').appendChild(p);}
			};
		}
		arrayPosition(input);
	};
};

/*task 8-th. Write a JavaScript function that inverts the case of the letters of the given string and returns new string.*/
function inverts_case(){
	var str = document.getElementById('str').value;
	if(!str){
			alert("Dude, dont waste your time enter something!");
	}
	else{	
	var rts="";
	(function (){	
		for(var i=0; i<str.length; i++){
			if(str[i] === str[i].toUpperCase()){
				rts +=str[i].toLowerCase();
			}
			else{rts +=str[i].toUpperCase()}
		}
			return rts;		
	})();
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('This is original string: "'+str+'", and this is copy: "'+rts+'" with inverts the case of the letters.'));
	document.getElementById('inverts_case').appendChild(p);
	}
};

/*task 9-th. Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity.*/
function removeDuplicate(){
	var input=[2,2,2,2,2,"","","","","","","","","","","","","","","Lad","",""," "," "," "," "," "," "," "," "," "," "," "," "," ","","","","","","","","lad","Lad","LAd","laD","lAD","LAD","Dim","DIm","DiM","dim","DIm", "EPAM","Epam","EPaM","ePAM","EpAM","EPAm","ePaM","EpaM","Lad","lad","Lad","LAd","laD","lAD","LAD","Dim","DIm","DiM","dim","DIm", "EPAM","Epam","EPaM","ePAM","EpAM","EPAm","ePaM","EpaM"];
	var new_input = input.slice();
	var newArr = [];
	var newArr1 = [];
	function remove(n){
		for(var i=0; i<n.length; i++){	
			for(var j=i+1; j<n.length; j++){
				if((n[i]!=undefined) && (n[j]!=undefined)){
					if((typeof(n[i])!=="number") && (typeof(n[j])!=="number")){
						if(n[i].toUpperCase() === n[j].toUpperCase()){
							delete n[j];
						}
					}
					else{
					if(n[i] === n[j]){
							delete n[j];
						}
					}
				}				
			}
		}				
		return n;
	};
	remove(input);
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('As you see we get array with emptys values, instead of repeating: "'+input+'"'));
	document.getElementById('removeDuplicate').appendChild(p);
	function remDuplicate(n, m){
		for(var i=0; i<n.length; i++){	
			for(var j=i+1; j<n.length; j++){
				if((n[i]!=undefined) && (n[j]!=undefined)){
					if((typeof(n[i])!== "number") && (typeof(n[j])!=="number")){
						if(n[i].toUpperCase() === n[j].toUpperCase()){
							delete n[j];
						}
					}
					else{
					if(n[i] === n[j]){
							delete n[j];
						}
					}
				}				
			}
		}			
		for(var s=0; s<n.length; s++){	
			if(n[s]!=undefined){
				m.push(n[s])
			}
		}			
		return m;
	};	
	remDuplicate(new_input, newArr);
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('Mayde new array will look more pretty: "'+newArr+'"'));
	document.getElementById('removeDuplicate').appendChild(p);
	function noEmp(n,m){
		for(var s=0; s<n.length; s++){	
			if(n[s]!=""){
				m.push(n[s])
			}
		}			
	}
	noEmp(newArr,newArr1);
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('And if you want array whithout epmty strings: "'+newArr1+'"'));
	document.getElementById('removeDuplicate').appendChild(p);
};
	
/*task 10-th. Write a JavaScript program to shuffle an array*/	
function shuffleArray(){
	var input=[1,2,3,4,5,6,7,8,9,10];
	var new_input = input.slice();
	function compareRandom(a, b) {
		return Math.random() - 0.4;
	}
	new_input.sort(compareRandom);
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('Take this array: "'+input+'" and to shuffle "'+new_input+'"'));
	document.getElementById('shuffleArray').appendChild(p);
}
	
/*task 11 Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array*/	
function cleanArray(){
	var input=[null, 0, "", false, undefined, NaN,1,2,3,4,5,6,7,8,9,10];
	var new_input = [];
		function clean(dirtyArray,emptyArray){
		for(var i=0; i<dirtyArray.length; i++){	
			if(dirtyArray[i]){
				emptyArray.push(dirtyArray[i])
			}
		}		
		return emptyArray;
	}
	clean(input, new_input);
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('Take this array: "'+input+'" and after cleaning it look like "'+new_input+'"'));
	document.getElementById('cleanArray').appendChild(p);
}

/*12.	Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method*/
function sortArray(){
	var library = [ 
	{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
	{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
	{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
	];
	
	library.sort(function (a, b) {
		if (a.title > b.title) {
			return 1;
		}
		if (a.name < b.name) {
			return -1;
		}
		return 0;
	});
	
	for(var i=0; i<library.length; i++){
	var q="";
	for (var j in library[i]){
		q+=j+": "+library[i][j]+", ";
		};			
	var p=document.createElement("p");
	p.appendChild(document.createTextNode(q));
	document.getElementById('sortArray').appendChild(p);
	}
}

/*13.	Write a JavaScript function to merge two arrays and removes all duplicates elements*/
function concatArray(){
	var fstArray = ["q",2,"e",3,"r",4,5, " ",6,7,8,9,10];
	var sndArray = ["d",1,2,"f",3,4,"t",5,"E",6,7,8,9,"Q",10];
	var mainArray = fstArray.concat(sndArray);
	var newMainArray = mainArray.slice();
	var newArr = [];
	
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('First array: "'+fstArray+'"'));
	document.getElementById('concatArray').appendChild(p);	
	
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('Second array: "'+sndArray+'"'));
	document.getElementById('concatArray').appendChild(p);	
	
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('Merge array: "'+mainArray+'"'));
	document.getElementById('concatArray').appendChild(p);	
	
	function remove(n){
		for(var i=0; i<n.length; i++){	
			for(var j=i+1; j<n.length; j++){
				if((n[i]!=undefined) && (n[j]!=undefined)){
					if((typeof(n[i])!=="number") && (typeof(n[j])!=="number")){
						if(n[i].toUpperCase() === n[j].toUpperCase()){
							delete n[j];
						}
					}
					else{
					if(n[i] === n[j]){
							delete n[j];
						}
					}
				}				
			}
		}				
		return n;
	};
	remove(mainArray);
	
	var p=document.createElement("p");	
	p.appendChild(document.createTextNode('Merge array without duplicates: "'+mainArray+'"'));
	document.getElementById('concatArray').appendChild(p);	
	
	function remDuplicate(n, m){
		for(var i=0; i<n.length; i++){	
			for(var j=i+1; j<n.length; j++){
				if((n[i]!=undefined) && (n[j]!=undefined)){
					if((typeof(n[i])!== "number") && (typeof(n[j])!=="number")){
						if(n[i].toUpperCase() === n[j].toUpperCase()){
							delete n[j];
						}
					}
					else{
					if(n[i] === n[j]){
							delete n[j];
						}
					}
				}				
			}
		}			
		for(var s=0; s<n.length; s++){	
			if(n[s]!=undefined){
				m.push(n[s])
			}
		}			
		return m;
	};	
	remDuplicate(newMainArray, newArr);
	
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('More pretty merge array without duplicates: "'+newArr+'"'));
	document.getElementById('concatArray').appendChild(p);
}

/*14.	Write a JavaScript function to remove a specific element from an array*/
var firstArray=[1,2,3,4,5,6,7,8,9,10];

function remElArray(){
var p=document.createElement("p");
p.appendChild(document.createTextNode('Array: "'+firstArray+'"'));
document.getElementById('remElArray').appendChild(p);	
}
/* Sorry but can make only one itteration make more funny
function remElArrayFst(){
	var arrfst = Number(document.getElementById('arrfst').value);
	if((arrfst%1!==0) || !(arrfst>=1 && arrfst<=firstArray.length)){
		alert("Dude, dont waste your time enter right number position of element in array!");
	}
	else{
		var secondArray= firstArray.slice();
		secondArray.splice((arrfst-1), 1);
		var p=document.createElement("p");
		p.appendChild(document.createTextNode('Array without '+arrfst+' element became: "'+secondArray+'"'));
		document.getElementById('remElArrayFst').appendChild(p);			
	}
}
*/
var secondArray= firstArray.slice();
function remElArrayFst(){
	var arrfst = Number(document.getElementById('arrfst').value);
	if((arrfst%1!==0) || !(arrfst>=1 && arrfst<=firstArray.length)){
		alert("Dude, dont waste your time enter right number position of element in array!");
	}
	else{
	if(secondArray[arrfst-1]==undefined){
		alert("Dude, you try to delete empty element in array!");
	}
	else{
		delete secondArray[arrfst-1];	
		var newArr=[];
		function noEmp(n,m){
		for(var s=0; s<n.length; s++){	
			if(n[s]!=undefined){
				m.push(n[s])
			}
		}			
	}
	noEmp(secondArray,newArr);		
		var p=document.createElement("p");
		p.appendChild(document.createTextNode('Array without '+arrfst+' element became: "'+secondArray+'", and more pretty view is: "'+newArr+'"'));
		document.getElementById('remElArrayFst').appendChild(p);			
	}
	return secondArray;	
	}
}

/*15.	Write a JavaScript function to get a random item from an array*/	
var randomArray = ["Яблоко", "Апельсин", "Груша", "Лимон","Вишня","Арбуз","Черешня","Дыня","Слива","Айва","Алыча"];
function randomArrayFst(){
var p=document.createElement("p");
p.appendChild(document.createTextNode('Array: "'+randomArray+'"'));
document.getElementById('randomArrayFst').appendChild(p);	
}
function randomArraySnd(){
	var rand = Math.floor(Math.random() * randomArray.length);
	var span=document.createElement("span");
	span.appendChild(document.createTextNode('"'+randomArray[rand]+'" '));
	document.getElementById('randomArraySnd').appendChild(span);	
}

/*16.	Write a JavaScript function to move an array element from one position to another*/
var moveArray = ["Арбуз","Черешня","Дыня","Слива","Айва","Алыча"];
function moveArrayFst(){
var p=document.createElement("p");
p.appendChild(document.createTextNode('Array: "'+moveArray+'"'));
document.getElementById('moveArray').appendChild(p);	
}
function moveArraySnd(){
	var from = Number(document.getElementById('from').value);
	var to = Number(document.getElementById('to').value);
	if((from%1!==0 && to%1!==0) || !(from>=1 && from<=moveArray.length && to>=1)){
		alert("Dude, dont waste your time enter right number position of element in array!");
	}
	else{
		if(from===to){
			alert("Dude, dont waste it's alredy done!");
		}
		else{
/* 			var z = from-1;
			var x = to-1;
			var y = null;
			(x>moveArray.length)?(y=x):(y=moveArray.length);*/
			var value = moveArray[from-1];	 		
			moveArray.splice((from-1), 1);
			if(moveArray[to-1]!=undefined){
				alert("Sorry we have to move right previous element!")
				var arr1 = moveArray.slice(0, to-1);
				var arr2 = moveArray.slice(to-1);
				moveArray = arr1.concat(value, arr2);
			}
			else{
				moveArray[to-1]=value;
			}
			var p=document.createElement("p");
			p.appendChild(document.createTextNode('Array: "'+moveArray+'"'));
			document.getElementById('moveArraySnd').appendChild(p);	
		}
	}
	return moveArray;
}

/* 17.	Write a JavaScript function to get difference between two dates in days */
function difDate(){
	var stya = document.getElementById('stya').value;
	if(stya===""){stya="Oops"}else{stya=Number(stya)}
	var stm = document.getElementById('stm').value;
	if(stm===""){stm="Oops"}else{stm=Number(stm)}
	var std = document.getElementById('std').value;
	if(std===""){std="Oops"}else{std=Number(std)}	
	var fty = document.getElementById('fty').value;
	if(fty===""){fty="Oops"}else{fty=Number(fty)}
	
	
	var ftm = document.getElementById('ftm').value;
	if(ftm===""){ftm="Oops"}else{ftm=Number(ftm)}
	var ftd = document.getElementById('ftd').value;
	if(ftd===""){ftd="Oops"}else{ftd=Number(ftd)}


if((stya%1!==0 || stm%1!==0 || std%1!==0 || fty%1!==0 || ftm%1!==0 || ftd%1!==0)) {
		alert("Dude, JS of course almost almighty, but even he doesn'st know what is in yours head, be good - enter right numbers");
	}
	else{
		var st=new Date();
			st.setFullYear(stya);
			st.setMonth(stm-1);
			st.setDate(std);
		var f=new Date();
			f.setFullYear(fty);
			f.setMonth(ftm-1);
			f.setDate(ftd);	
		var count = Math.round((f - st)/(1000*60*60*24));
		if(count!=count){count="Sorry, we have exhausted the entire stock of numbers, have pity on us - decrease year"}
		
		var begin = ((std<10)?("0"+std):(std))+"."+((stm<10)?("0"+stm):(stm))+"."+((stya < 10)?("000"+stya):(stya < 100)?("00"+stya):(stya < 1000) ?("0"+stya):(stya));
		
		var finish = ((ftd<10)?("0"+ftd):(ftd))+"."+((ftm<10)?("0"+ftm):(ftm))+"."+((fty < 10)?("000"+fty):(fty < 100)?("00"+fty):(fty < 1000) ?("0"+fty):(fty));

		var p=document.createElement("p");
		p.appendChild(document.createTextNode('Between "'+begin+'" and "'+finish+'" is: '+count+' day(s).'));
		document.getElementById('difDate').appendChild(p);	
	}  
}

/*18.	Write a JavaScript function to get the maximum date from an array of dates*/
var dataArray = ['2015/02/01', '2015/02/02', '2015/01/03', '2015/03/04', '2015/11/14', '2015/12/01', '2015/01/02',];
function showDate(){
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('Array is: "'+dataArray+'"'));
	document.getElementById('showDate').appendChild(p);
};
function showDateFst(){
	dataArray.sort();
	var value = dataArray[(dataArray.length-1)];
	var p=document.createElement("span");
	p.appendChild(document.createTextNode('The maximum date from an array of dates is: "'+value+'"'));
	document.getElementById('showDateFst').appendChild(p);
}

/*19.	Write a JavaScript function to split a string and convert it into an array of words*/function splitArray(){
	var str = document.getElementById('txt').value;
	var arr = str.split(' ');
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('Array is: "'+arr+'"'));
	document.getElementById('splitArray').appendChild(p);
}

/*20.	Write a JavaScript function to capitalize the first letter of a string*/
function firstLetterCapitalize(){
	var input = document.getElementById('flc').value;
	var output="";
	var number=0;
	if(!input){
			alert("Dude, enter something!");
		}
	else{
		function apitalize(str, rts, n){
			for(var i=0; i<str.length; i++){	
				if(i==n){
				rts+=str[i].toUpperCase();
				}
				else{
				rts+=str[i]
				}
			}
			return rts;
		};
		var output1=apitalize(input, output, number);
		var p=document.createElement("p");
		p.appendChild(document.createTextNode('New string is: "'+output1+'"'));
		document.getElementById('firstLetterCapitalize').appendChild(p);				
	}		
}

/*21.	Write a JavaScript function to convert a string into camel case*/
	var row = 0;	
function camelCase(){

	/*Let's define the range of possible characters*/
	var st1 = 65;
	var fin1 = 90;
	var st2 = 97;
	var fin2 = 122;	
	var input = document.getElementById('cCs').value;		
	var output;	
	
	function firstProgon(str, rts){
		var m = 0;	
		for(var i=0; i<str.length; i++){
				if((str.charCodeAt(i)>=st1 && str.charCodeAt(i)<=fin1)||(str.charCodeAt(i)>=st2 && str.charCodeAt(i)<=fin2))break;
			m=i;
		}
	if(!str){
			alert("Dude, enter something!");
		}
	else if((str.length>0) && (m==(str.length-1))){
		alert("Dude, enter something from the range of possible characters");
		}
	else if((m==0)){
			rts = str.slice(m);
		}	
	else{rts = str.slice(m+1);}
	return rts;
	};	
	var output1 = firstProgon(input, output)
	if(output1){
		
		var output2=output1[0];
			function secondProgon(str, rts){
				for(var i=1; i<str.length; i++){		
					if(!((str.charCodeAt(i-1)>=st1 && str.charCodeAt(i-1)<=fin1)||(str.charCodeAt(i-1)>=st2 && str.charCodeAt(i-1)<=fin2))){
					rts+=str[i].toUpperCase()
					}
					else{
						rts+=str[i];
					}							
				}
			return rts;	
			};
		var output3 = secondProgon(output1, output2);
		
		var output4="";
		function thirdProgon(str, rts){
		for(var i=0; i<str.length; i++){		
				if((str.charCodeAt(i)>=st1 && str.charCodeAt(i)<=fin1)||(str.charCodeAt(i)>=st2 && str.charCodeAt(i)<=fin2)){
					rts+=str[i];
					}						
				}
			return rts;	
		}
		var output5 = thirdProgon(output3, output4);
				
		var p1=document.createElement("p");
		p1.appendChild(document.createTextNode('Let\'s clean string for first right character: "'+output1+'".'));
		
		var p2=document.createElement("p");
		p2.appendChild(document.createTextNode('Let\'s make to capitalize the first letters from right characters group : "'+output3+'".'));
				
		var p3=document.createElement("p");
		p3.appendChild(document.createTextNode('Let\'s clean string excess characters: "'+output5+'".'));
	
		var div = document.createElement("div");		
		div.appendChild(p1);
		div.appendChild(p2);
		div.appendChild(p3);
		
		var remove = document.createElement('input');
		remove.setAttribute('type', 'button');
		remove.setAttribute("value", "Clear iterations");
		remove.setAttribute("title", "Close");
		remove.setAttribute("onClick", "deleterow("+ row +");");
		div.appendChild(remove);
		div.setAttribute("id","content"+row);	
	
		document.getElementById('camelCase').appendChild(div);		

		row++;	
	}
}
function deleterow(ID)
{
    document.getElementById('content'+ID).remove();	
}

/*22.	Write a JavaScript function to find the highest value in an array*/
function highestValue(){
	var input =[1,2,3,45,"Sfsf",6,7,8,9,0,90,"Sfsf",6,7,8,9,0,90,"Sfsf"];
		if(!input){
			alert("Dude, enter something!");
		}
		else{
		var p=document.createElement("p");
		p.appendChild(document.createTextNode('Array is: "'+input+'"'));
		document.getElementById('highestValue').appendChild(p);
		var output = input.slice().sort();		
		var max=output[output.length-1]; 	
		function arrayPosition(){
			for(var i=0; i<input.length; i++){
				if (input[i] ===max){ 
					var p=document.createElement("p");
					p.appendChild(document.createTextNode('The highest value in an array is: "'+max+'" , it\'s detected on the '+i+' position(s)'));
				document.getElementById('highestValue').appendChild(p);}
			};
		}
		arrayPosition();	
		} 		
		/* if(!input){
			alert("Dude, enter something!");
		}
		else{
			var output = input.slice().sort();		
			var max=output[output.length-1]; 
			var p=document.createElement("p");
			p.appendChild(document.createTextNode('The highest value in an array "'+input+'" is: "'+max+'"'));
			document.getElementById('highestValue').appendChild(p);			
		} */
}

/*23.	Write a JavaScript function to find the lowest value in an array*/
function lowestValue(){
	var input =[1,2,3,45,"Sfsf",6,7,8,9,0,90,"Sfsf",6,7,8,9,0,90,"Sfsf"];
		if(!input){
			alert("Dude, enter something!");
		}
		else{
			var p=document.createElement("p");
			p.appendChild(document.createTextNode('Array is: "'+input+'"'));
			document.getElementById('lowestValue').appendChild(p);
			var output = input.slice().sort();		
			var min=output[0];	
			function arrayPosition(){
				for(var i=0; i<input.length; i++){
					if (input[i] ===min){ 
						var p=document.createElement("p");
						p.appendChild(document.createTextNode('The lowest value in an array is: "'+min+'" , it\'s detected on the '+i+' position(s)'));
					document.getElementById('lowestValue').appendChild(p);}
				};
			}
			arrayPosition();	
		} 					
		/* else{
			var output = input.slice().sort();		
			var min=output[0]; 
			var p=document.createElement("p");
			p.appendChild(document.createTextNode('The lowest value in an array "'+input+'" is: "'+min+'"'));
			document.getElementById('lowestValue').appendChild(p);			
		} */
}

/*24.	Write a JavaScript function to check to check whether a variable is numeric or not*/
function checkVariable(){
	var input = document.getElementById('chkV').value;
	function isNumeric(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}
	var output = isNumeric(input);
	if(output){
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('You entered "'+input+'" and it is numeric.'));
	document.getElementById('checkVariable').appendChild(p);
	}	
	else{
		var p=document.createElement("p");
		p.appendChild(document.createTextNode('You entered "'+input+'" and it is not numeric.'));
		document.getElementById('checkVariable').appendChild(p);
	}
}
/*25.	Write a JavaScript function to calculate the sum of values in an array*/
	function calculateSumValues(){
	var input =[1,0,90,"ww",1,0,90,"ww","ww"];
	var output = input.slice().sort();
	function sum(n){
		var summ=null;
			for(var i=0; i<n.length; i++){			
			summ+=n[i]
		}
		return summ;
	}
	var inputS = sum(input);
	var outputS = sum(output);
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('The sum of values in an array without sorting "'+input+'" is: "'+inputS+'"'));
	document.getElementById('calculateSumValues').appendChild(p);
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('The sum of values in an array with sorting "'+input+'" is: "'+outputS+'"'));
	document.getElementById('calculateSumValues').appendChild(p);
}

/* 26.	Write a JavaScript program to get the length of a JavaScript object 
	27.	Write a JavaScript program to list the properties of a JavaScript object
*/
function lengthOfObject(){
	var input ={
	author1: 'Bill Gates',
	title1: 'The Road Ahead',
	libraryID1: 1254,
	author2: 'Steve Jobs', 
	title2: 'Walter Isaacson',
	libraryID2: 4264,
	author3: 'Suzanne Collins', 
	title3: 'Mockingjay: The Final Book of The Hunger Games', 
	libraryID3: 3245
	}
	var counter = 0;
	for (var i in input) {
		counter++;
		var p=document.createElement("p");
		p.appendChild(document.createTextNode('the property of object :"'+i+'" and his value: "'+input[i]+'"'));
		document.getElementById('lengthOfObject').appendChild(p);
	}
	var p=document.createElement("p");
	p.appendChild(document.createTextNode('As you see this object have: '+counter+' value(s)'));
	document.getElementById('lengthOfObject').appendChild(p);
}










