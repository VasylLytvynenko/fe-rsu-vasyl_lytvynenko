function Kitchen() {
    var chandelier = new Chandelier('Single chandelier');
    var kettle = new Kettle('Kettle');
    var refrigerator = new Refrigerator('Refrigerator');
    var waterHeater = new WaterHeater('WaterHeater');
    var electricRange = new ElectricRange('ElectricRange');
    var washer = new Washer('Washer'); 
		Room.call(this, 'kitchen', [chandelier, kettle, refrigerator, waterHeater, electricRange, washer]);	
}

Kitchen.prototype = Object.create(Room.prototype);