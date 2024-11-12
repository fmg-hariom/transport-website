"use client";
import React, { useState } from "react";
import { contactSection } from "@/lib/content/contact";
import { Wrapper } from "@/components";
import { MailPlus, MapPinMinus, PhoneCall } from "lucide-react";

// Memoized ContactCard component for static content
const ContactCard = React.memo(
  ({ icon: Icon, title, description, info, iconColor }) => (
    <div className="max-w-sm w-full sm:w-auto rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform hover:-translate-y-2 hover:shadow-xl">
      <div className="flex justify-center items-center py-6">
        <Icon className={`w-10 h-10 ${iconColor}`} />
      </div>
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {info}
        </span>
      </div>
    </div>
  )
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add form submission logic here
  };

  const { name, email, message } = formData;
  const { subtitle, title, paragraphs, link } = contactSection;

  return (
    <div
      // id="contact"
      className="max-w-4xl mx-auto text-center py-16 md:py-24 mb-20 md:mb-32"
    >
      <h2 className="heading-secondary mb-8">Contact Us</h2>

      {/* Contact Cards */}
      <div className="flex flex-wrap justify-center gap-12 py-8">
        <ContactCard
          icon={PhoneCall}
          title="Call Us"
          description="Talk to our support team"
          info="+91 9988776655"
          iconColor="text-green-600"
        />
        <ContactCard
          icon={MailPlus}
          title="Email Us"
          description="Send us an email"
          info="support@example.com"
          iconColor="text-red-500"
        />
        <ContactCard
          icon={MapPinMinus}
          title="Visit Us"
          description="Find our office location"
          info="Address Line 1, City, Country"
          iconColor="text-red-600"
        />
      </div>

      {/* Contact Form */}
      <div
        id="contact"
        className="contactUs backgroundGradient flex flex-col justify-start items-center w-full gap-y-20 py-[100px]"
      >
        <div className="p-10 text-center">
          {/* Form Container */}
          <div
            className="w-full flex flex-col items-center space-y-5 border rounded-[20px] shadow-md bg-[#FDFBFB] md:flex md:flex-row md:space-x-5"
            data-aos="slide-up"
          >
            {/* Image Section */}
            <div className="" data-aos="slide-up">
              <img src="email.png" className="p-5" alt="email" />
            </div>

            {/* Form Section */}
            <div
              className="w-[100%] flex flex-col items-start py-5 space-y-3"
              data-aos="slide-up"
            >
              <div className="flex flex-col text-center p-5">
                <h1 className="mb-4 text-start text-2xl font-bold text-black">
                  Get in touch
                </h1>
                <p className="mb-4 text-wrap text-start text-xl text-black">
                  Have an inquiry or feedback for us? Fill out the form below to
                  contact our team.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="w-full p-5 flex flex-col space-y-3"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="p-2 w-full rounded-md text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />

                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="p-2 w-full rounded-md text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                <textarea
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="p-2 w-full rounded-md text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>

                <div className="flex items-center justify-center">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
