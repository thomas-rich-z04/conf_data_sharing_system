import React from 'react';

import {
    Row,
    Col
} from "reactstrap";

import CardList from "./cardList";

const ReceiverWithCard = (props) => {
    return (
        <React.Fragment>
            <h4>{props.receiverWithCard.user[0].name} Cards:</h4>
            {props.receiverWithCard.cards && (
              <CardList cards={props.receiverWithCard.cards}/>
            )}
        </React.Fragment>
    );
};

export default ReceiverWithCard;