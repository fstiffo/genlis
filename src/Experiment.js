import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";

class MyCarousel extends React.Component {
  render() {
    return (
      <>
        <h3>{this.props.id}</h3>
      </>
    );
  }
}

const Experiment = () => {
  let { id } = useParams();
  console.log(id);
  return <MyCarousel id={id} />;
};

export default Experiment;
