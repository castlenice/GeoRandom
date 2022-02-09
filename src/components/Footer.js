import { Card, CardBody, CardFooter, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Footer = () => {
  return (
    <Card className="footer">
      <CardBody className="cardbody">
        <div className="footerbutton">
          <Button className="button-f1"><a href="https://github.com/castlenice/GeoRandom">GitHub</a></Button>
          <Button className="button-f2"><a href="https://www.linkedin.com/in/sonja-schoenburg/">LinkedIn</a></Button>
          <Button className="button-f2"><a href="https://www.instagram.com/nicecastle/">Instagram</a></Button>
        </div>
      </CardBody>
      <CardFooter className="cardfooter">
        <small>
          Images by <a href="https://unsplash.com/">Unsplash</a>
        </small>
        <small>
          &copy; Copyright {new Date().getFullYear()}, GeoRandom by <a href="https://github.com/castlenice/GeoRandom">nicecastle</a>
          <span role="img" aria-label="castle">
            🏰{" "}
          </span>
        </small>
      </CardFooter>
    </Card>
  );
};

export default Footer;
