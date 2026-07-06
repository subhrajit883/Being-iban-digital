import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const menus = [
  "home",
  "about",
  "services",
  "pricing",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(entry.target.id);
        });
      },
      {
        threshold: 0.5,
      }
    );

    menus.forEach((id) => {
      const el = document.getElementById(id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 border-b border-black/10">
      <div className="max-w-7xl mx-auto h-20 px-6 flex justify-between items-center">

        <div className="text-2xl font-black ">
          <img src="/logo.png" alt="logo" className="w-44 h-16" /> 
        </div>

        <nav className="hidden md:flex gap-8 text-xl">
          {menus.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`capitalize transition

                ${
                  active === item
                    ? "text-[#523618] font-semibold"
                    : "text-black hover:text-[#523618]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          className="hidden md:block px-5 py-3 rounded-full bg-amber-500 hover:bg-amber-600 transition"
        >
          Get Started
        </button>

        <button
          className="md:hidden  text-3xl text-[#523618]"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl">

          {menus.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="block w-full py-4 text-white capitalize"
            >
              {item}
            </button>
          ))}

        </div>
      )}
    </header>
  );
}