function Display(name, power) {
    Component.call(this, name, power);
}

Display.prototype = Object.create(Component.prototype);