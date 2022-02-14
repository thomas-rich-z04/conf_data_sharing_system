import React from 'react';

import ReceiverWithCard from './receiverWithCard';

import {
    Row,
    Col
} from "reactstrap";

const ReceiverWithCardList = (props) => {
    return (
        <React.Fragment>
            {props.receiversWithCards && props.receiversWithCards.map((receiverWithCard, index) => (
                <ReceiverWithCard key={index} receiverWithCard={receiverWithCard}/>
            ))}
        </React.Fragment>
    );
};

export default ReceiverWithCardList;