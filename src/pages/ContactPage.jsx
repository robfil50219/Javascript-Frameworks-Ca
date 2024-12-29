import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName || formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long.";
    }

    if (!formData.subject || formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long.";
    }

    if (
      !formData.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Email must be a valid email address.";
    }

    if (!formData.body || formData.body.length < 3) {
      newErrors.body = "Message body must be at least 3 characters long.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="body">Message</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.body && <p style={{ color: "red" }}>{errors.body}</p>}
        </div>
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#00A0A0", color: "white", border: "none", borderRadius: "5px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
