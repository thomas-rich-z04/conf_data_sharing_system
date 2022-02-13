import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";

import Receiver from './receiver';

const ReceiverList = (props) => {
  return (
    <React.Fragment>
        <Row>
          <Col sm="6">
            <h4>Accounts:</h4>
            {props.receivers && props.receivers.map((receiver, index) => (
              <Receiver key={index} receiver={receiver} receiverClick={props.receiverClick}/>
            ))}
          </Col>
        </Row>
      </React.Fragment>
  );
};

export default ReceiverList;
