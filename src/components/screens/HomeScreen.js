import React, { Component } from 'react';
import Recetas from '../Recetas';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import gql from 'graphql-tag'
import { Query } from "react-apollo";
import GraphQLService from './../../services/GraphQLService';
import BotonModal from './../BotonModal';

/*const GET_USUARIOS = gql`{usuarioGetAll{edges{node{uuid, nombre, apellido, login, password, email,alergiaSet{nombre}}}}}`;

const Usuarios = ({ onUsuarioSelected }) => (
  <Query query={GET_USUARIOS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        data.usuarioGetAll.edges.map(element => {
          return (
            <React.Fragment key={element.node.uuid}>
              <p>UUID: {element.node.uuid}</p>
              <p>NOMBRE: {element.node.nombre}</p>
              <p>APELLIDO: {element.node.apellido}</p>
              <p>EMAIL: {element.node.email}</p>
              <p>LOGIN: {element.node.login}</p>
              <p>PASSWORD: {element.node.password}</p>
            </React.Fragment>
          );
        })
      );
    }}
  </Query>
);*/

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount () {

    GraphQLService.getAll('usuarioGetAll{edges{node{uuid, nombre, apellido, login, password, email,alergiaSet{nombre}}}}')
      .then(response => console.log('LISTADO', response));
  }

  render() {

    const { recetasSugeridasPorIngredientes, recetasUsuario, recetasSugeridasUsuarios } = this.props;

    return (
      <div className='HomeContainer'>


        {recetasSugeridasPorIngredientes ?
          <div>
            <h1>Recetas sugeridas</h1>
            <Recetas recetas={recetasSugeridasPorIngredientes} />
          </div>
          :
          <div>
            <h1>¡Oops... No tienes ingredientes en tu inventario para recomendarte recetas!</h1>
            <button>Añade ingredientes a tu inventario</button>
          </div>
        }

        {recetasUsuario ?
          <div>
            <h1>Tus recetas</h1>
            <Recetas recetas={recetasUsuario} />
          </div>
          :
          <div>
            <h1>¡Oops... No tienes ninguna receta creada!</h1>
            <button>Crea una receta</button>
          </div>
        }

        {recetasSugeridasUsuarios ?
          <div>
            <h1>Recetas de otros usuarios</h1>
            <Recetas recetas={recetasSugeridasUsuarios} />
          </div>
          :
          <div>
            <h1>¡Oops... No hay recetas creadas por ningún usuario para recomendarte!</h1>
          </div>
        }

        <BotonModal
          searchModal={false}
          addModal={true}
          addModalTitle="Añadir Receta"
          addModalDescription='Rellena este formulario para guardar tus recetas'
        />

      </div>
    );
  }
}

export default Home;