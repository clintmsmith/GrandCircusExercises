import * as React from 'react';
import { useState } from 'react';
import "./petform.css";

export interface PetFormProps {
    addPet: Function
}

export function PetForm (props: PetFormProps) {

    let [petName, setPetName] = useState<string>('')
    let [petBreed, setPetBreed] = useState<string>('')
    let [petImage, setImage] = useState<string>('')
    let [isAdopted, setAdoptionStatus] = useState<boolean>(false)
    let [petAbout, setAbout] = useState<string>('')

    function onSubmit (e:React.FormEvent<HTMLElement>){
        e.preventDefault();
        // This function is passed from the parent (ContactList) to this child
        // And the function is called in the parent
        props.addPet({name: petName, breed: petBreed, image: petImage, isAdopted: isAdopted, aboutPet: petAbout})
    }

  return (
    <form onSubmit={onSubmit}>
      <h3>Another animal to love</h3>
        <div>
          <label>Pet Name</label>
          <input type="text" onChange={(e) => setPetName(e.target.value)} />
        </div>
        <div>
          <label>Pet Breed</label>
          <input type="text" onChange={(e) => setPetBreed(e.target.value)} />
        </div>
        <div>
          <label>Pet Image</label>
          <input type="img" onChange={(e) => setImage(`http://localhost:3000/images/` + e.target.value)} />
        </div>
        <div>
          <label>Adoption Status</label>
          <input type="checkbox" onClick={(e) => setAdoptionStatus(true)} />
        </div>
        <div className="petAbout">
          <label>About the Pet</label>
          <input type="text" placeholder="What makes them special..."onChange={(e) => setAbout(e.target.value)} />
        </div>
        <button type="submit">Add New Pet</button>
    </form>
  );
}
