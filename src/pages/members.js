import React from "react";
import axios from "axios";
import { Card, CardText, CardBody, CardTitle, Button } from "reactstrap";
import Avater from "../components/Avatar";

import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:8080/gymapi";

const Members = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMembers();

    // fetch(`${BASE_URL}/admin/members`)
    //   .then((res) => res.json())
    //   .then((members) => setMembers(members));
  }, []);

  const getMembers = async () => {
    const res = await axios.get(`${BASE_URL}/admin/members`);
    console.log(JSON.stringify(res.data));
    setMembers(res.data);
  };
  return (
    <div className="container" style={{ marginTop: "65px" }}>
      <h1>All Member</h1>
      {members.map((member) => {
        return (
          <Card key={member._id} className="mt-3">
            <Avater name={member.name} style={{ marginleft: "10px" }} />
            <CardBody style={{ textAlign: "center" }}>
              <CardTitle tag="h5"> {member.name} </CardTitle>
              <CardText>
                {" "}
                <label tag="h2" style={{ marginRight: "5px" }}>
                  Email:
                </label>
                {member.email}
              </CardText>
              <CardText>
                {" "}
                <label tag="h2" style={{ marginRight: "5px" }}>
                  Address:
                </label>
                {member.address}
              </CardText>
            </CardBody>
            <Button color="primary">View Profile</Button>
          </Card>
        );
      })}
    </div>
  );
};

export default Members;
