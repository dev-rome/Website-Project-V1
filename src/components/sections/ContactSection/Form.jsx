import { useState } from "react";
import Button from "../../Button";

function Form({ onSubmit }) {
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

  return (
    <form onSubmit={onSubmit}>
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
      <Button
        className="w-full font-roboto bg-zinc-50/[.7] rounded-sm shadow-[0_4px_4px_rgba(0,0,0,0.25)] hover:bg-button-gradient mt-6 py-2"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default Form;
