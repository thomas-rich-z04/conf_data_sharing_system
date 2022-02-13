import React from 'react';

import CardAmount from './cardAmount';

import {
    Row,
    Col
} from "reactstrap";

const ReceivedCardList = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col sm="6">
                    Card
                </Col>
                <Col sm="6">
                    Amount
                </Col>
            </Row>
            {props.receivedCards && props.receivedCards.map((card, index) => (
                <CardAmount key={index} card={card} cardAmountClick={props.cardAmountClick}/>
            ))}
        </React.Fragment>
    );
};

export default ReceivedCardList;