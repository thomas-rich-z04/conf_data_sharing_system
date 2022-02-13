import React from 'react';

import {
    Row,
    Col
} from "reactstrap";

const CardStatus = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col sm="8">
                    {props.card.number}
                </Col>
                <Col sm="4">
                    {props.card.status}
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CardStatus;