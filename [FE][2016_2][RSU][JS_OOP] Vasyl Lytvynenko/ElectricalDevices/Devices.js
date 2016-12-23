function Devices(name, parts) {
    this.parts = parts;
    Component.call(this, name, this.getPower(), this.getPowered());
}

Devices.prototype = Object.create(Component.prototype);

Devices.prototype.getMaxPotentialPower = function(){
    var totalPower = 0;
    for (var i = 0; i < this.parts.length; i++)
		{totalPower += this.parts[i].getPower();}
    return totalPower;
};

Devices.prototype.showMaxPotentialPower = function() {
    console.info('Max potential power of ' + '"' + this.getName() + '"' + ' is ' + this.getMaxPotentialPower() + 'W.');
};

Devices.prototype.onPowered = function() {
	this.offPowered();
	if(this.parts.length==1){
		this.parts[0].powered = "on";
		this.powered = "on";
		this.getPower();
	}
	else{
		var result = confirm(this.name+" consists of several components. \n Do you want a fully powered device?");
		if(result){
			for (var i = 0; i < this.parts.length; i++){
			this.parts[i].powered = "on";}
			this.powered = "on";
			this.getPower();
		}
		else{
			for (var i = 0; i < this.parts.length; i++){
			var result = confirm("Do you want to turn "+this.parts[i].name+" of "+this.name+"?");
				if(result){this.parts[i].powered = "on";
				}
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
	}
	return this.powered;
};

Devices.prototype.offPowered = function(){
	for (var i = 0; i < this.parts.length; i++){
			this.parts[i].powered = "off";}
			this.power = this.getPower();
	return this.powered = "off";
};

Devices.prototype.getPower = function (){
	this.power = 0;
	for (var i = 0; i < this.parts.length; i++)
		if(this.parts[i].powered == "on"){
		this.power += this.parts[i].getPower();}
   
		return this.power;
};











