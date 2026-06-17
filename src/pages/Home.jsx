import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../sections/Hero.jsx";
import Adventures from "../sections/Adventures.jsx";
import Experience from "../sections/Experience.jsx";
import ContactCta from "../sections/ContactCta.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Contact from "../sections/Contact.jsx";

const Home = () => {
  return (
    <>
      <Navbar overlay />
      <main>
        <Hero />
        <Adventures />
        <Experience />
        <ContactCta />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
