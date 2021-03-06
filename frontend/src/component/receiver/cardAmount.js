import React from 'react';

import {
    Row,
    Col
} from "reactstrap";

const CardAmount = (props) => {
    return (
        <React.Fragment>
            <Row onClick={ ()=>{props.cardAmountClick(props.card._id)} }>
                <Col sm="6">
                    {props.card.number}
                </Col>
                <Col sm="6">
                    {props.card.amount}
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CardAmount;