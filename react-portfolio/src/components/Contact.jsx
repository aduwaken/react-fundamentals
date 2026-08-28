import { useState } from "react";
import "./Contact.css";

function Contact() {
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [message, setMessage] = useState("");
    var [submittedName, setSubmittedName] = useState("");
    var [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        setSubmittedName(name);
        setSubmitted(true);

        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <section className="contact-section" id="contact">
            <h2>Get In Touch</h2>
            <p>
                Email:{""}
                <a href="mailto:aduwa.kenny@gmail.com">
                    aduwa.kenny@gmail.com
                </a>
            </p>

            <p>
                GitHub:{""}
                <a 
                href="https://github.com/aduwaken"
                target="_blank"
                rel="noreferrer"
                >
                    github.com/aduwaken
                </a>
            </p>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={function (event) {
                    setName(event.target.value);
                    setSubmitted(false);
                }}
                reguired
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={function (event) {
                        setEmail(event.target.value);
                        setSubmitted(false);
                    }}
                    required
                />

                <textarea
                placeholder="Your Message"
                value={message}
                onChange={function (event) {
                    setMessage(event.target.value);
                    setSubmitted(false);
                }}
                required
                ></textarea>

                <button type="submit">
                    Send Message
                </button>
            </form>

            {submitted && (
                <p className="success-message">
                    Thanks {submittedName}! I'll get back to you soon.
                </p>
            )}
        </section>
    )
}

export default Contact;