import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutImg from "../assets/nightabout.jpg";
import Aboutus from "../components/Aboutus";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero-mid"
        heroImg={AboutImg}
        title="About"
        url="/"
        btnClass="hide"
      />
      <Aboutus />
      <Footer />
    </>
  );
}

export default About;
