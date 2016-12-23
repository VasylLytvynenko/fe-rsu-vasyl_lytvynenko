function Compressor(name, power) {
    Component.call(this, name, power);
}

Compressor.prototype = Object.create(Component.prototype);