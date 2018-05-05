export class Spacecraft {

    constructor(public propulsor: string) {}

    jumpIntoHyperSpace(): void {
        console.log(`Entering hyperspace with ${this.propulsor}`);
    }
}

// criação de um interface
export interface IContainership {

    cargoContainers: number;

}
// export{ IContainership, Spacecraft };