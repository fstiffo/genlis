import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

class Home extends React.Component {
  render() {
    return (
      <>
        <Jumbotron>
          <h1 className="display-4">
            Generating Italian from Italian Sign Language glosses with GENLIS
          </h1>
        </Jumbotron>

        <h2 className="display-5">Abstract</h2>
        <p>
          The present work focuses on the automatic generation of a written text
          in Italian language starting from glosses of a fable in Italian Sign
          Language (LIS). After a detailed overview on LIS and Natural Language
          Generation, the reader is introduced to our experiment on generation
          and to the machine that made it possible, i.e. the GENLIS generator.
          We decided to generate text from a LIS version of the fable “The
          Tortoise and the Hare”, which was annotated manually. In order to
          achieve our goal, we converted glosses into Prolog strings to be fed
          to the generator. In this thesis, we present the generation mechanism,
          which is based on a set of algorithms that allow the generator to work
          properly. Furthermore, I compare the generated output with our target
          translation of the fable and identify some of its flaws. Finally, I
          specify the main problems encountered in the generation process. This
          analysis led us also to demonstrate that LIS is a true, complex
          language with specific characteristics and not some sort of gestural
          system with no linguistic status.
        </p>
      </>
    );
  }
}

export default Home;
