
import {
  Card,
  CardText,
  CardBody,
  CardFooter,
  Button
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"

const Footer = () => {
  return (
    <Card className="footer">
    <CardBody>
      <CardText>
        Visit my GitHub page to find out more!
      </CardText>
      <Button>
        GitHub
      </Button>
    </CardBody>
    <CardFooter>
        <small>&copy; Copyright {new Date().getFullYear()}, GeoRandom by nicecastle<span role="img" aria-label="castle"></span>🏰</small>
    </CardFooter>
  </Card>
  
  );
};

export default Footer;
