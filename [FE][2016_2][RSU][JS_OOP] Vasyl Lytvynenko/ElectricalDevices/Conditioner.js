function Conditioner(name) {
    var compressor = new Compressor('QP425YAB', 800);
		var motor = new Motor('xxz', 100);
    Devices.call(this, name, [compressor, motor]);
}

Conditioner.prototype = Object.create(Devices.prototype); 