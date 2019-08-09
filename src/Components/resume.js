import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt="avatar"
                style={{ height: "200px" }}
                className="resAvatar"
              />
            </div>

            <h3 className="resName" style={{ paddingTop: "2em" }}>
              Christian B. Kautz-Scanavy
            </h3>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Team-oriented Web Developer with a background in digital marketing
              and customer acquisition, with Full-Stack Certification from the
              University of Richmond. Skilled in digital marketing tracking
              platforms, CRM and SAS implementation/configurations. A proven
              record of a superb work-ethic, stellar customer service and able
              to successfully collaborate with team members. Excellent ability
              in conveying complex technical information in an easy to
              understand manner.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Phone</h5>
            <p>(804) 357-1353</p>
            <h5>Email</h5>
            <p>chris.kautz@gmail.com</p>
            <h5>Website</h5>
            <p>chrisks.com</p>

        </Cell> 
        <h2>Skills</h2>

        <h4>Node.Js | Express | Sequelize | JavaScript | jQuery | React | GIT | GitHub | MongoDB | MySQL | Firebase | Handlebars | HTML | CSS | Bootstrap | Media Queries | APIs | Microsoft Suite | Heroku | Google Apps | Mongoose |Sequelize | Chartjs | Cloudinary | Quickbooks
</h4>

        <hr style={{ borderTop: "3px solid #791dc1" }} />

        <h2>Experience</h2>

          <Experience 
          startYear={}
          endYear={}
          jobName=""
          jobDescription=""
          />
          <Experience 
          startYear={}
          endYear={}
          jobName=""
          jobDescription=""
          />

        <Experience 
          startYear={}
          endYear={}
          jobName=""
          jobDescription=""
          />
          <hr style={{ borderTop: "3px solid #791dc1" }} />


       <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2019}
              schoolName="The University of Richmond"
              degree="Full Stack Web Development | Coding Certificate"
              schoolDescription="An intensive boot camp program focused on gaining 
              web development skills in HTML, CSS, JQuery, JavaScript, MySQL Databases, 
              MongoDB, Express, NodeJS and React. 
              "
            />

            <Education
              startYear={1996}
              endYear={2000}
              schoolName="Hampden-Sydney College"
              degree="Bachelor of Arts in History and French"
              schoolDescription="An intensive boot camp program focused on gaining 
              web development skills in HTML, CSS, JQuery, JavaScript, MySQL Databases, 
              MongoDB, Express, NodeJS and React. 
              "
            />
            <hr style={{ borderTop: "3px solid #791dc1" }} />

            

          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
