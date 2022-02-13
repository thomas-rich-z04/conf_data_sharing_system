import React from 'react';

import CardAmount from './cardAmount';

const ReceivedCardList = (props) => {
    return (
        <React.Fragment>
            <h4>Received cards</h4>
            {props.receivedCards && props.receivedCards.map((card, index) => (
                <CardAmount key={index} card={card}/>
            ))}
        </React.Fragment>
    );
};

export default ReceivedCardList;