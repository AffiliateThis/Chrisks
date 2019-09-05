import React, { Component } from "react";
import {
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent,
  Textfield
} from "react-mdl";


class ContactForm extends Component {
  render() {
    return (
      <Grid>
        <div className="ContactForm">
          <Cell col={6}>
            <h6 style={{ marginTop: "0px" }}>
              {this.props.formField}
              
            </h6>
          </Cell>
        </div>
      </Grid>
    );
  }
}

export default ContactForm;
