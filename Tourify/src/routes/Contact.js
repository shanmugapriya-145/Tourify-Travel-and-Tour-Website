import Navbar from "../components/Navbar";
import Contactform from "../components/Contactform";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutImg from "../assets/contact.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        url="/"
        btnClass="hide"
      />
      <Contactform />
      <Footer />
    </>
  );
}

export default Contact;
