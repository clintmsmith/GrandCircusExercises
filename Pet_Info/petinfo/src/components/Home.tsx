import { useState } from "react";
import { Pet } from "../model/Pet";
import PetList from "./PetList";
import { PetForm } from "./PetForm/PetForm";
import PetCard from "./PetCard/PetCard";

function Home(){
    const [pets, addPets] = useState<Pet[]>(
        [
        {name: "Bones", breed: "Corgi", image: "../images/dog1.jpg", isAdopted: false, aboutPet: "5 years old and recently rescued from a local breeder.  He loves people, but still takes a bit to warm up."},
        {name: "Fido", breed: "Mixed", image: "../images/dog2.jpg", isAdopted: false, aboutPet: "7 years old with a lot of energy.  He loves playing fetch, chasing, and is great with kids."},
        {name: "Dodger", breed: "Labrador Retriever", image: "../images/dog3.jpg", isAdopted: false, aboutPet: "She's your quintissential outdoor companion, this 4 year old is already well trained and eager to please."},
        {name: "Fluffy", breed: "Tabby", image: "../images/cat1.jpg", isAdopted: false, aboutPet: "2 years old and full of energy, she's ready to chase mice, string, and toys.  Great with other animals."},
        {name: "Major", breed: "Bombay Cat", image: "../images/cat2.jpg", isAdopted: false, aboutPet: "At 9 years old he's a bit older and so not as rambunctious, he's still active and loves to play."},
        {name: "Queenie", breed: "Calico", image: "../images/cat3.jpg", isAdopted: false, aboutPet: "4 years old and recently found lost, but has a clean bill of health and looking for a new forever home."},
        {name: "Dakota", breed: "Beagle Mix", image: "../images/dog4.jpg", isAdopted: false, aboutPet: "As you can tell, this 4 years old has lots of energy.  Good for a family with kids or someone who can spend time playing or running."},
        {name: "Claw", breed: "American Shorthair", image: "../images/cat4.jpg", isAdopted: false, aboutPet: "A curious 5 year old, he loves to explore.  Good with other animals, but prefers the company of people."},
        ]
        );

    function addPet(pet:Pet){
        addPets([pet, ...pets])
    };

    return (
        <div className="Home">
            <div className="newPetForm">
                <PetForm addPet={addPet} />
            </div>
            <PetList pets={pets} />
        </div>
    );
};

export default Home;