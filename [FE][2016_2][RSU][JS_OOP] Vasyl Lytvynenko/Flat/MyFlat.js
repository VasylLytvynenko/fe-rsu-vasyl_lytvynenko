function MyFlat(name, rooms) {
		this.rooms = rooms;
		var hall = new Hall();
		var kitchen = new Kitchen();
		var bedroom = new Bedroom();		
		Flat.call(this, "myFlat", [hall, kitchen, bedroom]);
}

MyFlat.prototype = Object.create(Flat.prototype);