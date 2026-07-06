import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";
// import Footer from "../components/Footer";
// import WhatsAppButton from "../components/WhatsAppButton";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* <WhatsAppButton />  */}
    </>
  );
}