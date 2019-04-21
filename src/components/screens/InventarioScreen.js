import React, { Component } from 'react';
import EnhancedTable from './../EnhancedTable';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

class InventarioScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render () {

        return(
            <div className='InventarioScreen'>
                <h1>Inventario</h1>

                <Tooltip title="Añadir" placement="left" aria-label="Add">
                    <Fab 
                        color="secondary" 
                        style={{  position: 'fixed', left: 'auto', top: 'auto', margin: '0', right: 20, bottom: 20,}}
                        onClick={this.handleOpenRecetaModal}
                    >
                        <AddIcon />
                    </Fab>
                </Tooltip>

                <EnhancedTable></EnhancedTable>
            </div>
        );
    }
}

export default InventarioScreen;
