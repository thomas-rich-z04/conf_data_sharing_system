import React, { useState, useEffect } from "react";
import {
  Container
} from "reactstrap";

import ReceiverList from './receiverList';
import CardForm from './cardForm';
import SentCardList from './sentCardList'

import {
    getReceivers,
    getCards,
} from '../../action/senderAction'

const Sender = () => {

  const [receiverId, setReceiverId] = useState('')
  const [receivers, setReceivers] = useState([]);
  const [sentCards, setSentCards] = useState([]);

  useEffect(() => {
    try {
      getReceivers().then((data) => {
        try {
          if (data.error) {
            console.log("server error");
          } else {
            setReceivers(data.receivers);
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("error something");
    }
  }, []);

  const receiverClick = (receiver_id) => {
    setReceiverId(receiver_id);
    
    let payload = {};
    let user = JSON.parse(localStorage.getItem("user"));
    payload.sender_id = user._id;
    payload.receiver_id = receiver_id;

    try {
      getCards(payload).then((data) => {
        try {
          if (data.error) {
            console.log("server error");
          } else {
            setSentCards(data.cards);
          }
        } catch (err) {
          console.log(err);
        }
      });
    } catch (error) {
      console.log("error something");
    }
  }
  
  return (
    <React.Fragment>
      <Container>
        <h1>Sender's page</h1> <br />
        <ReceiverList receivers={receivers} receiverClick={receiverClick}/> <br />
        <CardForm receiverId={receiverId}/> <br />
        <SentCardList sentCards={sentCards}/> <br />
      </Container>
    </React.Fragment>
  );
};

export default Sender;
