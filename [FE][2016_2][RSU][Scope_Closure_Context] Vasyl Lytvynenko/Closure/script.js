"use strict"

 function Calc(){
	var  currentState=0;
	return{	
		add:function sum(a){
			currentState += a;
			function f(b){
				currentState += b;
				return f;
			}
			f.toString = function(){
				return currentState;
			};
			return f;
		},
		substract:function sub(a){
			currentState -= a;
			function f(b){
				currentState -= b;
				return f;
			}
			f.toString = function(){
				return currentState;
			};
			return f;
		},
		divide:function div(a){
			currentState /= a;
			function f(b){
				currentState /= b;
				return f;
			}
			f.toString = function(){
				return currentState;
			};
			return f;
		},
		multiply:function mul(a){
			currentState *= a;
			function f(b){
				currentState *= b;
				return f;
			}
			f.toString = function(){
				return currentState;
			};
			return f;
		},		
		getResult: function(){
			return currentState;
		},
		reset:function(){
			currentState=0;
		}			
	}
 }
 
 var Calculator=Calc();