function Application() {
}

Application.prototype.start = function () {
	var myFlat = new MyFlat();
	console.dir(myFlat);
	myFlat.onPowered();
	myFlat.showPower();
	myFlat.offPowered();
	myFlat.showPower();	
	myFlat.rooms[0].devices[0].parts[0].onPowered();
	myFlat.showPower();
	myFlat.search("conditioner");
	myFlat.search("le");
	
	/* 
	structure:
	
		myFlat.rooms[0].devices[0].parts[0].metods();
	
	metods:
	
		for myFlat.rooms[0].devices[0].parts[0]:
		getName();
		getPower();
		showPower();
		getPowered();
		onPowered();
		offPowered();
		
		for myFlat.rooms[0].devices[0]:
		getMaxPotentialPower();
		showMaxPotentialPower();
		
		for myFlat:
		search("c");
 */
}; 
