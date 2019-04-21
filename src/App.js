import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { ApolloProvider } from 'react-apollo'
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-client-preset'

// eslint-disable-next-line no-lone-blocks
{
/* 
  import HomeScreen from './components/screens/HomeScreen';
  import RecetasScreen from "./components/screens/RecetasScreen";
  import LoginGoogle from './components/LoginGoogle';
  import { CLIENT_ID } from './constants/google'; 

  const recetasSugeridasPorIngredientes = RECETAS_SUGERIDAS_POR_INGREDIENTES;
  const recetasUsuario = RECETAS_USUARIO;
  const recetasSugeridasUsuarios = RECETAS_SUGERIDAS_USUARIOS;

  const Home = () => <HomeScreen recetasSugeridasPorIngredientes={recetasSugeridasPorIngredientes} recetasUsuario={recetasUsuario} recetasSugeridasUsuarios={recetasSugeridasUsuarios}> </HomeScreen>
  const Recetas = () => <RecetasScreen recetas={recetasUsuario}></RecetasScreen>


*/
}

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
})


class App extends Component {
  constructor() {
    super();

    this.state = { };
  }  

  componentDidMount () {

    /*RecetaService.get('http://localhost:8000/recetas').then(response => {

      console.log('Response', response);
    });*/
  }

  render() {


    return (
      <ApolloProvider client={client}>
          <div className="App" styles={{ flexGrow: 1 }}>
              <Navbar></Navbar>         
            {
              /* <LoginGoogle clientId={CLIENT_ID}></LoginGoogle> */
            }
          </div>
      </ApolloProvider>
    );
  }
}

export default App;
