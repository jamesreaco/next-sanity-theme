"use client"
import { useState, FormEvent } from 'react';

interface Errors {
  name?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
}

export default function ContactForm() {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [buttonText, setButtonText] = useState<string>("Send");
  
  const [errors, setErrors] = useState<Errors>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showFailureMessage, setShowFailureMessage] = useState<boolean>(false);

  const handleValidation = (): boolean => {

    let tempErrors: Errors = {}
    let isValid = true

    if (name.length <= 0) {
      tempErrors["name"] = true
      isValid = false
    }
    if (email.length <= 0) {
      tempErrors["email"] = true
      isValid = false
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true
      isValid = false
    }
    if (message.length <= 0) {
      tempErrors["message"] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    return isValid
  }
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    let isValidForm = handleValidation()

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

      const response = await res.json()

      if (response.status === 400) {
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText("Send")
        setName("")
        setEmail("")
        setMessage("")
        setSubject("")
        return
      }

      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText("Send")
      setName("")
      setEmail("")
      setMessage("")
      setSubject("")
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl flex flex-col mx-auto mt-10 md:mt-12 mb-12 md:px-8 md:py-8 md:border rounded-lg md:bg-[#f9f9f7]"
    >
      <label
        htmlFor="name"
        className="text-gray-900 font-normal"
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
        className="mt-2 py-3 pl-4 border focus:outline-none rounded-lg focus:ring-1 ring-green-500 font-light text-gray-800 bg-white"
      />
      {errors?.name && (
        <p className="mt-1 text-red-500">Your name cannot be empty.</p>
      )}
      <label
        htmlFor="email"
        className="mt-4 text-gray-900 font-normal"
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
        className="mt-2 py-3 pl-4 border focus:outline-none rounded-lg focus:ring-1 ring-green-500 font-light text-gray-800 bg-white"
      />
      {errors?.email && (
        <p className="mt-1 text-red-500">Email cannot be empty.</p>
      )}
      <label
        htmlFor="subject"
        className="mt-4 text-gray-900 font-normal"
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
        className="mt-2 py-3 pl-4 border focus:outline-none rounded-lg focus:ring-1 ring-green-500 font-light text-gray-800 bg-white"
      />
      {errors?.subject && (
        <p className="mt-1 text-red-500">Subject cannot be empty.</p>
      )}
      <label
        htmlFor="message"
        className="mt-4 text-gray-900 font-normal"
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
        className="mt-2 py-3 pl-4 min-h-[200px] border focus:outline-none rounded-lg focus:ring-1 ring-green-500 font-light text-gray-800 bg-white"
      ></textarea>
      {errors?.message && (
        <p className="mt-1 text-red-500">Message body cannot be empty.</p>
      )}
      <div className="flex flex-row items-center justify-start">
        <button
          type="submit"
          className="px-10 mt-8 py-2 bg-black text-gray-50 font-light text-lg flex flex-row items-center rounded-lg"
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
