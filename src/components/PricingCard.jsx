import { motion } from "framer-motion";
import {
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

export default function PricingCard({
  plan,
  index,
}) {
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .6,
        delay: index * .15,
      }}
      whileHover={{
        y: -15,
        scale: 1.02,
      }}
      className={`relative rounded-3xl overflow-hidden bg-white shadow-xl transition-all

      ${
        plan.popular
          ? "ring-2 ring-amber-500 lg:scale-105"
          : ""
      }
      `}
    >
      {/* Popular Badge */}

      {plan.popular && (
        <div className="absolute top-5 right-5 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
          Most Popular
        </div>
      )}

      {/* Top Gradient */}

      <div
        className={`h-2 bg-linear-to-r ${plan.gradient}`}
      />

      <div className="p-9">

        {/* Icon */}

        <div
          className={`w-18 h-18 rounded-3xl bg-linear-to-br ${plan.gradient} flex items-center justify-center text-white mb-8`}
        >
          <Icon size={34} />
        </div>

        {/* Title */}

        <h3 className="text-3xl font-black text-gray-900">
          {plan.title}
        </h3>

        {/* Description */}

        {/* <p className="mt-4 text-gray-500 leading-7">
          {plan.description}
        </p> */}

        {/* Price */}

        {/* <div className="mt-8 flex items-end gap-2">

          <span className="text-5xl font-black text-gray-900">
            {plan.price}
          </span>

          <span className="text-gray-500 mb-2">
            {plan.duration}
          </span>

        </div> */}

        {/* Divider */}

        <div className="my-8 h-px bg-gray-200" />

        {/* Features */}

        <div className="space-y-4">

          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-4"
            >
              <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">

                <FaCheck
                  className="text-green-600"
                  size={12}
                />

              </div>

              <span className="text-gray-700">
                {feature}
              </span>

            </div>
          ))}

        </div>

        {/* Button */}

        <button
          className={`mt-10 w-full py-4 rounded-2xl font-semibold text-white bg-linear-to-r ${plan.gradient} flex items-center justify-center gap-3 hover:shadow-xl transition`}
        >
          {plan.button}

          <FaArrowRight />
        </button>

      </div>
    </motion.div>
  );
}