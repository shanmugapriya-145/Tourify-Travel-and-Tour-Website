import Tower1 from "../assets/eiffel3.jpg";
import Tower2 from "../assets/MountainP.jpg";
import Tower3 from "../assets/Aus1.jpg";
import Tower4 from "../assets/Aus2.jpg";
import DestinationData from "../components/DestinationData";
import "./Destinationstyle.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Paris, France - The City of Lights"
        text=" Paris, the enchanting 'City of Lights', captivates with its blend of
      history, art, and romance. Its cobblestone streets lead to iconic
      landmarks like the Eiffel Tower and Notre-Dame. By night, the Seine
      River reflects shimmering illuminations, echoing the city's luminous
      spirit. An epicenter of culture and elegance, Paris remains an
      eternal muse for visitors from around the globe."
        img1={Tower1}
        img2={Tower2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Great Barrier Reef, Australia"
        text=" The Great Barrier Reef, stretching along Australia's northeast coast, is nature's most magnificent masterpiece. As the world's largest coral reef system, it boasts a kaleidoscope of marine life and vibrant coral formations. This underwater wonder, visible even from space, offers a mesmerizing dance of colors and shapes. A sanctuary for biodiversity, the reef stands not only as an iconic symbol of Australia's natural beauty but also as the planet's most splendid marine marvel."
        img1={Tower3}
        img2={Tower4}
      />
    </div>
  );
};

export default Destination;
