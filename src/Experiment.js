import React from "react";
import { useParams } from "react-router-dom";
import VideoRow from "./VideoRow";
import data from "./data";

class DiscourseUnit extends React.Component {
  render() {
    console.log(typeof this.props.id);
    let id = this.props.id;
    let du = data.find(e => e.id === id);
    return (
      <>
        <h3>Discourse Unit {id}</h3>
        <VideoRow texts={du.texts} youtube={du.youtube} />
      </>
    );
  }
}

const Experiment = () => {
  let { id } = useParams();
  let safeId = typeof id === "undefined" ? "20" : id;
  return <DiscourseUnit id={safeId} />;
};

export default Experiment;
