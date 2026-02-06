import React from "react";
import { motion } from "framer-motion";
import WorldMap from "../../assets/world-map.png";

const WhereToBuy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT FORM SECTION ================= */}
          <div className="space-y-8">

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-darkGray font-serif"
            >
              Buy our products from anywhere
            </motion.h2>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Country"
                  className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Zipcode"
                  className="border border-gray-300 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Button */}
              <button className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primaryDark transition duration-300 shadow-md">
                Order Now
              </button>
            </motion.div>

          </div>

          {/* ================= RIGHT MAP SECTION ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={WorldMap}
              alt="world map"
              className="w-full max-w-[500px] mx-auto opacity-80"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhereToBuy;
