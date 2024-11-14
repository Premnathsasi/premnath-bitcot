import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const ModalForm = ({ onClose, title, formSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    id: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        mobile: initialData.mobile || "",
        address: initialData.address || "",
        id: initialData.id || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      formSubmit(formData);
      onClose();
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", mobile: "", address: "" });
    setErrors({});
  };

  return (
    <div>
      <div className="modal-overlay">
        <div className="modal">
          <span className="close-btn" onClick={() => onClose(false)}>
            <RxCross1 />
          </span>

          <form onSubmit={handleSubmit} onReset={handleReset}>
            <h2>{title}</h2>

            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <span className="error">{errors.mobile}</span>}

            <input
              type="text"
              name="address"
              placeholder="Enter your Address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <div className="button-group">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button type="reset" className="reset-btn">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
