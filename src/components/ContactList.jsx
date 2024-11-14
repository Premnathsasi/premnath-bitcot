import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import ModalForm from "./ModalForm";
import EditContact from "./EditContact";
import { useContact } from "../context/ContactContext";
import ViewContactDetail from "./ViewContactDetail";

function ContactList({ list }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactViewOpen, setIsContactViewOpen] = useState(false);
  const { deleteContact } = useContact();

  return (
    <>
      <div className="contact-list">
        <div>{list.id}</div>
        <div className="contact-info">
          <IoMdContact />
          <div>
            <p>{list.name}</p>
            <p>{list.mobile}</p>
          </div>
        </div>
        <div className="edit-options">
          <FaEye
            onClick={() => {
              setIsContactViewOpen(true);
            }}
          />
          <RiDeleteBin7Fill
            onClick={() => {
              deleteContact(list.id);
            }}
          />
          <MdEdit
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>
      {isOpen && <EditContact onClose={setIsOpen} initialData={list} />}
      {isContactViewOpen && (
        <ViewContactDetail contact={list} onClose={setIsContactViewOpen} />
      )}
    </>
  );
}

export default ContactList;
