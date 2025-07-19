import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Thomas-Logo.jpg";
import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const importantLinks = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact Us", url: "/contact" },
    { label: "Study Abroad", url: "/studyabroad" },
  ];

  const contactInfo = {
    email: "info@gmai.com",
    phone: "+977-9812345678",
    address: "Kathmandu, Nepal",
  };

  const countries = [
    { label: "UK", url: "/study/uk" },
    { label: "USA", url: "/study/usa" },
    { label: "Japan", url: "/study/japan" },
    { label: "Canada", url: "/study/canada" },
    { label: "Australia", url: "/study/australia" },
  ];

  const socialMedia = [
    { name: <FaFacebook />, url: "https://facebook.com" },
    { name: <FaInstagram />, url: "https://instagram.com" },
    { name: <FaLinkedin />, url: "https://linkedin.com" },
  ];
  return (
    <section className="min-h-[250px] w-[100%] bg-blue-950 text-white pt-8">
      <div className="flex h-full w-full gap-12 px-8 flex-col md:flex-row py-4">
        {/* logo and discription  */}
        <div className="flex  flex-1 flex-col items-center md:items-start">
          <img src={Logo} alt="thomas logo" className="h-[60px] w-[320px] " />
          <span className=" py-4 md:text-base text-center  md:text-left">
            Choosing us means choosing confidence. If you’ve reached us, you're
            already in the hands of one of the most successful and trusted
            education consultants.
          </span>
        </div>
        {/* important links */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold mb-2">Important Links</h4>
          <ul>
            {importantLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url} className="hover:text-orange-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* contact */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold mb-2">Contact Info</h4>

          <span>Email: {contactInfo.email}</span>
          <span>Phone: {contactInfo.phone}</span>
          <span>Address: {contactInfo.address}</span>
        </div>

        {/* Country */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold mb-2">Study Abroad</h4>
          {countries.map((country, index) => (
            <Link
              to={country.url}
              key={index}
              className="flex flex-col hover:text-orange-200"
            >
              {" "}
              {country.label}
            </Link>
          ))}
        </div>
        {/* social media */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold mb-2 text-center">Follow Us</h4>
          <div className="flex gap-4 justify-center ">
            {socialMedia.map((media, index) => (
              <a
                href={media.url}
                key={index}
                target="_blank"
                rel="noopener noregerrer"
                className="text-2xl text-white hover:text-orange-200 transition-colors py-3"
              >
                {media.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-b-amber-50 flex  justify-center items-center pt-4">
        <p className="text-center flex items-center">
          <span className="text-base px-1">COPYRIGHT</span>
          <FaRegCopyright className="text-xl pt-1" />
          <span className="text-base px-1">THOMAS INTERNATIONAL EDUCATION</span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
