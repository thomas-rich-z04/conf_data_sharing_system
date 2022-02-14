import React, { useState, useEffect } from "react";

import ReceiverWithCardList from "./receiverWithCardList";

import {
  Container,
  Row,
  Col
} from "reactstrap";

import {
  getReceiversWithCards,
} from '../../action/adminAction'

const Admin = () => {
  
  const [receiversWithCards, setReceiversWithCards] = useState([])
  
  useEffect(() => {
    try {
      getReceiversWithCards().then((data) => {
        try {
          if (data.error) {
            console.log("server error");
          } else {
            setReceiversWithCards(data.receivers);
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
        <h1>Admin page</h1> <br />
        <Row>
          <Col sm="12">
            <ReceiverWithCardList receiversWithCards={receiversWithCards} />
          </Col>
        </Row>
        <br />
        <Row>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Admin;
