import { useState } from "react";
import SectionContainer from "./SectionContainer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    emailAddress: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <SectionContainer className="pt-20 lg:pt-48" id="contact">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <h2 className="font-zwodrei font-bold text-2xl lg:text-4xl text-[rgba(0,0,0,0.8)] lg:mb-12">
          Let’s chat!
        </h2>
        <div className="grid lg:grid-cols-11 mt-6">
          <div className="lg:col-span-3">
            <p className="">
              You are one step away from hiring the right skill set of engineer
              for your project!
            </p>
            <p className="lg:row-start-2 mt-4 lg:mt-8">
              Please fill in our form and our team will be in contact you within
              3-5 business days.
            </p>
          </div>

          <div className="lg:col-start-6 lg:col-span-5 mt-8 md:mt-0">
            <form onSubmit={handleSubmit}>
              <input
                className="w-full placeholder:text-sm focus:outline-none bg-zinc-50/[.47] border border-white/10 rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-2 pl-3"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="w-full placeholder:text-sm focus:outline-none bg-zinc-50/[.47] border border-white/10 rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-4 py-2 pl-3"
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
              <input
                className="w-full placeholder:text-sm focus:outline-none bg-zinc-50/[.47] border border-white/10 rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-4 py-2 pl-3"
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="w-full placeholder:text-sm focus:outline-none bg-zinc-50/[.47] border border-white/10 rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-4 py-2 pl-3"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea
                className="w-full h-32 placeholder:text-sm resize-none focus:outline-none bg-zinc-50/[.47] border border-white/10 rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-4 py-2 pl-3"
                name="message"
                placeholder="Tell us more about company needs"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button className="w-full bg-zinc-50/[.7] rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] mt-6 py-2" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Contact;
