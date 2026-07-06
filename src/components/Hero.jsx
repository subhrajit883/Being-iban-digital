import { motion } from "framer-motion";
import hero from "../assets/hero-globe.webp";

export default function Hero() {
      const scrollTo = (id) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#5f3b18] text-white"
    >
      {/* Background Blur */}
      <div className="absolute w-96 h-96 rounded-full bg-amber-500/20 blur-[140px] top-10 -left-20" />

      <div className="absolute w-72 h-72 rounded-full bg-orange-500/20 blur-[130px] bottom-0 right-0" />

      <div className="max-w-7xl mx-auto mt-10 px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: .8 }}
        >
          <span className="bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full text-sm">
            AI Powered Digital Marketing
          </span>

          <h1 className="mt-8 text-4xl lg:text-7xl font-black leading-tight">
            Reach The Heart Of Your
            <span className="text-[#d9963f]">
              {" "}Target Audience
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-200 leading-8 max-w-xl">
            Build a powerful online presence with branding,
            web development, SEO and performance marketing
            that actually converts visitors into customers.
          </p>

          <div className="mt-10 flex gap-5 flex-wrap">

            <button className="px-8 py-4 rounded-full bg-[#d9963f] hover:bg-[#d9963f] transition font-semibold">
              Get Started
            </button>

            <button id="services" onClick={() => scrollTo("services")} className="px-8 py-4 rounded-full border border-white/30 hover:bg-white hover:text-black transition">
              Our Services
            </button>

          </div>
        </motion.div>

        <motion.div
        //   animate={{
        //     y: [-10, 10, -10],
        //   }}
        //   transition={{
        //     repeat: Infinity,
        //     duration: 5,
        //   }}
          className="flex justify-center"
        >
          <img
            src={hero}
            alt=""
            className="w-[520px]"
          />
        </motion.div>

      </div>
    </section>
  );
}