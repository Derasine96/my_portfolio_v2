import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { SectionHeader } from "@/components/SectionHeader";

function Contact() {
  return (
    <div className="h-full max-w-full mx-auto items-center py-16 overflow-x-clip">
      <SectionHeader
        title="CONTACT ME"
        subtitle="Get in Touch"
        description="If you have any questions, opportunities, or just want to say hi, feel free to reach out!"
      />
      <div className="md:flex md:space-x-12 sm:space-y-6 px-12 justify-around pt-2">
        <ContactInfo />
        <ContactForm />
      </div>
      <div></div>
    </div>
  );
}

export default Contact;
