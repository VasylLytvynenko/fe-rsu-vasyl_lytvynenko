"use strict"
var q=["Lada","EPAM","EPAM",false,"EPAM",11,11,"EPAM","EPAM","EPAM","EPAM",false,"Lada",false,2,"EPAM",11,"Lada","EPAM",2,"Lada",2,"Lada","Lada",false,"Lada",false,"Lada","Lada",11,"Lada",2,11,"EPAM",11,1,2,2,2,false,"EPAM",false,"EPAM",11,11,"EPAM","EPAM","EPAM","EPAM",false,"Lada",false,2,"EPAM",11,"Lada","EPAM",2,"Lada",2,"Lada","Lada",false,"Lada",false,"Lada","Lada",11,"Lada",2,11,"EPAM",11,1,2,2,2,false,"EPAM",false,"EPAM",11,11,"EPAM","EPAM","EPAM","EPAM",false,"Lada",false,2,"EPAM",11,"Lada","EPAM",2,"Lada",2,"Lada","Lada",false,"Lada",false,"Lada","Lada",11,"Lada",2,11,"EPAM",11,1,2,2,2,false,"EPAM",false,"EPAM",11,11,"EPAM","EPAM","EPAM","EPAM",false,"Lada",false,2,"EPAM",11,"Lada","EPAM",2,"Lada",2,"Lada","Lada",false,"Lada",false,"Lada","Lada",11,"Lada",2,11,"EPAM",11,1,2,2,2,false,"Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii","Dmitrii"];
findMaxInArray(q);
	/*Функция сравнивает сначала нулевой элемент массива со всеми кроме себя(слева направо), потом первый элемент со всеми кроме себя и нулевого элемента, и так до конца массива, при этом в массив arrayCounter ложится количество повторов, расположение которых соответствует элементу давшему повтор(соответственно длина массива arrayCounter соответствует длине задаваемого массива)*/
	function findMaxInArray(n){
		var arrayCounter =[];
		for(var i=0; i<n.length; i++){
				var z=0;		
			for(var j=i+1; j<n.length; j++){
				(n[i]===n[j])?(++z):(z);
			}				
			arrayCounter.push(z);
		}
		function arrayMax(){return Math.max.apply(Math, arrayCounter);};				
		function arrayPosition(sourceArray){
			for(var i=0; i<arrayCounter.length; i++){
			if (arrayCounter[i] ===arrayMax()) document.write("The most frequent item of an array is: '"+sourceArray[i]+"', it's first detected on the "+i+" position, and repeated(not detected) "+arrayMax()+" times."+"<br />");
			};
		}
		arrayPosition(q);
	};