import { Transporter } from "./transporter";
import { Ship } from "./ship";
import { ShippingContainer } from "./shipping_container";

export function findContainersByDestination(containers: ShippingContainer[], destination: string) : ShippingContainer[] {
    return containers.filter((x) => x.destination === destination);
};

export function findOverweightTransporters(transporters: Transporter[]) : Transporter[]{
    return transporters.filter((x) => x.isOverweight());
};

export function isSafeToAddContainer(ship: Ship[], container: Container[]) {
    ship.getTotalWeight() + container.getGrossWeight() > ship.maxWeight ?
};