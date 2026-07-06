import About from "../components/About";
import Hero from "../components/Hero";
import Partners from "../components/Partners";

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Partners/>
            <section
                id="services"
                className="h-screen flex items-center justify-center bg-gray-100"
            >
                <h1 className="text-5xl font-bold">
                    Services
                </h1>
            </section>

            <section
                id="pricing"
                className="h-screen flex items-center justify-center"
            >
                <h1 className="text-5xl font-bold">
                    Pricing
                </h1>
            </section>

            <section
                id="contact"
                className="h-screen flex items-center justify-center bg-gray-100"
            >
                <h1 className="text-5xl font-bold">
                    Contact
                </h1>
            </section>
        </>
    );
}