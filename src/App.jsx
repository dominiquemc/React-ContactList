import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <div>
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        </div>
      ) : (
        <ContactList
          setSelectedContactId={setSelectedContactId}
          selectedContactId={selectedContactId}
        />
      )}
    </>
  );
}
