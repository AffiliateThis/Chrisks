import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Iframe from "react-iframe";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            
          </div>
          <h2 style={{paddingTop: '2em'}}>Christian B. Kautz-Scanavy</h2>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            Right Side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
