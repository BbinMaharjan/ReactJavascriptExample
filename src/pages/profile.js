import React from "react";
import CardEmp from "../components/Card";
import "./profile.css";
const Profile = (props) => {
  return (
    <div className="profilepage">
      <CardEmp
        imagesource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfWLZPyg1xY4j7nc_MtVIkH29_BjP18PYYA&usqp=CAU"
        title="Bibin Maharjan"
        subtitle="Learing How to code"
      />
      <hr />
      <CardEmp
        imagesource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARk6d-8Ro7998IxxKSpa2c1XGm9fsFR007A&usqp=CAU"
        title="Leon Maharjan"
        subtitle="Learing How to code"
      />
    </div>
  );
};

export default Profile;
