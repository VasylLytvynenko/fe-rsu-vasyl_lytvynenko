function Bedroom() {
    var chandelier = new Chandelier_3('Triple chandelier');
    var personalComputer = new PersonalComputer('PC');
    var conditioner = new Conditioner('Conditioner');
    var vacuumCleaner = new VacuumCleaner('VacuumCleaner');
		Room.call(this, "bedroom", [chandelier, personalComputer, conditioner, vacuumCleaner]);	
}

Bedroom.prototype = Object.create(Room.prototype);