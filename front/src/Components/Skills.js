import React from "react";
import { Progress, Row, Col } from "reactstrap";
import * as Constants from "./../Constants";

export default class Skills extends React.Component {
  renderProgressOnSkills(skills) {
    return skills.map(element => {
      return (
        <Row key={element.language}>
          <Col xs={3}>{element.language}</Col>
          <Col xs={9}>
            <Progress value={element.progress}>{element.progress}</Progress>
          </Col>
        </Row>
      );
    });
  }

  renderFrameworks(fs) {
    return fs.map(element => {
      return (
        <Row key={element.language}>
          <Col xs={3}>{element.language}</Col>
          <Col xs={9}>{element.frameworks}</Col>
        </Row>
      );
    });
  }

  renderGeneric(arr) {
    return (
      <Row>
        <Col>{arr.join(", ").concat(".")}</Col>
      </Row>
    );
  }

  /* renderProgrammingSkills() {
    return this.renderProgressOnSkills(Constants.ProgrammingSkills);
  }
*/
  renderMarkUpSkills() {
    return this.renderProgressOnSkills(Constants.Citation);
  }

  render() {
    return (
      <div className="skills">
        <Row>
          <Col>
            <Row>
              <Col>
                <h2 className="text-center display-4"> Présentation </h2>
              </Col>
              <p className="text-center">
                {this.renderGeneric(Constants.Citation)}
                <br />
                {this.renderGeneric(Constants.Citation2)}
              </p>
              <Col>
                <h2 className="display-4"> Mes Compétences </h2>
              </Col>
            </Row>
            {this.renderGeneric(Constants.ProgrammingSkills)}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h2 className="Titles"> Soft Skills </h2>
              </Col>
            </Row>
            {this.renderGeneric(Constants.SoftSkills)}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h2 className="Titles"> Frameworks </h2>
              </Col>
            </Row>
            {this.renderFrameworks(Constants.Frameworks)}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h2 className="Titles"> Test-Frameworks </h2>
              </Col>
            </Row>
            {this.renderFrameworks(Constants.TestFrameworks)}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h2 className="Titles"> Base de données: </h2>
              </Col>
            </Row>
            {this.renderGeneric(Constants.Databases)}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h2 className="Titles"> ORM </h2>
              </Col>
            </Row>
            {this.renderGeneric(Constants.Caches)}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h3 className="Titles"> Tools </h3>
              </Col>
            </Row>
            {this.renderGeneric(Constants.Tools)}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h2 className="Titles"> IDE </h2>
              </Col>
            </Row>
            {this.renderGeneric(Constants.IDE)}
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <h2 className="Titles"> Explored Tech </h2>
              </Col>
            </Row>
            {this.renderGeneric(Constants.Tech)}
          </Col>
        </Row>
      </div>
    );
  }
}
