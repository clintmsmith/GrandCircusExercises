import { ShippingContainer } from "./shipping_container";
import { Transporter } from "./transporter";

export class Truck implements Transporter {
    maxWeight: number;
    container: ShippingContainer | null = null;

    constructor(maxWeight: number, container: ShippingContainer) {
        this.maxWeight = maxWeight;
        this.container = container;
    };

    addContainer(container: ShippingContainer) : void {
        this.container = container;
    };
  
    getTotalWeight() : number { 
        if(this.container === null){
            return 0;
        } else {
            return this.container.getGrossWeight();
        };
    };

    isOverweight() : boolean {
        if(this.container === null){
            return false;
        } else {
            if(this.container.getGrossWeight() > this.maxWeight) {
                return true;
            } else {
                return false;
            }
        };
    };    

};