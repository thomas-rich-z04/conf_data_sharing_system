import React from 'react';

import Card from './card';

import {
    Row,
    Col
} from "reactstrap";

const ReceivedCardList = (props) => {
    return (
        <React.Fragment>
            {props.cards && props.cards.map((card, index) => (
                <Card key={index} card={card}/>
            ))}
        </React.Fragment>
    );
};

export default ReceivedCardList;