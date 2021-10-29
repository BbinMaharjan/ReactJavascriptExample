import React from "react";

import { Table } from "reactstrap";

const Member = (props) => {
  return (
    <>
      <div className="container " style={{ margintop: "100px" }}>
        <h1> All Member</h1>
        <Table striped bordered style={{ marginTop: "10px" }}>
          <thead
            style={{
              background: "green",
              color: "ghostwhite",
              textAlign: "center",
            }}
          >
            <tr>
              <th>Id</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody
            style={{
              textAlign: "center",
            }}
          >
            {/* {members.map((members) => {
              return (
                <tr key={members._id}>
                  <th scope="row">{members.membershipNo}</th>
                  <td>
                    {" "}
                    <Avatar src={members.avatar} size="40" round={true} />
                  </td>
                  <td>
                    {members.first_name} {members.last_name}
                  </td>
                  <td>{members.email}</td>
                </tr>
              );
            })}{" "} */}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Member;
