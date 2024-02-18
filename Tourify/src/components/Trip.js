import "./Tripstyles.css";
import Tripdata from "../components/Tripdata";
import Trip1 from "../assets/greece.jpg";
import Trip2 from "../assets/venice.jpg";
import Trip3 from "../assets/dubai.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <Tripdata
          image={Trip1}
          heading="Trip in Greece"
          text="Greece is located in southeastern Europe, situated at the southern tip of the Balkan Peninsula. Surrounded by crystal blue waters all around, Greece has 2,000 islands, among which only 160 are inhabited. The country boasts a multitude of these picturesque islands scattered throughout the Aegean and Ionian Seas, offering charming villages, lush forests, rugged mountains, pristine beaches, and a unique island atmosphere."
        />
        <Tripdata
          image={Trip2}
          heading="Trip in Venice"
          text="Venice, the capital of the Veneto region, is a historic and iconic city located in northeastern Italy. It is situated in the Venetian Lagoon, a unique and picturesque coastal area in the Adriatic Sea. The city is built on a series of 118 small islands that are connected by a network of canals, and it is separated from the mainland by a narrow strip of land called the Lido. It is a beautiful city known for its interconnected canals and its gondola rides. 
Venice's distinctive urban design, with its intricate network of canals, bridges, and narrow winding streets, sets it apart from other cities in the world. The entire city seems to float on the water, making it a truly unique and enchanting place to visit. The city is home to numerous churches, palaces, and museums filled with masterpieces from renowned artists.
          
          "
        />
        <Tripdata
          image={Trip3}
          heading="Trip in Dubai"
          text="Dubai, a jewel in the UAE's crown, stands as a testament to ambition and innovation. Rising from desert sands, its skyline boasts architectural marvels like the Burj Khalifa, piercing the heavens. Luxury shopping malls coexist with historic souks, offering a blend of tradition and modernity. As a city that never stops evolving, Dubai dazzles with its opulence, technological feats, and a vision that ceaselessly pushes the boundaries of urban development.
          "
        />
      </div>
    </div>
  );
}
export default Trip;
