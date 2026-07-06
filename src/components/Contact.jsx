import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa6";

import { FaPhoneAlt } from "react-icons/fa";



export default function Contact() {



  return (
    <section
      id="contact"
      className="relative py-28 bg-linear-to-b from-white to-stone-100 overflow-hidden"
    >
      {/* Background Blur */}

      <div className="absolute -left-24 top-10 w-72 h-72 bg-amber-300/30 blur-[140px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-96 h-96 bg-orange-300/20 blur-[170px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >
          {/* <p className="uppercase tracking-[4px] text-black font-semibold">
            CONTACT US
          </p> */}

          <h2 className="text-3xl  md:text-5xl font-semibold text-gray-900">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-8">
            Have an idea or project in mind?
            We'd love to hear from you.
            Let's create something your customers
            will remember.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <div className="space-y-7">

              <InfoCard
                icon={<FaPhoneAlt />}
                title="Call Us"
                value="+91 6292334685"
                href="tel:+916292334685"
              />

              <InfoCard
                icon={<FaEnvelope />}
                title="Email"
                value="digitalbeingiban@gmail.com"
                href="mailto:digitalbeingiban@gmail.com"
               
              />

              <InfoCard
                icon={<FaLocationDot />}
                title="Office"
                value="Unit B, Newton Square, 5th Floor, Chinar Park, Atghara, Rajarhat, Kolkata, West Bengal 700136"
                className="cursor-pointer"
              />

              {/* <InfoCard
                icon={<FaClock />}
                title="Working Hours"
                value="Mon - Sat | 10:00 AM - 7:00 PM"
              /> */}

            </div>

            {/* Quote Card */}

            {/* <motion.div
              whileHover={{ y: -8 }}
              className="mt-10 rounded-3xl bg-gradient-to-r from-[#4f2e11] to-[#6b3f19] p-8 text-white shadow-2xl"
            >

              <h3 className="text-3xl font-bold">
                Need A Custom Quote?
              </h3>

              <p className="mt-5 text-gray-200 leading-8">
                Every business is unique.
                We prepare customized proposals
                based on your requirements,
                timeline and budget.
              </p>

            </motion.div> */}

          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="bg-white rounded-[35px] shadow-2xl p-8 lg:p-10"
          >

            <div className="grid md:grid-cols-2 gap-6">

              <Input
                placeholder="Your Name"
              />

              <Input
                placeholder="Email Address"
                type="email"
              />

              <Input
                placeholder="Phone Number"
              />

              <Input
                placeholder="Company"
              />

            </div>

            <textarea
              rows="7"
              placeholder="Tell us about your project..."
              className="mt-6 w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500 transition resize-none"
            />

            <button
              type="submit"
              className="mt-8 w-full cursor-pointer rounded-2xl bg-[#d9963f] hover:bg-[#d9963f] transition py-4 text-white font-semibold flex justify-center items-center gap-3"
            >
              Send Message

              <FaPaperPlane />

            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

/* --------------------- */

function InfoCard({
  icon,
  title,
  value,
  href
}) {
      const handleClick = () => {
        console.log(href);
    if (!href) return;

    if (href.startsWith("tel:") || href.startsWith("mailto:")) {
      window.location.href = href;
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      whileHover={{
        x: 8,
      }}
      className="flex gap-5 items-center rounded-3xl bg-white p-6 shadow-lg cursor-pointer"
      onClick={handleClick}
      // onClick={() => window.location.href = `tel:${value.replace(/\s+/g, "")}`}
    >

      <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl">

        {icon}

      </div>

      <div>

        <h3 className="font-bold text-xl">
          {title}
        </h3>

        <p className="text-gray-600 mt-1">
          {value}
        </p>

      </div>

    </motion.div>
  );
}

/* --------------------- */

function Input({
  placeholder,
  type = "text",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:ring-2 focus:ring-amber-500 transition"
    />
  );
}