import { Pet } from "../model/Pet";
import PetCard from "./PetCard/PetCard";

interface PetListProps{
    pets: Pet[]
};

function PetList(props:PetListProps){
    return (
        <div className="PetList">
            {/* In functional programming we use the array method 'map' and for each contact I want you to render the child component and pass in the contact */}
            { props.pets.map((pet) => <PetCard pet={pet} />)}
        </div>
    );
};

export default PetList;