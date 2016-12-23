function Refrigerator(name) {
    var compressor = new Compressor('HMK95AA', 200);
    var tubularElectric = new TubularElectric('XZ', 50);
    Devices.call(this, name, [compressor, tubularElectric]);
}

Refrigerator.prototype = Object.create(Devices.prototype); 