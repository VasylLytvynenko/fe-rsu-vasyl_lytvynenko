function Component(name, power) {
    this.name = name;
    this.power = power;
    this.powered = "off";
}

Component.prototype.getName = function(){
  return this.name;
};

Component.prototype.getPower = function(){
  return this.power;
};

Component.prototype.showPower = function(){
  console.info('Power of ' + '"' + this.getName() + '"' + ' is ' + this.getPower() + 'W.');
};

Component.prototype.getPowered = function(){
  return this.powered;
};

Component.prototype.onPowered = function(){
	return this.powered = "on";
};

Component.prototype.offPowered = function(){
	return this.powered = "off";
};





















