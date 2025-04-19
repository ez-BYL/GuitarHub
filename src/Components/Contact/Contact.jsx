import React from "react";
import "./Contact.css";
import message from '../../assets/message.svg'
import arrow from '../../assets/arrow.svg'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "18c131ad-32c3-4768-a903-7cc331a5fa76");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message<img src={message} alt=''/></h3>
        <p>
        We are here to help you with any questions or inquiries you may have. Feel free to reach out to us through the following contact
          methods:
          <br />
        </p>
        <ul>
          <li>
            📞 Call us at: (123) 456-7890 <br/>Our customer service team is available
            Monday to Friday from 9 AM to 6 PM EST.
          </li>
          <li>
            ✉️ Email us at: support@guitarhub.com <br/> We aim to respond to all
            emails within 24 hours.
          </li>
          <li>🏢 Visit us at: GuitarHub 123 Music Lane Birtamode, Jhapa</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label> Your Name </label>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <label> Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit Now<img src={arrow} alt=""/></button>
        </form>     
        <span>{result}</span> 
     </div>
    </div>
  );
};

export default Contact;
