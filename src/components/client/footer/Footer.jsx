import React from "react";

const Footer = () => {
  return (
    <section className="min-h-[250px] w-screen bg-blue-950 text-white py-8 flex items-center">
      <div className="flex h-full w-full items-center justify-around flex-col md:flex-row">
        {/* logo  */}
        <div>Logo</div>
        {/* important links */}
        <div> important links</div>
        {/* contact */}
        <div> Contact info</div>
        {/* social media */}
        <div>social media</div>
      </div>
    </section>
  );
};

export default Footer;
