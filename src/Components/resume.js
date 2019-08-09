import React, { Component } from "react";
import { Grid, Cell, List, ListItem } from "react-mdl";
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
            <p className="brandInfo">
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

          <Cell className="resume-right-col" col={8}>
            <h2>Skills</h2>

            <h5>
              Node.Js | Express | Sequelize | JavaScript | jQuery | React | GIT
              | GitHub | MongoDB | MySQL | Firebase | Handlebars | HTML | CSS |
              Bootstrap | Media Queries | APIs | Microsoft Suite | Heroku |
              Google Apps | Mongoose |Sequelize | Chartjs | Cloudinary |
              Quickbooks
            </h5>

            <hr style={{ borderTop: "3px solid #791dc1" }} />

            <h3>Experience</h3>

            <Experience
              className="description"
              startYear={2018}
              endYear={2019}
              jobName="-One Crooked Tree | Co-founder/COO "
              jobDescription="Successfully managed the day to day operations of a digital agency including clients’ projects and 
          the operation of multiple SAS’s. Additionally, utilized Google Analytics and Tag Manager implementation/analysis for client 
          base."
              listItem=" - Effectively managed the Email Newsletter generation and deployment for publishers while tracking QA and pixel implementation. "
              listItem2="- Usage and implementation providing better tracking potential of customers and client-management."
              listItem3="- Successfully managed project site development build-outs for clients."
              listItem4="- Management and execution of SEO campaigns for clients providing them with more customer acquisitions and opportunity.  Organic traffic to our client's sites doubled within two months."
              listItem5="- Affiliate Program Launch Strategy and Management which significantly increased the number of sales for our clients."
            />

            <Experience
              className="description"
              startYear={2017}
              endYear={2019}
              jobName="AC Nutryst | Co-founder/COO"
              jobDescription="Effectively hired and trained contractors to fulfill internal initiatives;  while also configuring tracking platforms to proficiently track metrics and profits. Utilized Project Management to get assets built for clients and internal project site build-outs providing a more streamlined and efficient end product. Effective coordination of projects for clients getting their product or service online and in front of more potential consumers. Increased client revenue streams by up to 300%.   
          "
            />

            <Experience
              className="description"
              startYear={2014}
              endYear={2017}
              jobName="Affiliate Crossing | Co-founder/COO"
              jobDescription="Successfully managed staff and workflows and developed processes and procedures that improved efficiency. Configuring SAS as needed for cost savings and to accomplish more tasks. Increased our clients' revenues by approximately 300%."
            />

            <hr style={{ borderTop: "3px solid #791dc1" }} />

            <h3>Education</h3>
            <Education
              className="schoolInfo"
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
              className="schoolInfo"
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
