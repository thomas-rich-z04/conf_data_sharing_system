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
      message: "",
      error: "",
  });
    
  const { number, pin, amount, message, error } = values;

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const onSendClick = () => {
    setValues({ ...values, error: false });
    let payload = values;
    let user = JSON.parse(localStorage.getItem("user"));
    payload.sender_id = user._id;
    payload.receiver_id = props.receiverId;
    try {
        uploadCard(payload).then((data) => {
          try {
            if (data.error) {
              setValues({ ...values, error: data.error });
              console.log("server error");
            } else {
              console.log(data.savedCard);
              setValues({
                ...values,
                number: "",
                pin: "",
                amount: 0,
                message: data.message,
                error: "",
              });
            }
          } catch (err) {
            console.log(err);
          }
        });
      } catch (error) {
        console.log("error something");
      }
  }

  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";

  const showMessage = () =>
    message ? <div className="alert alert-info">{message}</div> : "";

  return (
    <React.Fragment>
        <h4>Upload card</h4>
        {showError()}
        {showMessage()}
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