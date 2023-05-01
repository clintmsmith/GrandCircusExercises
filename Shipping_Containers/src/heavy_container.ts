import { ShippingContainer } from "./shipping_container";

export class HeavyContainer implements ShippingContainer {
    destination: string;
    cargoWeight: number;
    tareWeight: number;

    constructor(destination: string, cargoWeight: number = 0, tareWeight: number){
        this.destination = destination;
        this.cargoWeight = cargoWeight;
        this.tareWeight = tareWeight;
    };

    getGrossWeight() : number {
        return this.cargoWeight + this.tareWeight;
    };
};