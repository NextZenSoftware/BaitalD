import React, { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhone,
  FaArrowRight,
  FaChevronDown,
  FaAngleRight,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const [showSmallNavbar, setShowSmallNavbar] = useState(window.scrollY <= 50);

  useEffect(() => {
    const handleScroll = () => {
      setShowSmallNavbar(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle =
    "text-gray-800 hover:text-green-600 hover:border-b-2 border-green-600 transition-all duration-200  text-[17px] flex font-rubik";

  return (
    <>
      {showSmallNavbar ? (
        <div className="fixed top-0 left-0 right-0 z-40 flex flex-col w-full mx-auto">
          {/* Small Navbar */}
          <div className={`bg-slate-100 border-b-2 px-4 md:px-8 py-2 `}>
            <div className="flex items-center justify-between ">
              {/* Left Section (Hidden on Small Devices) */}
              <div className="items-center hidden space-x-4 text-sm md:flex md:w-full">
                <a
                  href="tel:+971-504282001"
                  className="flex items-center text-green-600 hover:text-green-700"
                  aria-label="Phone Number"
                >
                  <FaPhone size={20} className="mr-1" />
                  +971-504282001
                </a>
                <a
                  href="mailto:services@baitaltahzeeb.com"
                  className="flex items-center text-green-600 hover:text-green-700"
                  aria-label="Email Address"
                >
                  <IoMdMail size={20} className="mr-1" />
                  services@baitaltahzeeb.com
                </a>
              </div>

              {/* Bismillah Section (Visible on All Devices) */}
              <div className="w-full text-center lg:-translate-x-48 sm:text-sm">
                <span className="text-sm font-bold text-center text-gray-600 lg:text-xl lg:text-gray-700">
                  بسم الله الرحمن الرحيم
                </span>
                <br />
                <span
                  className="text-sm font-bold text-center text-gray-600 hover:text-green-600 lg:hidden md:hidden"
                  href="tel:+971-504282001"
                >
                  Call us: +971-504282001
                </span>
              </div>

              {/* Right Section (Hidden on Small Devices) */}
              <div className="items-center hidden space-x-4 text-sm md:flex">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600"
                  aria-label="Facebook"
                >
                  <FaFacebookSquare size={20} />
                </a>
                <a
                  href="https://x.com/BaitAlTahzeeb"
                  target="_blank"
                  className="text-black hover:text-gray-700"
                  aria-label="Twitter"
                >
                  <RiTwitterXFill size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/bait-al-tahzeeb-6b79a2346/"
                  target="_blank"
                  className="text-blue-500 hover:text-blue-600"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="text-[#d62976] hover:text-[#bc2a8d]"
                  aria-label="Instagram"
                >
                  <FaInstagramSquare size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Big Navbar */}
          <div className="w-full bg-white shadow-md ">
            <div className="flex items-center justify-between px-4 py-4 md:px-8">
              <div className="text-xl font-bold uppercase md:text-3xl">
                <Link to={"/"}>
                  <img className="w-24 h-12" src="/images/logo01.jpg" alt="" />
                </Link>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-800"
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? (
                    <HiOutlineX size={30} />
                  ) : (
                    <HiOutlineMenu size={30} />
                  )}
                </button>
              </div>

              <ul className="hidden space-x-4 md:flex">
                <li>
                  <Link to="/" className={linkStyle}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={linkStyle}>
                    About us
                  </Link>
                </li>
                <li>
                  <div className="relative group">
                    <Link to="#" className={linkStyle}>
                      Services{" "}
                      <FaChevronDown className="mt-1 ml-1 transition-all duration-300 group-hover:rotate-180" />
                    </Link>
                    <div className="absolute z-50 hidden w-48 bg-white rounded-md shadow-lg group-hover:block ring-1 ring-black ring-opacity-5 ">
                      <div className="py-1" role="menu">
                        <Link
                          to="/services"
                          className="flex justify-between px-4 py-3 gap-1 text-sm text-black hover:bg-green-600 font-semibold text-[17px] font-inter"
                        >
                          All{" "}
                          <spa className="">
                            {" "}
                            <FaAngleRight className="mt-1" size={15} />
                          </spa>
                        </Link>
                        <Link
                          to="/maintaince"
                          className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                        >
                          Maintaince Services{" "}
                          <spa className="">
                            {" "}
                            <FaAngleRight className="mt-1" size={15} />
                          </spa>
                        </Link>
                        <Link
                          to="/cleaning"
                          className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                        >
                          Cleaning Services{" "}
                          <spa className="">
                            {" "}
                            <FaAngleRight className="mt-1" size={15} />
                          </spa>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative group">
                    <Link to="#" className={linkStyle}>
                      Gallery{" "}
                      <FaChevronDown className="mt-1 ml-1 transition-all duration-300 group-hover:rotate-180" />
                    </Link>
                    <div className="absolute z-50 hidden w-48 bg-white rounded-md shadow-lg group-hover:block ring-1 ring-black ring-opacity-5 ">
                      <div className="py-1" role="menu">
                        <Link
                          to="/photos"
                          className="flex justify-between px-4 py-3 gap-1 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                        >
                          Photos Gallery
                          <spa className="">
                            {" "}
                            <FaAngleRight className="mt-1" size={15} />
                          </spa>
                        </Link>
                        <Link
                          to="/videos"
                          className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                        >
                          Videos Gallery{" "}
                          <spa className="">
                            {" "}
                            <FaAngleRight className="mt-1" size={15} />
                          </spa>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/contact" className={linkStyle}>
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="hidden md:flex">
                <Link
                  to="/contact"
                  className="bg-green-600 text-white py-3 px-6 rounded-md flex items-center hover:bg-green-700 text-[17px] font-semibold"
                >
                  Quick Contact
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>

            {isMobileMenuOpen && (
              <div className="px-4 py-6 md:hidden bg-slate-100">
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      className={linkStyle}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={linkStyle}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <div className="relative group">
                      <Link
                        to="#"
                        className={linkStyle + " group"}
                        onClick={() =>
                          setIsServicesDropdownOpen(!isServicesDropdownOpen)
                        }
                      >
                        Services
                        <FaChevronDown
                          className={`mt-2 ml-1 transition-all duration-300 ${
                            isServicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>
                      {isServicesDropdownOpen && (
                        <div className="absolute z-50 hidden w-48 bg-white rounded-md shadow-lg group-hover:block ring-1 ring-black ring-opacity-5 ">
                          <div className="py-1" role="menu">
                            <Link
                              to="/services"
                              className="flex justify-between px-4 py-3 gap-1 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                            >
                              All{" "}
                              <spa className="">
                                {" "}
                                <FaAngleRight className="mt-1" size={15} />
                              </spa>
                            </Link>
                            <Link
                              to="/maintaince"
                              className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                            >
                              Maintaince Services{" "}
                              <spa className="">
                                {" "}
                                <FaAngleRight className="mt-1" size={15} />
                              </spa>
                            </Link>
                            <Link
                              to="/cleaning"
                              className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                            >
                              Cleaning Services{" "}
                              <spa className="">
                                {" "}
                                <FaAngleRight className="mt-1" size={15} />
                              </spa>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                  <li>
                    <div className="relative group">
                      <Link
                        to="#"
                        className={linkStyle}
                        onClick={() =>
                          setIsGalleryDropdownOpen(!isGalleryDropdownOpen)
                        }
                      >
                        Gallery{" "}
                        <FaChevronDown
                          className={`mt-2 ml-1 transition-all duration-300 ${
                            isGalleryDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>
                      {isGalleryDropdownOpen && (
                        <div className="absolute z-50 hidden w-48 bg-white rounded-md shadow-lg group-hover:block ring-1 ring-black ring-opacity-5 ">
                          <div className="py-1" role="menu">
                            <Link
                              to="/photos"
                              className="flex justify-between px-4 py-3 gap-1 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                            >
                              Photos Gallery
                              <spa className="">
                                {" "}
                                <FaAngleRight className="mt-1" size={15} />
                              </spa>
                            </Link>
                            <Link
                              to="/videos"
                              className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                            >
                              Videos Gallery{" "}
                              <spa className="">
                                {" "}
                                <FaAngleRight className="mt-1" size={15} />
                              </spa>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={linkStyle}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    to="/contactus"
                    className="bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center hover:bg-green-700 text-[17px] font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Quick Contact
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="fixed top-0 left-0 right-0 z-40 flex flex-col w-full mx-auto">
          {/* Big Navbar */}
          <div className="w-full bg-white shadow-md ">
            <div className="flex items-center justify-between px-4 py-4 md:px-8">
              <div className="text-xl font-bold uppercase md:text-3xl">
                <Link to={"/"}>
                  <img className="w-24 h-12" src="/images/logo01.jpg" alt="" />
                </Link>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-800"
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? (
                    <HiOutlineX size={30} />
                  ) : (
                    <HiOutlineMenu size={30} />
                  )}
                </button>
              </div>

              <ul className="hidden space-x-4 md:flex">
                <li>
                  <Link to="/" className={linkStyle}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={linkStyle}>
                    About us
                  </Link>
                </li>
                <li>
                  <div className="relative group">
                    <Link to="#" className={linkStyle}>
                      Services{" "}
                      <FaChevronDown className="mt-2 ml-1 transition-all duration-300 group-hover:rotate-180" />
                    </Link>
                    <div className="absolute z-50 hidden w-48 bg-white rounded-md shadow-lg group-hover:block ring-1 ring-black ring-opacity-5 ">
                      <div className="py-1" role="menu">
                        <Link
                          to="/services"
                          className="flex justify-between px-4 py-3 gap-1 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                        >
                          All{" "}
                          <spa className="">
                            {" "}
                            <FaAngleRight className="mt-1" size={15} />
                          </spa>
                        </Link>
                        <Link
                          to="/maintaince"
                          className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                        >
                          Maintaince Services{" "}
                          <spa className="">
                            {" "}
                            <FaAngleRight className="mt-1" size={15} />
                          </spa>
                        </Link>
                        <Link
                          to="/cleaning"
                          className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                        >
                          Cleaning Services{" "}
                          <spa className="">
                            {" "}
                            <FaAngleRight className="mt-1" size={15} />
                          </spa>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="relative group">
                    <Link to="#" className={linkStyle}>
                      Gallery{" "}
                      <FaChevronDown className="mt-2 ml-1 transition-all duration-300 group-hover:rotate-180" />
                    </Link>
                    <div className="absolute z-50 hidden w-48 bg-white rounded-md shadow-lg group-hover:block ring-1 ring-black ring-opacity-5 ">
                      <div className="py-1" role="menu">
                        <Link
                          to="/photos"
                          className="flex justify-between px-4 py-3 gap-1 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                        >
                          Photos Gallery
                          <spa className="">
                            {" "}
                            <FaAngleRight className="mt-1" size={15} />
                          </spa>
                        </Link>
                        <Link
                          to="/videos"
                          className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                        >
                          Videos Gallery{" "}
                          <spa className="">
                            {" "}
                            <FaAngleRight className="mt-1" size={15} />
                          </spa>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/contact" className={linkStyle}>
                    Contact Us
                  </Link>
                </li>
              </ul>

              <div className="hidden md:flex">
                <Link
                  to="/contact"
                  className="bg-green-600 text-white py-3 px-6 rounded-md flex items-center hover:bg-green-700 text-[17px] font-semibold"
                >
                  Quick Contact
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>

            {isMobileMenuOpen && (
              <div className="px-4 py-6 md:hidden bg-slate-100">
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      className={linkStyle}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className={linkStyle}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <div className="relative group">
                      <Link
                        to="#"
                        className={linkStyle + " group"}
                        onClick={() =>
                          setIsServicesDropdownOpen(!isServicesDropdownOpen)
                        }
                      >
                        Services
                        <FaChevronDown
                          className={`mt-2 ml-1 transition-all duration-300 ${
                            isServicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>
                      {isServicesDropdownOpen && (
                        <div className="absolute z-50 hidden w-48 bg-white rounded-md shadow-lg group-hover:block ring-1 ring-black ring-opacity-5 ">
                          <div className="py-1" role="menu">
                            <Link
                              to="/services"
                              className="flex justify-between px-4 py-3 gap-1 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                            >
                              All{" "}
                              <spa className="">
                                {" "}
                                <FaAngleRight className="mt-1" size={15} />
                              </spa>
                            </Link>
                            <Link
                              to="/maintaince"
                              className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                            >
                              Maintaince Services{" "}
                              <spa className="">
                                {" "}
                                <FaAngleRight className="mt-1" size={15} />
                              </spa>
                            </Link>
                            <Link
                              to="/cleaning"
                              className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                            >
                              Cleaning Services{" "}
                              <spa className="">
                                {" "}
                                <FaAngleRight className="mt-1" size={15} />
                              </spa>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                  <li>
                    <div className="relative group">
                      <Link
                        to="#"
                        className={linkStyle}
                        onClick={() =>
                          setIsGalleryDropdownOpen(!isGalleryDropdownOpen)
                        }
                      >
                        Gallery{" "}
                        <FaChevronDown
                          className={`mt-2 ml-1 transition-all duration-300 ${
                            isGalleryDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </Link>
                      {isGalleryDropdownOpen && (
                        <div className="absolute z-50 hidden w-48 bg-white rounded-md shadow-lg group-hover:block ring-1 ring-black ring-opacity-5 ">
                          <div className="py-1" role="menu">
                            <Link
                              to="/photos"
                              className="flex justify-between px-4 py-3 gap-1 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                            >
                              Photos Gallery
                              <spa className="">
                                {" "}
                                <FaAngleRight className="mt-1" size={15} />
                              </spa>
                            </Link>
                            <Link
                              to="/videos"
                              className="flex justify-between gap-1 px-4 py-3 text-sm text-black hover:bg-green-600 font-semibold text-[17px]"
                            >
                              Videos Gallery{" "}
                              <spa className="">
                                {" "}
                                <FaAngleRight className="mt-1" size={15} />
                              </spa>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className={linkStyle}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    to="/contactus"
                    className="bg-green-600 text-white py-3 px-6 rounded-md flex items-center justify-center hover:bg-green-700 text-[17px] font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Quick Contact
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
