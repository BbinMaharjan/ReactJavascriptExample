import React from "react";

import { Table } from "reactstrap";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { getAllMembers } from "../store/actions/members";

const Member = (props) => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.membersState.members);
  //console.log({ members });
  React.useEffect(() => {
    dispatch(getAllMembers());
  });

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
            {members.map((members) => {
              return (
                <tr key={members.id}>
                  <th scope="row">{members.id}</th>
                  <td>
                    {" "}
                    <Avatar src={members.avatar} round size="100" />{" "}
                  </td>
                  <td>
                    {members.first_name} {members.last_name}
                  </td>
                  <td>{members.email}</td>
                </tr>
              );
            })}{" "}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Member;
