"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_ships_1 = require("./base-ships");
var _ = __importStar(require("lodash"));
console.log(_.pad("typescript Exemples", 40, "="));
// execução
var ship = new base_ships_1.Spacecraft("hyperspace");
ship.jumpIntoHyperSpace();
// extendendo a classe Spacecraft
// implementando uma interface
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = _super.call(this, "hyperdrive") || this;
        _this.cargoContainers = 4;
        return _this;
    }
    MilleniumFalcon.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log("Failed to jump into hyperspace");
        }
    };
    return MilleniumFalcon;
}(base_ships_1.Spacecraft));
var falcon = new MilleniumFalcon();
falcon.jumpIntoHyperSpace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? "Yes" : "No"));
