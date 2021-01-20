/* import { Table } from 'reactstrap';
import * as Constants from '../Constants'; */
import React from "react";
export default class OSContrib extends React.Component {
  renderTableRows(obj) {
    return obj.map(x => {
      return (
        <tr>
          <th> <a href={x.repoLink}> {x.repoName} </a> </th>
          <th> <a href={x.pullRequest}> {x.pullRequest} </a></th>
          <th> {x.status} </th>
        </tr>
      );
    })
  }
  render() {
    return (
    <div className="osContrib">
      <h2 className="display-3">Mon CV :</h2>
      <p>Ici vous pourrez trouver un exemplaire de mon curriculum vitæ si mon profil vous intéresse.</p>
    </div>)
  }
}