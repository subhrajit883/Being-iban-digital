import About from "../components/About";
import Contact from "../components/Contact";
import Experts from "../components/Experts";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
                  {/* <section
                id="partners"
                className="h-screen flex items-center justify-center"
            >
                <h1 className="text-5xl font-bold">
                    Partners
                </h1>
            </section> */}
            {/* <Partners/> */}

                  {/* <section
                id="services"
                className="h-screen flex items-center justify-center"
            >
                <h1 className="text-5xl font-bold">
                    Services
                </h1>
            </section> */}
           <Services/>
           <Experts/>
            
            {/* <section
                id="pricing"
                className="h-screen flex items-center justify-center"
            >
                <h1 className="text-5xl font-bold">
                    Pricing
                </h1>
            </section> */}
{/* <Pricing/> */}
<WhyChoose/>
            {/* <section
                id="contact"
                className="h-screen flex items-center justify-center bg-gray-100"
            >
                <h1 className="text-5xl font-bold">
                    Contact
                </h1>
            </section> */}
            <Contact/>
        </>
    );
}