function Chandelier_2(name) {
    var lightBulb_1 = new LightBulb('Camelion', 20);
    var lightBulb_2 = new LightBulb('Camelion', 20);
    Devices.call(this, name, [lightBulb_1, lightBulb_2]);
}

Chandelier_2.prototype = Object.create(Devices.prototype); 