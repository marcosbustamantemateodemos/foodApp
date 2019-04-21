import React, { Component } from 'react';

class CalendarioScreen extends Component {
    
    constructor(props) {
        super(props);

        this.state = {};
    }

    render () {

        return(
            <div className='CalendarioScreenContainer'>
                <h1>Calendario</h1>
                <h3>Proximamente...</h3>
            </div>
        );
    }
}

export default CalendarioScreen;
