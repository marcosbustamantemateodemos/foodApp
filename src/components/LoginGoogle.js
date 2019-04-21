import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';

class LoginGoogle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      perfil: null,
      opacity: 0
    };
  }

  responseGoogle = (response, error) => {
    if (response) {
      const { profileObj } = response;
      const {
        givenName: nombre,
        familyName: apellido,
        email,
        imageUrl: foto
      } = profileObj;

      this.setState({ perfil: { nombre, apellido, email, foto }, opacity: 1 });
    }
  };

  onClose = () => {
    
    this.setState({ opacity: 0 });
  };

  render() {
    const { perfil, opacity } = this.state;
    const { clientId } = this.props;

    return (
      <div className="LoginGoogleContainer">
        <GoogleLogin
          clientId={clientId}
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />

        {perfil ? (
          <div>
            <p>{perfil.nombre}</p>
            <p>{perfil.apellido}</p>
            <p>{perfil.email}</p>
            <img src={perfil.foto} alt="foto de perfil" />
          </div>
        ) : null}

        <SnackbarContent
          style={{ opacity: opacity, position: "fixed", backgroundColor: green[600] }}
          aria-describedby="client-snackbar"
          message={
            <span id="client-snackbar">
              <CheckCircleIcon />
              ¡Te has registrado!
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.onClose}
              style={{  }}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

export default LoginGoogle;
