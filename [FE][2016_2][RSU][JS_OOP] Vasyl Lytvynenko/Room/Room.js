function Room(name, devices) {
	this.devices = devices;
  Component.call(this, name, this.getPower(), this.getPowered());
}

Room.prototype = Object.create(Devices.prototype);


Room.prototype.getMaxPotentialPower = function(){
    var totalPower = 0;
		for (var i = 0; i < this.devices.length; i++){
			totalPower +=this.devices[i].getMaxPotentialPower();
		}
    return totalPower;
};

Room.prototype.getPower = function (){
	this.power = 0;
	for (var i = 0; i < this.devices.length; i++){
		this.power += this.devices[i].getPower();
	}   
		return this.power;
};

Room.prototype.offPowered = function(){
	for (var i = 0; i < this.devices.length; i++){
			this.devices[i].offPowered();}
			this.power = this.getPower();
	return this.powered = "off";
};

Room.prototype.onPowered = function() {
	this.offPowered();
	var result = confirm("In "+this.name+" is some devices, some of which consist of several parts. \n Do you want a fully powered all the devices?");
	if(result){
		for (var i = 0; i < this.devices.length; i++){
			this.devices[i].powered = "on";
			for (var j = 0; j < this.devices[i].parts.length; j++){
				this.devices[i].parts[j].powered = "on";
			}
		}
		this.getPower();
		this.powered = "on";
	}		
	else{
		for (var i = 0; i < this.devices.length; i++){
			this.devices[i].onPowered();
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



