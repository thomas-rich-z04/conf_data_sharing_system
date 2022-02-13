import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

const Receiver = (props) => {
  return (
    <React.Fragment>
      <Card onClick={ ()=>{props.setReceiverId(props.receiver.id)} }>
        <CardBody>
          <CardTitle tag="h5">
            {props.receiver.name}
          </CardTitle>
          <CardText>
            Cards needed: ${props.receiver.amount}
          </CardText>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Receiver;