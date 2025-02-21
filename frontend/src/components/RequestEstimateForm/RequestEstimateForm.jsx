import  { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const RequestEstimateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    service: '',
    email: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.contact || !formData.address || !formData.service || !formData.email ) {
      toast.error('All fields are required.');
      return;
    }

    try {
      const response = await fetch('https://bait-al.onrender.com/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }); 

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', contact: '', address: '', service: '', email: '' });
      } else {
        toast.error(result.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while sending the message.');
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200, // Offset (distance from top to trigger animation)   
    });
  }, []);
  return (

    <div className="w-full p-6 mx-auto mt-10 rounded-lg shadow-lg max-w-6xl bg-gray-50 animate-fadeIn aos-box" data-aos="fade-up">
      <h2 className="mb-4 text-3xl font-semibold text-green-600">

        Request an Estimate :
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2" >
        {/* Name Field */}
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-green-600 rounded-md focus:outline-none focus:ring focus:ring-green-600 "
        />

        {/* Contact Number Field */}
        <input
          type="text"
          id="contact"
          placeholder="Contact Phone No."
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-3 border border-green-600 rounded-md focus:outline-none focus:ring focus:ring-green-600 "
        />
        {/* Email */}
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-green-600 rounded-md focus:outline-none focus:ring focus:ring-green-600 "
        />

        {/* Contact Number Field */}
        <select
          className="w-full p-3 border border-green-600 rounded-md focus:outline-none focus:ring focus:ring-green-600"
          value={formData.service}
          onChange={handleChange}
          id="service"
          defaultValue=""
        >
          <option value="" disabled id="1" className="">
            Select Your Services
          </option>
          
          <option value="services" className="font-semibold text-black ">Villa & Apartments Services</option>
          <option value="maintenance" className="font-semibold text-black ">All Over Building Maintenance</option>
          <option value="sofa_cleaning" className="font-semibold text-black ">Sofa Cleaning</option>
          <option value="pest_control" className="font-semibold text-black ">Pest Control</option>
          <option value="deep_cleaning" className="font-semibold text-black ">Deep Cleaning</option>
          <option value="painting" className="font-semibold text-black ">Painting</option>
          <option value="carpentry" className="font-semibold text-black ">Carpentry</option>
          <option value="plumbering" className="font-semibold text-black ">Plumbering</option>
          <option value="electrical_ac" className="font-semibold text-black ">Electrical & AC Maintaining</option>
        </select>

        {/* address */}
        <input
          type="text"
          id="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border border-green-600 rounded-md md:col-span-2 focus:outline-none focus:ring focus:ring-green-600"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 font-semibold text-white transition bg-green-600 rounded-md md:col-span-2 hover:bg-green-700"
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default RequestEstimateForm;
