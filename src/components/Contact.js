import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [requiredFields, setRequiredFields] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setRequiredFields({
      ...requiredFields,
      [name]: value === ''
    });
  };

  // This is a dummy one for simulation purpose
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setRequiredFields({
      name: false,
      email: false,
      message: false
    });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="mb-4">Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {requiredFields.name && <p className="text-danger">This field is required.</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              title="Please enter a valid email address"
            />
            {requiredFields.email && <p className="text-danger">This field is required.</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              className="form-control"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            ></textarea>
            {requiredFields.message && <p className="text-danger">This field is required.</p>}
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
