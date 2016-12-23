function LightBulb(name, power) {
   Component.call(this, name, power);
}

LightBulb.prototype = Object.create(Component.prototype);