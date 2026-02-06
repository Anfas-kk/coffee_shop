import React from "react";
import { motion } from "framer-motion";

import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee2 from "../../assets/coffee/coffee2.png";
import Coffee3 from "../../assets/coffee/coffee3.png";

const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    image: Coffee2,
    title: "Hot Coffee",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    image: Coffee3,
    title: "Cold Coffee",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-lg mx-auto space-y-3"
        >
          <h2 className="text-3xl font-bold text-darkGray">
            Fresh and <span className="text-primary">Tasty coffee</span>
          </h2>

          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eos reprehenderit eum ducimus distinctio cum eaque totam.
          </p>
        </motion.div>

        {/* ===== CARDS ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14 place-items-center"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`
                text-center space-y-5 max-w-xs
                ${service.id === 3 ? "sm:col-span-2 md:col-span-1" : ""}
              `}
              
            >
              <img
                src={service.image}
                alt={service.title}
                className="max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer img-shadow3"
              />

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-primary">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,}}
          viewport={{ once: true }}
          className="flex justify-center mt-16 ">
 
          <button className="bg-primary text-white px-12 py-4 rounded-full text-lg font-semibold flex items-center gap-4 hover:scale-110 transition duration-300 shadow-xl">
            Explore
            <span className="text-2xl">→</span>
          </button>
        </motion.div>



      </div>
    </section>
  );
};

export default Services;
