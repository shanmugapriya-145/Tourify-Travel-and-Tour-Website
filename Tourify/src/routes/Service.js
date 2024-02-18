import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutImg from "../assets/service.jpg";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero-mid"
        heroImg={AboutImg}
        title="Service"
        url="/"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
