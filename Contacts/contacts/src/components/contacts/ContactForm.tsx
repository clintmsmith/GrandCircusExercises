import * as React from 'react';
import { useState } from 'react';

// This takes in the function from the parent (ContactList) so we can call it here
// in the child within the function onSubmit.  It takes the information entered in
// the form and then passes that back up to the parent to call the function.
export interface ContactFormProps {
    addContact: Function
}

export function ContactForm (props: ContactFormProps) {

    let [firstName, setFirstName] = useState<string>('')
    let [lastName, setLastName] = useState<string>('')
    let [phoneNumber, setPhoneNumber] = useState<string>('')

    function onSubmit (e:React.FormEvent<HTMLElement>){
        e.preventDefault();
        // This function is passed from the parent (ContactList) to this child
        // And the function is called in the parent
        props.addContact({firstName: firstName, lastName: lastName, mobile: phoneNumber})
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>New Contact</h3>
            <label>First Name</label>
            {/* Instead of onClick we use onChange and when the 'e' (event) occurs */}
            {/* the information passed in the form is assigned as the input */}
            {/* this is an example of 'event bubbling' */}
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            <label>Last Name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
            <label>Phone Number</label>
            <input type="tel" onChange={(e) => setPhoneNumber(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
  );
}
