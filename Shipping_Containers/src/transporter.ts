import { ShippingContainer } from "./shipping_container";

export interface Transporter {
    maxWeight: number;

    addContainer(container: ShippingContainer) : void;

    getTotalWeight() : number;

    isOverweight() : boolean;
};