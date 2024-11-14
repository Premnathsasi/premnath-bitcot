import React from "react";
import ModalForm from "./ModalForm";
import { useContact } from "../context/ContactContext";

function EditContact({ onClose, initialData }) {
  const { editContact } = useContact();
  const submitHandler = (data) => {
    editContact(data);
  };
  return (
    <ModalForm
      onClose={onClose}
      title="Edit Contact"
      initialData={initialData}
      formSubmit={submitHandler}
    />
  );
}

export default EditContact;
