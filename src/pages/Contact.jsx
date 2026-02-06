import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 pt-28 pb-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-darkGray mb-4">
                Customer Support
              </h1>
              <p className="text-lg text-gray-600">
                Email: <span className="font-semibold">support@coderscafe.com</span>
              </p>
              <p className="text-lg text-gray-600">
                Phone: <span className="font-semibold">+91 (790) 28-38-98</span>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-darkGray">
                Find us on
              </h2>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-darkGray">
                Corporate Office
              </h2>

              <p className="text-gray-600 leading-relaxed max-w-md">
                No. 55, Calicut 673001, Kerala, India.
              </p>

              <button className="mt-6 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-primaryDark transition">
                Get Directions
              </button>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6 text-darkGray">
              Get in touch
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                rows="4"
                placeholder="Enter Message"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>

              <button
                type="submit"
                className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primaryDark transition"
              >
                Submit
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>

  );
};

export default Contact;
