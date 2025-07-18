import React from "react";
import Logo from "../../../assets/Thomas-Logo.jpg";
const Footer = () => {
  return (
    <section className="min-h-[250px] w-[100%] bg-blue-950 text-white py-8 flex ">
      <div className="flex h-full w-full gap-12 px-8 flex-col md:flex-row">
        {/* logo  */}
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
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* contact */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold mb-2">Contact Info</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +977-123456789</p>
          <p>Address: Kathmandu, Nepal</p>
        </div>
        {/* social media */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold mb-2">Study Abroad</h4>
          <p>Study in US</p>
          <p>Study in UK</p>
          <p>Study in Australia</p>
          <p>Study in Canada</p>
          <p>Study in Japan</p>
        </div>
        {/* social media */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold mb-2">Follow Us</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
