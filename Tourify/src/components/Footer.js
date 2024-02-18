import "./footerstyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Tourify</h1>
          <p>Choose Your Favourite Destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4> Project</h4>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">Versions</a>
        </div>
        <div>
          <h4> Community</h4>
          <a href="/">Github</a>
          <a href="/">Issuses</a>
          <a href="/">Project</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
