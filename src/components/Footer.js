import {
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardBody,
  CardFooter,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <Card>
      <CardHeader>Featured</CardHeader>
      <CardBody>
        <CardTitle></CardTitle>
        <CardText></CardText>
        {/* <Button></Button> */}
      </CardBody>
      <CardFooter className="text-muted">Footer</CardFooter>
    </Card>
  );
};

export default Footer;
