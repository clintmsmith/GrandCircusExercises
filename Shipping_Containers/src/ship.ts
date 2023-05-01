import { ShippingContainer } from "./shipping_container";
import { Transporter } from "./transporter";

export class Ship implements Transporter {
    maxWeight: number;
    containers: ShippingContainer[] = [];

    constructor(maxWeight: number) {
        this.maxWeight = maxWeight;
    };

    addContainer(container: ShippingContainer) : void {
    };
  
    getTotalWeight() : number { 
    };

    isOverweight() : boolean {
    };  
};