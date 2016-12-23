function PersonalComputer(name) {
    var display = new Display('LG_20', 50);
    var computer = new Computer('Intel', 500);
		
    Devices.call(this, name, [display, computer]);
}

PersonalComputer.prototype = Object.create(Devices.prototype); 