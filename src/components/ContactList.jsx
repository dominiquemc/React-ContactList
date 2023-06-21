import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th className="contact-list-head" colSpan="3">
              Contact List
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="second-row">Name</td>
            <td className="second-row">Email</td>
            <td className="second-row">Phone</td>
          </tr>
          {contacts.map((contact) => {
            return (
              <ContactRow
                setSelectedContactId={setSelectedContactId}
                key={contact.id}
                contact={contact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
