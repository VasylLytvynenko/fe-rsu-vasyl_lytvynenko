function Chandelier(name) {
    var lightBulb = new LightBulb('Camelion', 20);
    Devices.call(this, name, [lightBulb]);
}

Chandelier.prototype = Object.create(Devices.prototype); 