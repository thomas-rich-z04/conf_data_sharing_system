import React, { useState, useEffect } from 'react';

import {
    ButtonGroup,
    Button
} from "reactstrap";

const CardStatusRadio = (props) => {

    const onStatusChange = (event) => {
        props.statusChange(event.target.value);
    };

    return (
        <React.Fragment>
            <div onChange={onStatusChange}>
                <input type="radio" value="Correct Balance" name="status" 
                    checked={props.status === "Correct Balance"}
                /> Correct Balance <br/>
                <input type="radio" value="Wrong Balance" name="status" 
                    checked={props.status === "Wrong Balance"}
                /> Wrong Balance <br/>
                <input type="radio" value="Done" name="status" 
                    checked={props.status === "Done"}
                /> Done <br/>
                <input type="radio" value="Issue, all orders cancelled" name="status" 
                    checked={props.status === "Issue, all orders cancelled"}
                /> Issue, all orders cancelled <br/>
                <input type="radio" value="Issue, orders pending" name="status" 
                    checked={props.status === "Issue, orders pending"}
                /> Issue, orders pending <br/>
            </div>
        </React.Fragment>
    );
};

export default CardStatusRadio;