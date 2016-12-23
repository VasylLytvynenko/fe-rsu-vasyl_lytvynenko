function TubularElectric(name, power) {
    Component.call(this, name, power);
}

TubularElectric.prototype = Object.create(Component.prototype);