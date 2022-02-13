import React from 'react';

import {
    ButtonGroup,
    Button
} from "reactstrap";

const CardStatusRadio = (props) => {
    return (
        <React.Fragment>
             {/* onChange={this.onChangeValue} */}
            <div>
                <br/><br/>
                <input type="radio" value="Correct Balance" name="status" /> Correct Balance <br/>
                <input type="radio" value="Wrong Balance" name="status" /> Wrong Balance <br/>
                <input type="radio" value="Done" name="status" /> Done <br/>
                <input type="radio" value="Issue, all orders cancelled" name="status" /> Issue, all orders cancelled <br/>
                <input type="radio" value="Issue, orders pending" name="status" /> Issue, orders pending <br/>
            </div>
        </React.Fragment>
    );
};

export default CardStatusRadio;