import React from "react";
import {
  UncontrolledCarousel,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardGroup,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Home = () => {
  return (
    <>
      <UncontrolledCarousel
        interval={3000}
        pause={false}
        items={[
          {
            key: 1,
            src: "https://picsum.photos/id/1002/1200/500",
          },
          {
            key: 2,
            src: "https://picsum.photos/id/678/1200/500",
          },
          {
            key: 3,
            src: "https://picsum.photos/id/960/1200/500",
          },
          {
            key: 4,
            src: "https://picsum.photos/id/283/1200/500",
          },
          {
            key: 5,
            src: "https://picsum.photos/id/1032/1200/500",
          },
          {
            key: 6,
            src: "https://picsum.photos/id/287/1200/500",
          },
        ]}
      />
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#A5AED5",
          height: 3,
          borderColor: "#A5AED5",
          margin: '3em',
        }}
      />
      <CardGroup>
        <Card className="cardgroup">
          <CardImg
            alt="Card image cap"
            src=""
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card className="cardgroup">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card className="cardgroup">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
};

export default Home;
