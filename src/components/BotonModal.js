import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddModal from './AddModal';
import purple from '@material-ui/core/colors/purple';

class BotonModal extends Component {

    constructor(props) {
        super(props);

        const { addModalTitle, addModalDescription } = this.props;

        this.state = {
            openAddEditModal: false,
            openSearchModal : false,
            addModalTitle, 
            addModalDescription
        };
    }

    handleOpenAddEditModal = () => {

        this.setState({ openAddEditModal: true });
    }

    handleCloseAddEditModal = () => {

        this.setState({ openAddEditModal: false });
    }

    handleOpenSearchModal = () => {

        this.setState({ openSearchModal: true });
    }

    handleCloseSearchModal = () => {

        this.setState({ openSearchModal: false });
    }

    componentDidMount () {

        const { addMOdal, searchModal } = this.props;
        if (!addMOdal && !searchModal) {
            console.log("COMPONENT BOTONMODAL SIN USAR");
        }
    }

    render() {

        const { searchModal, addModal } = this.props;
        const { openAddEditModal, addModalTitle, addModalDescription } = this.state;

        console.log(addModalTitle);

        return (
            <div className='BotonModalContainer'>
            
                <Tooltip title="Buscar" placement="left" aria-label="Add">
                    <Fab
                        color="primary"
                        style={ searchModal 
                            ?  searchModal && !addModal 
                                ? { position: 'fixed', left: 'auto', top: 'auto', margin: '0', right: 20, bottom: 20, backgroundColor: purple[500], color: purple[500] } 
                                : { position: 'fixed', left: 'auto', top: 'auto', margin: '0', right: 20, bottom: 90 }
                            : { opacity : 0 }
                        }
                    >
                        <SearchIcon />
                    </Fab>
                </Tooltip>

                {/* ToDo SearchModal */}

                <Tooltip title="Añadir" placement="left" aria-label="Add">
                    <Fab
                        color="secondary"
                        style={addModal 
                            ? { position: 'fixed', left: 'auto', top: 'auto', margin: '0', right: 20, bottom: 20, } 
                            : { opacity: 0 }
                        }
                        onClick={this.handleOpenAddEditModal}
                    >
                        <AddIcon />
                    </Fab>
                </Tooltip>

                {/* AddEditModal */}
                <AddModal
                    title={'addModalTitle'}
                    description={'addModalDescription'}
                    open={openAddEditModal}
                    close={this.handleCloseAddEditModal}
                />
            </div>
        );
    }
}

export default BotonModal;
