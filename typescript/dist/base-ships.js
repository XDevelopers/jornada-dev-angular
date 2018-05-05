"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
// export{ IContainership, Spacecraft };
