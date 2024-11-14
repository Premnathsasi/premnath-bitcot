import React from "react";
import { RxCross1 } from "react-icons/rx";

function ViewContactDetail({ contact, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal detail-modal">
        <h2>Contact Details</h2>
        <span className="close-btn" onClick={() => onClose(false)}>
          <RxCross1 />
        </span>

        <div className="viewdetails">
          <p>
            <span>Name:</span> {contact.name}
          </p>
          <p>
            <span>Email:</span> {contact.email}
          </p>
          <p>
            <span>Number:</span> {contact.mobile}
          </p>
          <p>
            <span>Address:</span> {contact?.address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewContactDetail;
