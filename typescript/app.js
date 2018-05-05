var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('hyperspace');
ship.jumpIntoHyperSpace();
