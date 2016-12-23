function VacuumCleaner(name) {
    var motor = new Motor('Un', 1400);
    Devices.call(this, name, [motor]);
}

VacuumCleaner.prototype = Object.create(Devices.prototype); 