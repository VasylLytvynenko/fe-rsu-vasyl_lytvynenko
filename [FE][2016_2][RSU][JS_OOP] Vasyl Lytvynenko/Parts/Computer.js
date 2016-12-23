function Computer(name, power) {
    Component.call(this, name, power);
}

Computer.prototype = Object.create(Component.prototype);