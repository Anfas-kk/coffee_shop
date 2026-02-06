import React from "react";
import { motion } from "framer-motion";

import Coffee1 from "../assets/coffee/coffee1.png";
import Coffee2 from "../assets/coffee/coffee2.png";
import Coffee3 from "../assets/coffee/coffee3.png";
import Coffee4 from "../assets/coffee/coffee4.png";
import Coffee5 from "../assets/coffee/coffee5.png";
import Coffee6 from "../assets/coffee/coffee6.png";
import Coffee7 from "../assets/coffee/coffee7.png";

const menuData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    price: "$4.99",
    description: "Strong and bold flavor for true coffee lovers.",
  },
  {
    id: 2,
    image: Coffee2,
    title: "Hot Coffee",
    price: "$5.49",
    description: "Freshly brewed with rich aroma and smooth taste.",
  },
  {
    id: 3,
    image: Coffee3,
    title: "Cold Coffee",
    price: "$6.99",
    description: "Chilled creamy delight with refreshing flavor.",
  },
  {
    id: 4,
    image: Coffee5,
    title: "Vanilla Sweet Cream Cold Brew",
    price: "$7.49",
    description: "Smooth cold brew topped with vanilla sweet cream.",
  },
  {
    id: 5,
    image: Coffee2,
    title: "Cafe Latte",
    price: "$5.99",
    description: "Espresso blended with steamed milk and light foam.",
  },
  {
    id: 6,
    image: Coffee4,
    title: "Iced Caramel Macchiato",
    price: "$6.79",
    description: "Layered espresso with milk and rich caramel drizzle.",
  },
  {
    id: 7,
    image: Coffee6,
    title: "Iced Mocha",
    price: "$6.49",
    description: "Chocolate espresso over ice with whipped cream.",
  },
  {
    id: 8,
    image: Coffee3,
    title: "Ice Cafe Latte",
    price: "$5.89",
    description: "Classic iced latte with smooth espresso flavor.",
  },
  {
    id: 9,
    image: Coffee7,
    title: "Mocha Frappuccino",
    price: "$7.99",
    description: "Blended mocha drink topped with whipped cream.",
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const Menu = () => {
  return (
    <section className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container">

        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-darkGray">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-gray-500 mt-3">
            Discover our handcrafted coffee selection
          </p>
        </motion.div>

        {/* ===== Menu Grid ===== */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {menuData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true,amount: 0.3}}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-40 mx-auto mb-5 hover:scale-110 transition duration-300 img-shadow3"
              />

              <h3 className="text-xl font-semibold text-darkGray">
                {item.title}
              </h3>

              <p className="text-primary font-bold mt-2">
                {item.price}
              </p>

              <p className="text-gray-500 text-sm mt-3">
                {item.description}
              </p>

              <button className="mt-5 bg-primary text-white px-6 py-2 rounded-full hover:bg-primaryDark transition">
                Order Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
