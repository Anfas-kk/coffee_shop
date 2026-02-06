import React from "react";
import { motion, spring } from "framer-motion";
import BgImag from "../../assets/bg-slate.png"
import BlackCoffee from "../../assets/black.png"


const bgImag = {
  backgroundImage: `url(${BgImag})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Hero = () => {
  return (
    <main style={bgImag}>
      <section className="min-h-[750px] w-full">
        <div className="container">
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">

            {/* ================= LEFT TEXT SECTION ================= */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1 initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type:spring, 
                  stiffness:100,
                  damping:10,
                  delay: 1 }}
                className="text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </motion.h1>

              <motion.div initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 12,
                    delay: 1.2,
                  }}
                  className="relative" >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">
                    Black Lifestyle Lovers,
                  </h1>

                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus aspernatur, cumque eos neque dolorem architecto
                    deserunt quis voluptatibus in quisquam quia ducimus.
                  </h1>
                </div>

                {/* Gray Background Box */}
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </motion.div>

            </div>

            {/* ================= HERO IMAGE SECTION ================= */}
            <div className="relative">

              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                src={BlackCoffee}
                alt="coffee"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />

              {/* Orange Circle Ring */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
                className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"/>

              {/* Big Background Text */}
              <motion.div
                initial={{ opacity: 0 , x:-100}}
                animate={{ opacity: 0.4 , x:0}}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8, }}
                className="absolute -top-20 left-[200px] z-[1]">
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </motion.div>

            </div>

            {/* ================= RIGHT TEXT SECTION ================= */}
            <motion.div
              initial={{ opacity: 0, y : 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring",
                    stiffness: 80,
                    damping: 10,
                    delay: 1.2, }}
              className="hidden lg:block text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">

              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Blvck Tumbler
              </h1>

              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">
                    Black Lifestyle Lovers,
                  </h1>

                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus aspernatur, Delectus aspernatur,
                    Delectus aspernatur.
                  </h1>
                </div>

                {/* Gray Background Box Right */}
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;