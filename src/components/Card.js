import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const CardEmp = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="10%"
          height="50%"
          src={props.imagesource}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {props.subtitle}
          </CardSubtitle>
          <CardText>
            Some quick Card text to build on the card title and make up the bulk
            of the card's content.
          </CardText>
          <Button color="success" size="lg" block>
            Button
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardEmp;
