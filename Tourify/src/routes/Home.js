import Destination from "../components/Destination";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero"
        heroImg="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
