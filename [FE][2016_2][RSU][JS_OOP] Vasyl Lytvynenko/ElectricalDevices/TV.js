function TV(name) {
    var display = new Display('LG_40', 200);
    Devices.call(this, name, [display]);
}

TV.prototype = Object.create(Devices.prototype); 