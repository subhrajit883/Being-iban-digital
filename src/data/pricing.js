import {
  FaRocket,
  FaBuilding,
  FaCrown,
} from "react-icons/fa";

const pricing = [
  {
    icon: FaRocket,

    title: "Starter",

    // price: "₹14,999",

    // duration: "/project",

    // description:
    //   "Perfect for startups and small businesses starting their online journey.",

    features: [
      "Social Media Management (2 Platforms)",
      "10 Creative Posts + 4 Reels",
      "Basic SEO",
      "Google Business Profile Setup",
      "Monthly Performance Report",
    ],

    button: "Get Started",

    popular: false,

    // gradient: "from-sky-500 to-cyan-500",
      gradient: "from-[#EBAF60] to-[#3D2505]",
  },

  {
    icon: FaBuilding,

    title: "Standard",

    // price: "₹34,999",

    // duration: "/project",

    description:
      "Ideal for businesses looking to scale with advanced marketing and branding.",

    features: [
      "Social Media Management (2 Platforms)",
      "18 Creative Posts + 8 Reels",
      "Google Ads Campaign Management",
      "Advanced SEO + Local SEO",
      "Monthly Strategy Consultation",
      "Lead Generation Funnel Setup",
      "Meta Ads Campaign Management",
    ],

    button: "Choose Plan",

    popular: true,

    // gradient: "from-amber-500 to-orange-500",
      gradient: "from-[#EBAF60] to-[#3D2505]",
  },

  {
    icon: FaCrown,

    title: "Advanced",

    // price: "Custom",

    // duration: "",

    description:
      "Complete digital transformation with custom solutions and dedicated support.",

    features: [
      "Complete Digital Marketing Management",
      "Unlimited Creative Designs",
      "Performance Marketing + CRO",
      "Influencer & YouTube Marketing",
      "Website Maintenance & SEO",
      "Dedicated Account Manager",
      "Advanced Analytics & Scaling Strategye",
    ],

    button: "Contact Us",

    popular: false,

    gradient: "from-[#EBAF60] to-[#3D2505]",
  },
];

export default pricing;