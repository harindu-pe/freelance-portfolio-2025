import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import React from "react";

const CallToAction = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="rounded-lg bg-[#e36414] py-12">
          <div className="flex flex-col items-center justify-center">
            <div className="inline-flex w-fit items-center justify-center rounded-lg bg-white p-3 font-sans text-xs font-semibold text-black uppercase lg:p-4">
              ✨ Contact
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="mt-8 font-sans text-4xl font-semibold">
                Let's Collab!
              </h1>
              <p className="mt-6 max-w-xs text-center md:max-w-sm">
                Fill the contact form or send me an email and let's see if we
                are a good fit.
              </p>
            </div>
            <div className="mt-8 bg-fuchsia-100 p-16">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
