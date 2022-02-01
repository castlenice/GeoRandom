import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
    </>
  );
};

export default Home;
