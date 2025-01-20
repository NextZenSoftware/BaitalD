import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Common from "../components/common/Common";
import Map from "../components/Map/Map";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)   
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    service: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.contact ||
      !formData.address ||
      !formData.service ||
      !formData.email
    ) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", contact: "", address: "", service: "", email: "" });
      } else {
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message.");
    }
  };


  return (
    <>
      <Helmet>
        <title>
          Contact Us - Cleaning Services & Building Maintenance in Dubai
        </title>
        <meta
          name="description"
          content="Get in touch with us for professional cleaning and maintenance services in Dubai. Call us, email us, or visit our office today!"
        />
      </Helmet>

      <Layout>
        <Common />
        <div className="min-h-[480px]">
          <h1 className="px-4 mt-5 lg:text-3xl text-2xl font-bold text-center animate-fadeIn aos-box" data-aos="fade-up">
            Bait Al Tahzeeb Cleaning Services & Building Maintenance LLC
          </h1>
          <div className="flex flex-col max-w-6xl gap-10 px-4 mx-auto mt-6 md:flex-row animate-fadeIn aos-box" data-aos="fade-up">
            {/* Left Section */}
            <div className="w-full md:w-[380px] mx-auto h-[450px] bg-gray-100 border shadow-lg border-green-600 rounded-lg px-4 py-12 flex flex-col">
              <h1 className="text-2xl font-extrabold font-manrope">
                Do not hesitate to contact us
              </h1>
              <div className="flex items-start gap-3 mt-10">
                <div className="flex items-center justify-center w-10 h-10 mt-10 rounded-full">
                  <FaPhone size={25} className="text-green-600" />
                </div>
                <div>
                  <h2 className="mb-2 font-serif text-lg font-semibold text-pure-greys-500">
                    Call Us
                  </h2>
                  <ul className="space-y-2">
                    <li className="flex gap-2 font-extrabold transition-all duration-200 cursor-pointer hover:text-green-600">
                      <img
                        src="https://flagcdn.com/w20/ae.png"
                        alt="United Arab Emirates Flag"
                        className="w-5 h-5 rounded"
                      />
                      +971-504282001
                    </li>
                    <li className="flex gap-2 font-extrabold transition-all duration-200 cursor-pointer hover:text-green-600">
                      <img
                        src="https://flagcdn.com/w20/ae.png"
                        srcSet="https://flagcdn.com/w40/ae.png 2x"
                        alt="United Arab Emirates Flag"
                        className="w-5 h-5 rounded"
                      />
                      +971-589138900
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-3 mt-10">
                <div className="mt-2">
                  <MdOutlineEmail className="w-10 h-10 p-1 text-green-600 rounded-full" />
                </div>
                <div className="flex flex-col">
                  <h2 className="mb-1 font-serif text-lg font-semibold text-pure-greys-500">
                    Email Us
                  </h2>
                  <h3 className="text-lg font-bold transition-all duration-200 cursor-pointer font-title hover:text-green-600">
                    services@baitaltahzeeb.com
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex w-full md:w-[60%] ">
              <div className="w-full p-4 bg-gray-100 border border-green-600 rounded shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-7">
                    <div className="flex-1">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-lg font-semibold font-manrope text-pure-greys-500"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-green-600 rounded-md focus:outline-none focus:ring focus:ring-green-600"
                        placeholder="Enter Your Name..."
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label
                        htmlFor="contact"
                        className="block mb-2 text-lg font-semibold font-manrope text-pure-greys-500"
                      >
                        Contact No
                      </label>
                      <input
                        type="text"
                        id="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="w-full p-3 border border-green-600 rounded-md focus:outline-none focus:ring focus:ring-green-600"
                        placeholder="Enter Your Contact No..."
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-7">
                    <div className="flex-1">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-lg font-semibold font-manrope text-pure-greys-500"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-green-600 rounded-md focus:outline-none focus:ring focus:ring-green-600"
                        placeholder="Enter Your Email..."
                        required
                      />
                    </div>

                    <div className="flex-1">
                      <label
                        htmlFor="service"
                        className="block mb-2 text-lg font-semibold font-manrope text-pure-greys-500"
                      >
                        Services
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-3 border border-green-600 rounded-md focus:outline-none focus:ring focus:ring-green-600"
                        required
                      >
                        <option value="" disabled className="">
                          Select Your Services
                        </option>
                        <option
                          value="services"
                          className="font-semibold text-black"
                        >
                          Villa & Apartments Services
                        </option>
                        <option
                          value="maintenance"
                          className="font-semibold text-black"
                        >
                          All Over Building Maintenance
                        </option>
                        <option
                          value="sofa_cleaning"
                          className="font-semibold text-black"
                        >
                          Sofa Cleaning
                        </option>
                        <option
                          value="pest_control"
                          className="font-semibold text-black"
                        >
                          Pest Control
                        </option>
                        <option
                          value="deep_cleaning"
                          className="font-semibold text-black"
                        >
                          Deep Cleaning
                        </option>
                        <option
                          value="painting"
                          className="font-semibold text-black"
                        >
                          Painting
                        </option>
                        <option
                          value="carpentry"
                          className="font-semibold text-black"
                        >
                          Carpentry
                        </option>
                        <option
                          value="plumbering"
                          className="font-semibold text-black"
                        >
                          Plumbering
                        </option>
                        <option
                          value="electrical_ac"
                          className="font-semibold text-black"
                        >
                          Electrical & AC Maintaining
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="address"
                      className="block mb-2 text-lg font-semibold font-manrope text-pure-greys-500"
                    >
                      Address
                    </label>
                    <textarea
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-3 border border-green-600 rounded-md focus:outline-none focus:ring focus:ring-green-600"
                      rows={3}
                      placeholder="Enter Your Address..."
                      required
                    ></textarea>
                  </div>

                  <div className="flex flex-col gap-5 md:flex-row">
                    <button
                      type="submit"
                      className="lg:w-[50%] px-4 py-3 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring"
                    >
                      Send Message
                    </button>
                    <Link to="/" className="flex-1">
                      <button className="w-full px-4 py-3 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring ">
                        Go Back
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Map />
      </Layout>
    </>
  );
};

export default Contact;
