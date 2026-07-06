import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6">

        <SectionTitle
        //   subtitle="ABOUT US"
          title="About Us"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 leading-9 text-xl"
        >
          At Being Iban Digital, we tackle your digital challenges head-on with a 360-degree digital marketing approach. Our expertise in eCommerce and brand-centric content creation ensures your products captivate customers through stunning visual storytelling. Through data-driven social media marketing and high-performance ad campaigns, we boost engagement and conversions—maximizing your ROI. Our cutting-edge website design and development services deliver seamless, user-friendly online experiences that convert. In times of crisis, our proactive PR and reputation management safeguards your brand image swiftly and effectively.
        </motion.p>
        {/* <div className="">
            
        </div> */}
      </div>
    </section>
  );
}