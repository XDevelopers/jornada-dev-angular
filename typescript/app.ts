import { Spacecraft, IContainership } from "./base-ships";

import * as _ from "lodash";
console.log(_.pad("typescript Exemples", 40, "="));

// execução
let ship: Spacecraft = new Spacecraft("hyperspace");
ship.jumpIntoHyperSpace();

// extendendo a classe Spacecraft
// implementando uma interface
class MilleniumFalcon extends Spacecraft  implements IContainership {

    cargoContainers:number;

    constructor() {
        super("hyperdrive");
        this.cargoContainers = 4;
    }

    jumpIntoHyperSpace(): void {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperSpace();

        } else {
            console.log(`Failed to jump into hyperspace`);

        }
    }
}

let falcon:MilleniumFalcon = new MilleniumFalcon();
falcon.jumpIntoHyperSpace();




let goodForTheJob = ( ship: IContainership ) => ship.cargoContainers > 2;
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? "Yes" : "No" }`);
 