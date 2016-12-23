function Kettle(name) {
    var tubularElectric = new TubularElectric('Tef', 2000);
    Devices.call(this, name, [tubularElectric]);
}

Kettle.prototype = Object.create(Devices.prototype); 