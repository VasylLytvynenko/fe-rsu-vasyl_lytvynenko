function Motor(name, power) {
    Component.call(this, name, power);
}

Motor.prototype = Object.create(Component.prototype);