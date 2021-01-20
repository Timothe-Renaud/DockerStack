import React from "react";
import { Table } from "reactstrap";
import * as Constants from "../Constants";

export default class GitHubProjects extends React.Component {
  renderTableRows(obj) {
    return obj.map(x => {
      return (
        <tr>
          <td> {x.projectName} </td>
          <td>
            {" "}
            <a href={x.projectLink}> {x.projectLink} </a>{" "}
          </td>
          <td> {x.languages} </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table table-bordered table-dark">
        <Table bordered>
          <thead>
            <tr>
              <td className="col">Nom</td>
              <td className="col">Lien</td>
              <td className="col">Technologie</td>
            </tr>
          </thead>
          <tbody className="">
            {this.renderTableRows(Constants.GithubProjects)}
          </tbody>
        </Table>
      </div>
    );
  }
}
