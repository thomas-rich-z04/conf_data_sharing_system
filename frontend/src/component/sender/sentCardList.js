import React from 'react';

import CardStatus from './cardStatus';

const SentCardList = (props) => {
    return (
        <React.Fragment>
            <h4>Sent cards</h4>
            {props.sentCards && props.sentCards.map((card, index) => (
                <CardStatus key={index} card={card}/>
            ))}
        </React.Fragment>
    );
};

export default SentCardList;