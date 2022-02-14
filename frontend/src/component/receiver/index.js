import React, { useState, useEffect }from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Input
} from "reactstrap";

import ReceivedCardList from "./receivedCardList";
import CardStatusRadio from "./cardStatusRadio";

import {
  getReceiver,
  getCards,
  getCard,
  updateAmount,
  updateCardStatus,
} from '../../action/receiverAction'

const Receiver = () => {

  const [receiver, setReceiver] = useState({});
  const [receivedCards, setReceivedCards] = useState([]);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState("");
  const [cardId, setCardId] = useState("");

  const amountChange = (event) => {
    setAmount(event.target.value);
  }

  const statusChange = (value) => {
    setStatus(value);
    let payload = {};
    payload.card_id = cardId;
    payload.status = value;

    try {
      updateCardStatus(payload).then((data) => {
        try {
          if (data.error) {
            console.log("server error");
          } else {
            console.log(data.result);
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("error something");
    }
  }

  const changeClick = () => {
    let payload = {};
    let user = JSON.parse(localStorage.getItem("user"));
    payload.receiver_id = user._id;
    payload.amount = amount;
    try {
      updateAmount(payload).then((data) => {
        try {
          if (data.error) {
            console.log("server error");
          } else {
            console.log(data.result);
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("error something");
    }
  }

  const cardAmountClick = (card_id) => {
    setCardId(card_id);

    let payload = {};
    let user = JSON.parse(localStorage.getItem("user"));
    payload.card_id = card_id;
    
    try {
      getCard(payload).then((data) => {
        try {
          if (data.error) {
            console.log("server error");
          } else {
            setStatus(data.card.status);
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("error something");
    }
  }

  useEffect(() => {
    let payload = {};
    let user = JSON.parse(localStorage.getItem("user"));
    payload.receiver_id = user._id;

    try {
      getReceiver(payload).then((data) => {
        try {
          if (data.error) {
            console.log("server error");
          } else {
            setReceiver(data.receiver);
            setAmount(data.receiver.amount);
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("error something");
    }

    try {
      getCards(payload).then((data) => {
        try {
          if (data.error) {
            console.log("server error");
          } else {
            setReceivedCards(data.cards);
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("error something");
    }
  }, []);

  return (
    <React.Fragment>
      <Container>
        <h1>Received cards</h1> <br />
        <Row>
          <Col sm="8">
            {receivedCards && (
              <ReceivedCardList receivedCards={receivedCards} cardAmountClick={cardAmountClick}/>
            )}
          </Col>
          <Col sm="4">
            {cardId != "" && (
              <CardStatusRadio statusChange={statusChange} status={status}/>
            )}
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm="8">
            Amount needed: ${amount}
            <Input 
              value={amount}
              onChange={amountChange}
              placeholder="Amount"
            />
          </Col>
          <Col sm="4">
            <br />
            <Button
              onClick={changeClick}
            >
              Change
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Receiver;
