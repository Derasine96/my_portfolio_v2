"use client";

import { CutCornerButton } from "@/components/CutCornerButton";
import React from "react";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (event: any) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [state, handleSubmit] = useForm("xanywpoq");
  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   console.log("Form submitted", formValues);
  // };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4"
        action="https://formspree.io/f/xanywpoq"
      >
        <div className="flex space-x-4">
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInput}
            placeholder="YOUR NAME"
            className="lg:w-1/2 md:w-[40%] sm:w-1/2 bg-transparent border border-primary-lightBeige/50 text-offWhite rounded-full lg:px-10 md:px-6 sm:px-6 py-2 placeholder-primary-offWhite/40 placeholder:text-xs placeholder:font-sans "
          />
          <ValidationError prefix="name" field="name" errors={state.errors} />
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInput}
            placeholder="YOUR EMAIL ADDRESS"
            className="lg:w-1/2 md:w-[60%] sm:w-1/2 bg-transparent border border-primary-lightBeige/50 text-offWhite rounded-full lg:px-10 md:px-6 sm:px-6 py-2 placeholder-primary-offWhite/40 placeholder:text-xs  placeholder:font-sans"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <input
          type="text"
          name="subject"
          value={formValues.subject}
          onChange={handleInput}
          placeholder="YOUR SUBJECT"
          className="w-full bg-transparent border border-primary-lightBeige/50 text-offWhite rounded-full lg:px-10 md:px-6 sm:px-6 py-2 placeholder-primary-offWhite/40 placeholder:text-xs placeholder:font-sans"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
        <textarea
          name="message"
          value={formValues.message}
          onChange={handleInput}
          placeholder="YOUR MESSAGE"
          className="w-full bg-transparent border border-primary-lightBeige/50 text-offWhite rounded-2xl lg:px-10 md:px-6 sm:px-6 py-4 placeholder-primary-offWhite/40 placeholder:text-xs placeholder:font-sans resize-none h-56"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="relative inline-block">
          <CutCornerButton type="submit" className="lg:px-4 py-2" disabled={state.submitting}>
            Send Message
          </CutCornerButton>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
