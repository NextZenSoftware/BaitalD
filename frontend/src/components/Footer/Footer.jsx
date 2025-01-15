import {
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom"; // Correct import for React Router
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
    <div className="bg-[#171616] text-white py-8">
      <div className="container px-4 pl-4 mx-auto aos-box" data-aos="fade-up">
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-start lg:items-start">
            <p className="text-lg font-semibold cursor-pointer hover:text-green-600">
              Bait Al Tahzeeb <br /> Cleaning Services & <br /> Building Maintenance LLC
            </p>
            <Link to="/">
              <img
                src="/images/logo.jpg"
                alt="Bait Al Tahzeeb"
                className="object-cover w-20 h-20 mt-4 rounded-full hover:cursor-pointer"
              />
            </Link>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Contact Us</h2>
            <ul className="space-y-2">
              <a
                href="tel:+971-504282001"
                className="flex items-center text-sm hover:text-green-600 hover:cursor-pointer"
                aria-label="Phone Number"
              >
                <FaPhone size={20} className="mr-2" />
                +971-504282001, <br /> +971-589138900
              </a>
              <a
                href="mailto:services@baitaltahzeeb.com"
                className="flex items-center text-sm hover:text-green-600 hover:cursor-pointer"
                aria-label="Email Address"
              >
                <IoMdMail size={20} className="mr-2" />
                services@baitaltahzeeb.com
              </a>
              <a
                href="https://www.google.com/maps/place/business+bin+hareb+center+%D9%85%D8%B1%D9%83%D8%B2+%D8%A8%D9%86+%D8%AD%D8%A7%D8%B1%D8%A8+%D9%84%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84%E2%80%AD/@25.4162886,55.4412341,18.22z/data=!4m6!3m5!1s0x3e5f57b9bc02644d:0xcbc8937758a41b7d!8m2!3d25.4165458!4d55.4422454!16s%2Fg%2F11ty1779cn?entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D"
                className="flex items-center text-sm hover:text-green-600 hover:cursor-pointer"
                aria-label="Location"
                target="_blank"
              >
                <FaMapMarkerAlt size={20} className="mr-2" />
                Business bin hareeb centre, Business center shop 05, Nakeel
                2, Ajman (UAE)
              </a>
            </ul>
            <div className="flex pl-5 mt-4 space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 hover:cursor-pointer"
              >
                <FaFacebookSquare size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/bait-al-tahzeeb-6b79a2346/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 hover:cursor-pointer"
              >
                <BsLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 hover:cursor-pointer"
              >
                <FaInstagramSquare size={20} />
              </a>
              <a
                href="https://x.com/BaitAlTahzeeb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-600 hover:cursor-pointer"
              >
                <RiTwitterXFill size={20} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Useful Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-green-600 hover:cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-600 hover:cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-green-600 hover:cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/photos" className="hover:text-green-600 hover:cursor-pointer">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-600 hover:cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Services</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-green-600 hover:cursor-pointer">
                  Villa & Apartments Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-green-600 hover:cursor-pointer">
                  Sofa Cleaning, and Deep Cleaning
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-green-600 hover:cursor-pointer">
                  Pest Control, All Over Building Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-green-600 hover:cursor-pointer">
                  Painting, Carpentry, Plumbering
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-green-600 hover:cursor-pointer">
                  Electrical & AC Maintaining
                </Link>
              </li>
            </ul>
          </div>

          <div>
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

        <div className="flex flex-col items-center lg:justify-between justify-center pt-4 mt-8 text-sm border-t border-gray-700 lg:flex-row text-[#7e7e7e]">
          <p className="text-sm text-center">
            &copy; 2023 Bait Al Tahzeeb Cleaning Services & Building Maintenance
            LLC. All rights reserved.
          </p>
          <p className="text-sm text-center">
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