import React from 'react';

import {
    Row,
    Col
} from "reactstrap";

const Card = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col sm="6">
                    {props.card.number}
                </Col>
                <Col sm="1">
                    {props.card.pin}
                </Col>
                <Col sm="1">
                    ${props.card.amount}
                </Col>
                <Col sm="4">
                    {props.card.status}
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Card;