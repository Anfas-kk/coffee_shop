import React from "react";
import { motion } from "framer-motion";
import BannerImg from "../../assets/coffee-cover.jpg"; // background image
import AppStoreImg from "../../assets/website/app_store.png";
import PlayStoreImg from "../../assets/website/play_store.png";

const BannerStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const AppBanner = () => {
  return (
    <div className="container my-14">
      <div
        style={BannerStyle}
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-2xl overflow-hidden"
      >
        <div className="space-y-6 max-w-xl mx-auto sm:mx-0 p-6">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-semibold text-center sm:text-left"
          >
            Download the app
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center sm:text-left text-gray-600"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis deserunt reprehenderit cumque totam voluptatem.
          </motion.p>

          {/* Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center sm:justify-start items-center gap-4"
          >
            <a href="#">
              <img
                src={AppStoreImg}
                alt="App Store"
                className="max-w-[150px] sm:max-w-[180px]"
              />
            </a>

            <a href="#">
              <img
                src={PlayStoreImg}
                alt="Play Store"
                className="max-w-[150px] sm:max-w-[180px]"
              />
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AppBanner;
