import { useState } from 'react'

export default function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [buttonText, setButtonText] = useState("Send");
  
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      
      if (error) {
        
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        setName("");
        setEmail("");
        setMessage("");
        setSubject("");

        return;
      }
      
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 mb-12 rounded-lg md:border flex flex-col md:px-8 md:py-8 bg-[#F6F6F2]"
    >

      <label
        htmlFor="name"
        className="text-gray-900 font-light"
      >
        Your Name<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
        placeholder='Jane Doe'
        className="mt-2 py-3 pl-4 border rounded-lg focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-800 bg-white"
      />
      {errors?.name && (
        <p className="mt-1 text-red-500">Your name cannot be empty.</p>
      )}

      <label
        htmlFor="email"
        className="mt-4 text-gray-900 font-light"
      >
        E-mail<span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder='janedoe@email.com'
        className="mt-2 py-3 pl-4 border rounded-lg focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-800 bg-white"
      />
      {errors?.email && (
        <p className="mt-1 text-red-500">Email cannot be empty.</p>
      )}

      <label
        htmlFor="subject"
        className="mt-4 text-gray-900 font-light"
      >
        Subject<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        placeholder='I need a web developer!'
        className="mt-2 py-3 pl-4 border rounded-lg focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-800 bg-white"
      />
      {errors?.subject && (
        <p className="mt-1 text-red-500">Subject cannot be empty.</p>
      )}

      <label
        htmlFor="message"
        className="mt-4 text-gray-900 font-light"
      >
        Message<span className="text-red-500">*</span>
      </label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        placeholder='How can I help?'
        className="mt-2 py-3 pl-4 border rounded-lg focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-800 bg-white"
      ></textarea>
      {errors?.message && (
        <p className="mt-1 text-red-500">Message body cannot be empty.</p>
      )}

      <div className="flex flex-row items-center justify-start">
        <button
          type="submit"
          className="px-10 mt-8 py-2 bg-black text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
        >
          {buttonText}
        </button>
      </div>

      <div className="text-left">
        {showSuccessMessage && (
          <p className="text-green-600 font-medium text-sm my-2">
            Thank you! Your Message has been sent.
          </p>
        )}
        {showFailureMessage && (
          <p className="text-red-500">
            Oops! Something went wrong, please try again.
          </p>
        )}
      </div>
      
    </form>
  )
}
