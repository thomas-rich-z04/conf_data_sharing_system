import React, { useState, useEffect } from "react";
import {
    FormGroup,
    Label,
    Input,
    Row,
    Col,
    Button
} from "reactstrap";

import {
    uploadCard,
} from "../../action/senderAction"

const CardForm = (props) => {
    
  const [values, setValues] = useState({
      number: "",
      pin: "",
      amount: 0,
  });
    
  const { number, pin, amount } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSendClick = () => {
    let payload = values;
    let user = JSON.parse(localStorage.getItem("user"));
    payload.sender_id = user._id;
    payload.receiver_id = props.receiverId;
    try {
        uploadCard(payload).then((data) => {
          try {
            if (data.error) {
              console.log("server error");
            } else {
              console.log(data.savedCard);
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
        <h4>Upload card</h4>
        <Row>
            <Col sm="4">
                <Label>Card Number</Label>
                <Input 
                    value={number}
                    onChange={handleChange("number")}
                    placeholder="Card number"
                />
            </Col>
            <Col sm="2">
                <Label>PIN</Label>
                <Input 
                    value={pin}
                    onChange={handleChange("pin")}
                    placeholder="PIN"
                />
            </Col>
            <Col sm="2">
                <Label>Amount</Label>
                <Input 
                    type="number"
                    value={amount}
                    onChange={handleChange("amount")}
                    placeholder="Amount"
                />
            </Col>
            <Col sm="2">
                <br />
                <Button onClick={onSendClick}>
                    Send
                </Button>
            </Col>
        </Row>
    </React.Fragment>
  );
};

export default CardForm;