"use client"

import { useState } from "react";

export default function Home() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [formValidated, setFormValidated] = useState(false);

  const handleChange = e => {
    const {name, type, checked, value} = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue
    })

  }

  const handleSubmit = e => {
    e.preventDefault();

    const errors = {};
    if (formData.firstName.trim() === '') {
      errors.firstName = 'This field is required'
    }
    if (formData.lastName.trim() === '') {
      errors.lastName = 'This field is required'
    }
    if (formData.email.trim() === '') {
      errors.email = 'This field is required'
    } else if (!isValidEmail(formData.email)){
      errors.email = 'Please enter a valid email address'
    }
    if (formData.queryType === '') {
      errors.queryType = 'Please select a query type'
    }
    if (formData.message.trim() === '') {
      errors.message = 'This field is required'
    }
    if (!formData.consent) {
      errors.consent = 'To submit this form, please consent to being contacted'
    }
    
    // set validation errors
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      setFormValidated(false);
      return;
    }

    // submit data if validatin passes
    setFormValidated(true);
    console.log(formData);
    errors.firstName = '';
    errors.lastName = '';
    errors.email = '';
    errors.queryType = '';
    errors.message = '';
    errors.consent = '';

    setErrors(errors);
  }

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

  }



  return (
    <main className="relative">
      {formValidated && <div className="popup">
        <div className="flex mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 20 21"><path fill="#fff" d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z"/></svg>
          <h2 className="ms-2">Message Sent!</h2>
        </div>
        <p>Thanks for completing the form. We&#39;ll be in touch soon!</p>

        </div>}

      <form className=" w-10/12 md:w-8/12 md:min-w-min p-10 bg-white rounded-xl flex flex-col gap-4 my-20 mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-medium text-gray-800">Contact Us</h1>

        <div className="flex flex-col md:flex-row gap-3 max-w-full">
          <div className="flex flex-col w-full">
            <label className="mb-2" htmlFor="first-name">First Name <span className="text-dark">*</span></label>
            <input type="text" name="firstName" id="first-name" value={formData.firstName} className="input-field" onChange={handleChange} />
            {errors.firstName && <p className="text-error text-sm mt-2">{errors.firstName}</p>}
            
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-2" htmlFor="last-name">Last Name <span className="text-dark">*</span></label>
            <input type="text" id="last-name" name="lastName" value={formData.lastName} className="input-field" onChange={handleChange} />
            {errors.lastName && <p className="text-error text-sm mt-2">{errors.lastName}</p>}
          </div>

        </div>

        <div className="flex flex-col">
          <label className="mb-2" htmlFor="email">Email Address <span className="text-dark">*</span></label>
          <input type="text" name="email" id="email" value={formData.email} className="input-field" onChange={handleChange} />
          {errors.email && <p className="text-error text-sm mt-2">{errors.email}</p>}
        </div>

        <div>
          <label className="mb-2 block" htmlFor="query-type">Query Type <span className="text-dark">*</span></label>
          <div id="query-type" className="flex flex-col md:flex-row gap-3">
            <label htmlFor="general-enquiry"  className="input-field w-full p-3">
              <input className="me-1" type="radio" name="queryType" id="general-enquiry" value="general-enquiry" onChange={handleChange}/>
              General Inquiry</label>
            
              <label htmlFor="support-request" className="input-field w-full p-3">
              <input className="me-1" type="radio" name="queryType" id="support-request" value="support-request" onChange={handleChange}/>
               Support Request</label>
            
          </div>
            {errors.queryType && <p className="text-error text-sm mt-2">{errors.queryType}</p>}
        </div>

        <div className="flex flex-col">
          <label className="mb-2" htmlFor="message">Message <span className="text-dark">*</span></label>
          <textarea name="message" id="message" value={formData.message} className="input-field leading-snug" onChange={handleChange}></textarea>
            {errors.message && <p className="text-error text-sm mt-2">{errors.message}</p>}
        </div>

        <div className="my-3">
          <input type="checkbox" name="consent" id="consent" onChange={handleChange}/>
          <label htmlFor="consent">I consent to being contacted by the team <span className="text-dark inline">*</span></label>
          {errors.consent && <p className="text-error text-sm mt-2">{errors.consent}</p>}
        </div>

        <button type="submit" className="btn">Submit</button>
        
      </form>
    </main>
  )
}
