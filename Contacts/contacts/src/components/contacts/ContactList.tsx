import { useState } from "react";
import { Contact } from "../../interfaces/Contact";
import ContactCard from "./ContactCard";
import { ContactForm } from "./ContactForm";

interface ContactListProps{
    contacts: Contact[]
};

// This needs info from a parent component to get the 'props'
// The job of this component is to display a list of contact cards
// Imperative (every step listed out in process) vs. Declarative (state the end goal and then process is filled in)
function ContactList(){
    // ContactList "owns" the state
    const [contacts, setContacts] = useState<Contact[]>(
        [{firstName: "Bob", lastName: "Sanders", mobile: "555-555-0001"},
        {firstName: "Robert", lastName: "Sanders", mobile: "555-555-0002"},
        {firstName: "Bobert", lastName: "Sanders", mobile: "555-555-0003"},]
        );

    // We use the spread operator to create a new 
    function addContact(contact:Contact){
        setContacts([contact, ...contacts]);
    };

    return (
        <div className="ContactList-container">
            <div className="newContactForm">
                <ContactForm addContact={addContact} />
            </div>
            <div className="contactCards">
            {/* In functional programming we use the array method 'map' and for each contact I want you to render the child component and pass in the contact */}
                { contacts.map((contact) => <ContactCard contact={contact} />)}
            </div>
        </div>
    );
};

export default ContactList;

// Data from here goes to ContactCard