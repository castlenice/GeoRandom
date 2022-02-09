import React from "react";
import {
  UncontrolledCarousel,
  CarouselCaption,
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
        interval={5000}
        pause={false}
        items={[
          {
            key: 1,
            src: "https://picsum.photos/id/1002/1200/500",
          },
          {
            key: 2,
            src: "https://picsum.photos/id/1015/1200/500",
            captionHeader: "",
          },
          {
            key: 3,
            src: "https://picsum.photos/id/1032/1200/500",
          },
          {
            key: 4,
            src: "https://picsum.photos/id/283/1200/500",
          },
          {
            key: 5,
            src: "https://picsum.photos/id/902/1200/500",
          },
        ]}
      />
      <CarouselCaption
        captionHeader="A geography game that takes you on a journey"
        captionText="and challenges your ability to find out where-in-the-world you are."
      ></CarouselCaption>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#A5AED5",
          height: 3,
          borderColor: "#A5AED5",
          margin: "3em",
        }}
      />
      <CardGroup>
        <Card className="cardgroup">
          <CardImg
            alt="Card image cap"
            src="https://images.unsplash.com/photo-1460186136353-977e9d6085a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            top
            width="100%"
            height="400px"
          />
          <CardBody>
            <CardTitle tag="h5">Test your geography knowledge</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
        <Card className="cardgroup">
          <CardImg
            alt="Card image cap"
            src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            top
            width="100%"
            height="400px"
          />
          <CardBody>
            <CardTitle tag="h5">Explore the world from above</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button className="playbutton"><big>PLAY</big></Button>
          </CardBody>
        </Card>
        <Card className="cardgroup">
          <CardImg
            alt="Card image cap"
            src="https://images.unsplash.com/photo-1457327289196-f38b88d97147?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            top
            width="100%"
            height="400px"
          />
          <CardBody>
            <CardTitle tag="h5">
              Discover different location-based maps or create your own
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
};

export default Home;
