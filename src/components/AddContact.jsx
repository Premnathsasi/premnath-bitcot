import React from "react";
import ModalForm from "./ModalForm";
import { useContact } from "../context/ContactContext";

function AddContact({ onClose }) {
  const { addContact, contactlists } = useContact();

  const addContacts = (data) => {
    let id = contactlists.length + 1;
    const newData = { ...data, id };
    addContact(newData);
  };
  return (
    <ModalForm onClose={onClose} title="Add Contact" formSubmit={addContacts} />
  );
}

export default AddContact;
