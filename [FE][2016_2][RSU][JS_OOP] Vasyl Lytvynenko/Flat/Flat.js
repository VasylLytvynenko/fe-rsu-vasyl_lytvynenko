function Flat(name, rooms) {
		this.rooms = rooms;		
		Component.call(this, name, this.getPower(), this.getPowered());
}

Flat.prototype = Object.create(Room.prototype);

Flat.prototype.getMaxPotentialPower = function(){
    var totalPower = 0;
		for (var i = 0; i < this.rooms.length; i++){
			totalPower +=this.rooms[i].getMaxPotentialPower();
		}
    return totalPower;
};

Flat.prototype.getPower = function (){
	this.power = 0;
	for (var i = 0; i < this.rooms.length; i++){
		this.power += this.rooms[i].getPower();
	}   
		return this.power;
};

Flat.prototype.offPowered = function(){
	for (var i = 0; i < this.rooms.length; i++){
			this.rooms[i].offPowered();}
			this.power = this.getPower();
	return this.powered = "off";
};

Flat.prototype.onPowered = function() {
	this.offPowered();
	var result = confirm("In "+this.name+" is some rooms. \n Do you want a fully powered all the rooms?");
	if(result){
		for (var i = 0; i < this.rooms.length; i++){
			this.rooms[i].powered = "on";
			for (var j = 0; j < this.rooms[i].devices.length; j++){
				this.rooms[i].devices[j].powered = "on";
				for (var z = 0; z < this.rooms[i].devices[j].parts.length; z++){
					this.rooms[i].devices[j].parts[z].powered = "on";
				}
			}
		}	
		this.getPower();
		this.powered = "on";
	}		
	else{
		for (var i = 0; i < this.rooms.length; i++){
			this.rooms[i].onPowered();
		}
		this.getPower();
		if(this.power==this.getMaxPotentialPower()){
			this.powered = "on";
		}
		else if(this.power==0){
			this.powered = "off";
		}
		else{
		this.powered = "partly";
		}
	}
	return this.powered;
};

Flat.prototype.search = function (what){
	for (var i = 0; i < this.rooms.length; i++){
		for (var j = 0; j < this.rooms[i].devices.length; j++){
				if (this.rooms[i].devices[j].getName().toLowerCase().indexOf(what.toLowerCase()) >= 0){
		console.info('"' + what + '" has been found in "'	+ this.rooms[i].devices[j].getName() +'" in "'+ this.rooms[i].getName() +'" in "'+this.getName() +
		'"');
	}
			
			
			

		}
	}	
}















