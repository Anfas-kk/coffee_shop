import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/coffee/coffee3.png"; // change image if needed

const About = () => {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-darkGray">
            About <span className="text-primary">Coders Cafe</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We serve freshly brewed coffee crafted with passion and premium ingredients.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={AboutImg}
              alt="About Coffee"
              className="w-[350px] drop-shadow-xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-darkGray">
              Crafted With Love & Passion
            </h3>

            <p className="text-gray-600 leading-relaxed">
              At Coders Cafe, we believe coffee is more than just a drink —
              it's an experience. Our beans are carefully selected and roasted
              to perfection to bring you rich aroma and unforgettable taste.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Whether you love a bold espresso or a creamy latte, we make sure
              every cup delivers comfort and happiness.
            </p>

            <button className="bg-primary text-white px-8 py-3 rounded-full hover:scale-105 transition duration-300 shadow-lg">
              Explore Our Menu
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
