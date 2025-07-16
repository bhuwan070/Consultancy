import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      {/* Top Info Row */}
      <div className="hidden lg:flex flex-row items-start justify-between px-4 py-3 max-w-screen-xl mx-auto gap-6">
        {/* Logo */}
        <Logo />

        {/* Contact Info */}
        <div className="hidden lg:block flex-shrink-0 flex-col text-sm text-gray-700 gap-y-2 md:gap-y-3 lg:gap-y-4">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-green-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M2.25 6.75S4.5 3.75 7.5 3.75 12.75 7.5 12.75 7.5s2.25-3.75 5.25-3.75 5.25 3 5.25 3M12.75 11.25a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0v.008"
              />
            </svg>
            <span>+977-9800000000</span>
          </div>

          <div className="flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
              alt="WhatsApp"
              className="w-5 h-5 mr-2 mt-2"
            />
            <span>+977-9800000000</span>
          </div>
        </div>

        {/* Address and Emails */}
        <div className="hidden lg:block flex-shrink-0 flex-col text-sm text-gray-700">
          <div className="flex items-start">
            <svg
              className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
            <span>Mitrapark, Kathmandu, Nepal</span>
          </div>

          <div className="flex items-center mt-1">
            <svg
              className="w-5 h-5 text-red-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.5 4.5h15v15h-15v-15zM4.5 4.5l7.5 7.5 7.5-7.5"
              />
            </svg>
            <span>info@thomascollege.edu.np</span>
          </div>

          <div className="flex items-center mt-1">
            <svg
              className="w-5 h-5 text-red-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.5 4.5h15v15h-15v-15zM4.5 4.5l7.5 7.5 7.5-7.5"
              />
            </svg>
            <span>contact@thomascollege.edu.np</span>
          </div>
        </div>

        {/* Side Logo (Desktop only) */}
        <div className="hidden lg:block flex-shrink-0">
          <img
            src="/images/side_logo/side_logoo.jpg"
            alt="Extra icon"
            className="h-20 w-96 object-contain"
          />
        </div>
      </div>

      {/* 🔽 Mobile View: Logo + Dropdown Button (Only visible on mobile) */}
      <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto lg:hidden">
        {/* Logo */}
        <Logo />

        {/* Dropdown Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white bg-blue-900 px-4 py-2 rounded-md"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      {/* Mobile Nav Links */}
      {isMenuOpen && (
        <div className="bg-blue-900 lg:hidden w-full mt-4">
          <ul className="flex flex-col items-center text-center font-medium gap-2 text-white">
            <NavbarLink to="/" label="Home" />

            <NavbarLink
              to="/about"
              label="About Us"
              dropdownItems={[
                { label: "Our Team", to: "/about/our-team" },
                { label: "Testimonials", to: "/about/testimonials" },
                { label: "Company Profile", to: "/about/company-profile" },
                { label: "Legal Document", to: "/about/legal-document" },
              ]}
            />

            <NavbarLink
              to="/studyabroad"
              label="Study Abroad"
              dropdownItems={[
                { label: "Study in USA", to: "/about/usa" },
                { label: "Study in Japan", to: "/about/japan" },
                { label: "Study in UK", to: "/about/uk" },
                { label: "Study in Canada", to: "/about/canada" },
                { label: "Study in Australia", to: "/about/australia" },
              ]}
            />

            <NavbarLink
              to="/testpreparation"
              label="Test Preparation"
              dropdownItems={[
                { label: "IELTS", to: "/about/ielts" },
                { label: "PTE", to: "/about/pte" },
                { label: "GRE", to: "/about/gre" },
                { label: "GMAT", to: "/about/gmat" },
                { label: "SAT", to: "/about/sat" },
              ]}
            />

            <NavbarLink
              to="/OurServices"
              label="Our Services"
              dropdownItems={[
                { label: "Career Counselling", to: "/about/counselling" },
                {
                  label: "College & University Selection",
                  to: "/about/uni-selection",
                },
                { label: "Documentation Guidance", to: "/about/documentation" },
                { label: "Admission Guidance", to: "/about/ad-guide" },
                { label: "Visa Assistance", to: "/about/visa-assist" },
                { label: "Financial Assistance", to: "/about/fin-assist" },
              ]}
            />

            <NavbarLink to="/languageclass" label="Language Class" />
            <NavbarLink to="/gallery" label="Gallery" />
            <NavbarLink to="/blog" label="Blog" />
            <NavbarLink to="/contact" label="Contact Us" />
          </ul>
        </div>
      )}

      {/* Desktop Navbar */}
      <nav className="bg-blue-900 border-gray-200 px-4 lg:px-6 py-5 hidden lg:block">
        <div className="flex justify-center items-center mx-auto max-w-screen-xl">
          <ul className="flex flex-row font-medium space-x-8 text-white">
            <NavbarLink to="/" label="Home" />

            <NavbarLink
              to="/about"
              label="About Us "
              dropdownItems={[
                { label: "Our Team", to: "/about/our-team" },
                { label: "Testimonials", to: "/about/testimonials" },
                { label: "Company Profile", to: "/about/company-profile" },
                { label: "Legal Document", to: "/about/legal-document" },
              ]}
            />

            <NavbarLink
              to="/studyabroad"
              label="Study Abroad"
              dropdownItems={[
                { label: "Study in USA", to: "/about/usa" },
                { label: "Study in Japan", to: "/about/japan" },
                { label: "Study in UK", to: "/about/uk" },
                { label: "Study in Canada", to: "/about/canada" },
                { label: "Study in Australia", to: "/about/australia" },
              ]}
            />

            <NavbarLink
              to="/testpreparation"
              label="Test Preparation"
              dropdownItems={[
                { label: "IELTS", to: "/about/ielts" },
                { label: "PTE", to: "/about/pte" },
                { label: "GRE", to: "/about/gre" },
                { label: "GMAT", to: "/about/gmat" },
                { label: "SAT", to: "/about/sat" },
              ]}
            />

            <NavbarLink
              to="/OurServices"
              label="Our Services"
              dropdownItems={[
                { label: "Career Counselling", to: "/about/counselling" },
                {
                  label: "College & University Selection",
                  to: "/about/uni-selection",
                },
                { label: "Documentation Guidance", to: "/about/documentation" },
                { label: "Admission Guidance", to: "/about/ad-guide" },
                { label: "Visa Assistance", to: "/about/visa-assist" },
                { label: "Financial Assistance", to: "/about/fin-assist" },
              ]}
            />

            <NavbarLink to="/languageclass" label="Language Class" />
            <NavbarLink to="/gallery" label="Gallery" />
            <NavbarLink to="/blog" label="Blog" />
            <NavbarLink to="/contact" label="Contact Us" />
          </ul>
        </div>
      </nav>
    </header>
  );
}
