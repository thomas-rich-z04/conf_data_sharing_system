import React, { useState, useEffect } from "react";
import {
  Container
} from "reactstrap";

import ReceiverList from './receiverList';
import CardForm from './cardForm';
import SentCardList from './sentCardList'

import {
    getReceivers,
} from '../../action/senderAction'

const Sender = () => {

  const [receiverId, setReceiverId] = useState('')

  const [receivers, setReceivers] = useState([
    {
      id: "11111111",
      name: "Account A",
      amount: 5000
    },
    {
      id: "22222222",
      name: "Account B",
      amount: 2000
    }
  ]);

  const [sentCards, setSentCards] = useState([
    {
      number: "91020103010301",
      status: "Good balance"
    },
    {
      number: "93333103010301",
      status: "Done"
    }
  ]);

  useEffect(() => {
    // try {
    //   getReceivers().then((data) => {
    //     console.log("----data----");
    //     console.log(data);
    //     try {
    //       if (data.error) {
    //         // console.log("server error");
    //       } else {
    //         // setReceivers();
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   });
    // } catch (error) {
    //   console.log("error something");
    // }
  }, []);
  
  return (
    <React.Fragment>
      <Container>
        <h1>Sender's page</h1> <br />
        <ReceiverList receivers={receivers} setReceiverId={setReceiverId}/> <br />
        <CardForm receiverId={receiverId}/> <br />
        <SentCardList sentCards={sentCards}/> <br />
      </Container>
    </React.Fragment>
  );
};

export default Sender;
