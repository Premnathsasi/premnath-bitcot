import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import AddContact from "./AddContact";
import ContactLists from "./ContactLists";

function ContactView() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="main-container">
        <div className="heading">
          <h2>All Contacts</h2>
          <IoIosAddCircleOutline onClick={openModal} />
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search contact.."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <ContactLists search={search} />
      </div>
      {isOpen && <AddContact onClose={setIsOpen} />}
    </>
  );
}

export default ContactView;
