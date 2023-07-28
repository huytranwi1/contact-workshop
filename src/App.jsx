
import ContactList from "./Components/ContactList"


import { useState } from "react";
import "./App.css"

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}
