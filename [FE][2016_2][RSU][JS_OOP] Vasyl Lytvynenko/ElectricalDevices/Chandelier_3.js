function Chandelier_3(name) {
    var lightBulb_1 = new LightBulb('Camelion', 20);
    var lightBulb_2 = new LightBulb('Camelion', 20);
    var lightBulb_3 = new LightBulb('Camelion', 20);
    Devices.call(this, name, [lightBulb_1, lightBulb_2, lightBulb_3]);
}

Chandelier_3.prototype = Object.create(Devices.prototype); 