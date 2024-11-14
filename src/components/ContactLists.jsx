import React from "react";
import ContactList from "./ContactList";
import { useContact } from "../context/ContactContext";

function ContactLists({ search }) {
  const { contactlists } = useContact();

  const filteredContacts = contactlists.filter((contact) => {
    const nameMatches =
      contact.name &&
      contact?.name?.toLowerCase().includes(search.toLowerCase());
    const mobileMatches =
      contact.mobile &&
      contact?.mobile?.toLowerCase().includes(search.toLowerCase());
    return nameMatches || mobileMatches;
  });
  return (
    <div>
      {filteredContacts.map((list) => (
        <ContactList key={list.id} list={list} />
      ))}
    </div>
  );
}

export default ContactLists;
