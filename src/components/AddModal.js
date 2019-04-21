import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import DialogTitle from '@material-ui/core/DialogTitle';

class AddModal extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClose = () => {
        
        this.props.close();
    }


    render() {

        const { open, title, description } = this.props
        const buttonTitle= title.split(' ')[0];

        return (
            <div className='AddModalContainer'>
                <Dialog
                    open={open}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        {description}
                    </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="nombre"
                            label="Nombre"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="descripción"
                            label="Descripción"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="instrucciones"
                            label="Instrucciones"
                            type="text"
                            fullWidth
                            multiline
                            rows='8'
                        />

                        <TextField                       
                            margin="dense"
                            id="imagen"
                            label="Imagen"
                            type="file"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            {buttonTitle}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddModal;