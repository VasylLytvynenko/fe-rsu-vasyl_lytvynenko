function ElectricHotPlate(name, power) {
    Component.call(this, name, power);
}

ElectricHotPlate.prototype = Object.create(Component.prototype);