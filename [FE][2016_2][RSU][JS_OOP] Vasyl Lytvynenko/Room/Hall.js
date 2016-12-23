function Hall() {
    var chandelier = new Chandelier_2('Double chandelier');
    var tv = new TV('TV');
    var conditioner = new Conditioner('Conditioner');
	Room.call(this, 'hall', [chandelier, conditioner, tv]);	
}

Hall.prototype = Object.create(Room.prototype);