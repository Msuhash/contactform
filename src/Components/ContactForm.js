import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "778825c9-84a5-4296-b750-eaa21e30c662",
        ...formData,
      }),
    });
    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <div className="contact-container">
      <form className="contact-left" onSubmit={handleSubmit}>
        <div className="contact-left-title">
          <h2>Get In Touch</h2>
          <hr />
        </div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-inputs"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="contact-inputs"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="contact-inputs"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-right">
        <img
          src="/images/—Pngtree—contact our male customer service_5412873.png"
          alt="contact"
          height="500"
          width="500"
        />
      </div>
    </div>
  );
};

export default ContactForm;
