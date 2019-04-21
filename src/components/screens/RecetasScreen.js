import React, { Component } from 'react';
import Recetas from './../Recetas';
import BotonModal from '../BotonModal';

class RecetasScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        const { recetas } = this.props;

        return (
            <div className='RecetasScreenContainer'>
                <h1>Recetas</h1>
                <Recetas recetas={recetas} />
                
                <BotonModal
                    searchModal={true}
                    addModal={true}
                />
            </div>
        );
    }
}

export default RecetasScreen;
