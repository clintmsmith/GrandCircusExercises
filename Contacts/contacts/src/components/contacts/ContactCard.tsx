import { Contact } from "../../interfaces/Contact";

// We created a new interface here because generally props shouldn't be shared
// across components, since they could change
interface ContactCardProps {
    contact: Contact
};

// That's why instead of doing just 'contact.firstName' we did 'props.contact.firstName'
function ContactCard(props:ContactCardProps){
    return (
        <div className="ContactCard">
            <h3>Contact Card</h3>
            <p>First Name: {props.contact.firstName}</p>
            <p>Last Name: {props.contact.lastName}</p>
            <p>Mobile #: {props.contact.mobile}</p>
        </div>
    );
};

export default ContactCard;