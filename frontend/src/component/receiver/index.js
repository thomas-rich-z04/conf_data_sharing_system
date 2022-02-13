import React, { useState }from "react";

import {
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

import ReceivedCardList from "./receivedCardList";
import CardStatusRadio from "./cardStatusRadio";

const Receiver = () => {

  const [receivedCards, setReceivedCards] = useState([
    {
      number: "91020103010301",
      amount: 500
    },
    {
      number: "93333103010301",
      amount: 300
    }
  ]);

  const [amount, setAmount] = useState(0);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm="8">
            <ReceivedCardList receivedCards={receivedCards}/>
          </Col>
          <Col sm="4">
            <CardStatusRadio/>
          </Col>
        </Row>
        <Row>
          <Col sm="8">
            Amount needed: ${amount}
          </Col>
          <Col sm="4">
            <Button>
              Change
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Receiver;
