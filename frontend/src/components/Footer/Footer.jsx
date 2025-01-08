import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { Link, Links } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          offset: 200, // Offset (distance from top to trigger animation)
        });
      }, []);
  return (
    // Footer Section
    <div className="bg-[#171616] text-white py-8">
      <div className="container px-4 pl-4 mx-auto aos-box" data-aos="fade-up">
        {/* Grid Container */}
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5"
          data-aos="fade-up"
        >
          {/* Logo Section */}
          <div className="flex flex-col items-start lg:items-start">
            <h2 className="text-xl font-bold">Bait Al Tahzeeb</h2>
            <Link to="/">
              <img
                src="/images/logo.jpg"
                alt="Bait Al Tahzeeb"
                className="object-cover w-20 h-20 mt-4 rounded-full"
              />
            </Link>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <FaPhone size={20} className="mr-2" />
                Call: +971-504282001, <br /> +971-589138900
              </li>
              <li className="flex items-center text-sm">
                <IoMdMail size={20} className="mr-2" />
                Email: services@baitaltahzeeb.com
              </li>
              <li className="flex items-center text-sm">
                <FaMapMarkerAlt size={20} className="mr-2" />
                Business bin hareeb centre, Business center shop 05, Nakeel
                2,Ajman (UAE)
              </li>
            </ul>
            <div className="flex pl-5 mt-4 space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <FaFacebookSquare size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <BsLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600"
              >
                <FaInstagramSquare size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Useful Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-green-600">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/photos" className="hover:text-green-600">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Services</h2>
            <ul className="space-y-2 text-sm">
              <li>
                {" "}
                <Link
                  to="/services"
                  className="hover:text-green-600 hover:cursor-pointer"
                >
                  Villa & Apartments Services
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/services"
                  className="hover:text-green-600 hover:cursor-pointer"
                >
                  Sofa Cleaning, and Deep Cleaning
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/services"
                  className="hover:text-green-600 hover:cursor-pointer"
                >
                  Pest Control, All Over Building Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-green-600 hover:cursor-pointer"
                >
                  Painting, Carpentry, Plumbering
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-green-600 hover:cursor-pointer"
                >
                  Electrical & AC Maintaining
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="sm:h-[100px]">
            <h2 className="mb-4 text-lg font-semibold">Newsletter</h2>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 text-black rounded-md outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center lg:justify-between justify-center pt-4 mt-8 text-sm border-t border-gray-700 lg:flex-row text-[#7e7e7e]">
          <p>&copy; 2024 Bait Al Tahzeeb Services. All rights reserved.</p>
          <p className="text-center text-sm">
            Website developed and maintained by{" "}
            <a
              href="https://www.nextzensoftware.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              NextZen Software Solutions LTD. PVT.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;