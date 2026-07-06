import {
  FaLaptopCode,
  FaSearch,
  FaBullhorn,
  FaPalette,
  FaChartLine,
} from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const services = [
  {
    icon: FaLaptopCode,
    title: "Development & Creation",
    description:
      "Beautiful, fast and responsive websites and designs that convert visitors into customers.",
    points: [
      "Website and App Development",
      "Business Website",
      "Admin Panel Website",
      "E-Commerce Website",
      "Photography & Videography",
      "Graphics Designing",

    ],
    color: "from-blue-500 to-cyan-500",
  },

  {
    icon: FaSearch,
    title: "SEO Optimization",
    description:
      "Rank higher on Google and attract high-quality organic traffic.",
    points: [
      "Search Engine Optimization",
      "Local SEO",
      "Generative Engine Optimization",
      "Keyword Research",
      "On-page SEO",
    ],
    color: "from-green-500 to-emerald-500",
  },

  {
    icon: FaBullhorn,
    title: "Marketing Channels",
    description:
      "Run profitable campaigns across Facebook, Instagram and Google.",
    points: [
      "Social Media Marketing",
      "Email Marketing",
      "WhatsApp Marketing",
      "Truecaller Marketing",
      "Influencer Marketing",
      "Digital Marketing"
    ],
    color: "from-orange-500 to-red-500",
  },

  {
    icon: FaPalette,
    title: "Content & Branding",
    description:
      "Create memorable branding that makes your business stand out.",
    points: [
      "Content Marketing",
      "Logo Design",
      "Online Reputation Management",
      "Strategy Consulting",
   
    ],
    color: "from-pink-500 to-purple-500",
  },

  {
    icon: FaChartLine,
    title: "Performance & Advertising",
    description:
      "Scale your business with data-driven growth strategies.",
    points: [
      "Google Ads",
      "Performance Marketing",
      "Lead Generation",
      "Conversion Rate Optimization",
      "Funnel Marketing"
    ],
    color: "from-yellow-500 to-orange-500",
  },

  {
    icon: IoShareSocialOutline,
    title: "Social & Platform Marketing",
    description:
      "Cross-platform mobile apps with modern UI and blazing performance.",
    points: [
      "YouTube Marketing",
      "LinkedIn Marketing",
      "X Ads",
      "Reddit Ads",
      "Social Media Management"
    ],
    color: "from-indigo-500 to-violet-500",
  },
];

export default services;