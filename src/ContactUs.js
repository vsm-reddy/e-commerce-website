// src/components/ContactUs.js
import React from 'react';
import './ContactUs.css'; // Assuming you have a ContactUs.css file for styling

const ContactUs = () => {
    return (
        <div className="contact-us">
            
            <div className="contact-details">
                <p>For inquiries, please contact:</p>
                <p className="contact-info">Phone: +1 123-456-7890</p>
                <p className="contact-info">Email: contact@infinitegleam.com</p>
            </div>
        </div>
    );
};

export default ContactUs;
