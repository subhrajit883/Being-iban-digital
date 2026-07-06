import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const links =[
        {name:"Instagram", url:"https://www.instagram.com/being_iban_digital"},
        {name:"Facebook", url:"https://www.https://www.facebook.com/people/Being-Iban-Digital/61591181224638/"}
    ]
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        <div>
          <div className="text-3xl font-bold text-amber-500">
            <img src="/logo.png" alt="IBAN Digital" className="w-40 h-12" />
          </div>

          <p className="mt-4 text-gray-400 leading-8">
            We help businesses scale through branding,
            marketing and high-converting websites.
          </p>
        </div>

        <div className="flex md:justify-end items-center gap-6 text-2xl">

          <FaFacebook />

          <FaInstagram />

        </div>

      </div>

      <p className="text-center mt-10 text-gray-500">
        © 2026 IBAN Digital. All Rights Reserved.
      </p>
    </footer>
  );
}