function Washer(name) {
    var motor = new Motor('C1035AEW/XTL', 300);
    var tubularElectric = new TubularElectric('DC47-00006X', 1900);
    Devices.call(this, name, [motor, tubularElectric]);
}

Washer.prototype = Object.create(Devices.prototype); 