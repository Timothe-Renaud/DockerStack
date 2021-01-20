import React from "react";
import { Row, Col } from "reactstrap";
import * as Constants from "./../Constants";

export default class Education extends React.Component {
  renderEducation(obj) {
    return (
      <Row>
        <Col>
          <Row>
            <Col>
              <h3>
                <u>{obj.college}</u>
              </h3>
            </Col>
            <Col>
              <h4> {obj.role} </h4>
            </Col>
          </Row>
          <Row>
            <Col>{obj.date}</Col>
            <Col>
              <h5>{obj.desc}</h5>
              <a href={obj.Link} className="btn btn-info">
                {obj.descriptionBtn}
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }

  render() {
    return (
      <div className="education">
        {Constants.EducationObject.map(x => this.renderEducation(x))}
      </div>
    );
  }
}
