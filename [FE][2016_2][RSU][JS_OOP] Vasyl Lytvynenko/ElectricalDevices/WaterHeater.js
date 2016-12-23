function WaterHeater(name) {
    var tubularElectric = new TubularElectric('SHT-EL', 2500);
    Devices.call(this, name, [tubularElectric]);
}

WaterHeater.prototype = Object.create(Devices.prototype); 