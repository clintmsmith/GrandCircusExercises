import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { Pet } from "../../model/Pet";
import "./petcard.css";


interface PetCardProps {
    pet: Pet
};

function PetCard(props:PetCardProps){
    return (
    <Card style={{width: '18rem'}}>
        <img alt="pet" src={props.pet.image}/>
        <CardBody>
            <CardTitle tag="h5">{props.pet.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">{props.pet.breed}</CardSubtitle>
            <CardText tag="p">{props.pet.aboutPet}</CardText>
            <Button>Details</Button>
        </CardBody>
    </Card>
    );
};

export default PetCard;