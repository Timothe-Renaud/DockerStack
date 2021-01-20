import { Table } from "reactstrap";
import React from "react";
import * as Constants from "../Constants";
export default class ProfileDetails extends React.Component {
  render() {
    return (
      <Table borderless>
        <tbody>
          {/* <tr>
            <td className="lead name">
              <u className="lead name">Status</u>
            </td>
            <td className=" text-dark font-italic font-weight-bold">
              {Constants.TitrePro}
            </td>
          </tr> */}
          <tr>
            {/* <td className="name lead">
              <u className=" lead name">Mail</u>
            </td> */}
            <td className="text-dark font-italic font-weight-bold">
              {Constants.EmailAddress}
            </td>
          </tr>
          <tr>
            {/* <td className="name lead">
              <u className="lead name">Loc</u>
            </td> */}
            <td className="text-dark font-italic font-weight-bold">
              {Constants.Home}
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
