import React from "react";
import Logo from "../../../assets/Thomas-Logo.jpg";

const Footer = () => {
  const importantLinks = ["Home", "About Us", "Services", "Contact"];

  const contactInfo = {
    email: "info@example.com",
    phone: "+977-123456789",
    address: "Kathmandu, Nepal",
  };

  const countries = [
    "Study in US",
    "Study in UK",
    "Study in Australia",
    "Study in Canada",
    "Study in Japan",
  ];

  const socialMedia = [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ];

  return (
    <section className="min-h-[250px] w-full bg-blue-950 text-white py-8 flex">
      <div className="flex h-full w-full gap-12 px-8 flex-col md:flex-row">
        {/* logo and description */}
        <div className="flex flex-1 flex-col items-center md:items-start">
          <img src={Logo} alt="thomas logo" className="h-[60px] w-[320px]" />
          <span className="py-4 md:text-base text-center md:text-left">
            Choosing us means choosing confidence. If you’ve reached us, you're
            already in the hands of one of the most successful and trusted
            education consultants.
          </span>
        </div>

        {/* Important Links */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold mb-2">Important Links</h4>
          <ul>
            {importantLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold mb-2">Contact Info</h4>
          <p>Email: {contactInfo.email}</p>
          <p>Phone: {contactInfo.phone}</p>
          <p>Address: {contactInfo.address}</p>
        </div>

        {/* Study Abroad */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold mb-2">Study Abroad</h4>
          {countries.map((country, index) => (
            <p key={index}>{country}</p>
          ))}
        </div>

        {/* Social Media */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold mb-2">Follow Us</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {media.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
