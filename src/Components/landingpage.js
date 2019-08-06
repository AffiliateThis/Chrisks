import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
// import images from "./images";
// import imageLoader from './images';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* add image import function */}
            <img
              src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
              alt="avatar"
              className="avatar-img"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
