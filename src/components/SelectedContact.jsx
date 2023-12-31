import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  console.log(contact);
  useEffect(() => {
    async function myContacts() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.log(error);
      }
    }
    myContacts();
  }, [selectedContactId]);

  function handleOnClick() {
    setSelectedContactId(null);
  }
  return (
    <>
      {contact && (
        <div className="selected-contact">
          <p className="name">{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.address.city}</p>
          <p>{contact.address.zipcode}</p>
          <p>{contact.website}</p>
          <button onClick={handleOnClick}>Back</button>
        </div>
      )}
    </>
  );
}
