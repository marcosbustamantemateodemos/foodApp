import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Home from "@material-ui/icons/Home";
import Restaurant from "@material-ui/icons/Restaurant";
import ShareIcon from "@material-ui/icons/Share";
import People from "@material-ui/icons/People";
import Settings from "@material-ui/icons/Settings";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Assignment from "@material-ui/icons/Assignment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  RECETAS_SUGERIDAS_POR_INGREDIENTES,
  RECETAS_USUARIO,
  RECETAS_SUGERIDAS_USUARIOS
} from "./../constants/data";
import RecetasScreen from "./screens/RecetasScreen";
import HomeScreen from "./screens/HomeScreen";

import SocialScreen from "./screens/SocialScreen";
import CalendarioScreen from "./screens/CalendarioScreen";
import InventarioScreen from "./screens/InventarioScreen";
import AjustesScreen from "./screens/AjustesScreen";

const recetasSugeridasPorIngredientes = RECETAS_SUGERIDAS_POR_INGREDIENTES;
const recetasUsuario = RECETAS_USUARIO;
const recetasSugeridasUsuarios = RECETAS_SUGERIDAS_USUARIOS;

const url = '/comidasApp/';

const routes = [
  {
    path: url,
    exact: true,
    main: () => (
      <HomeScreen
        recetasSugeridasPorIngredientes={recetasSugeridasPorIngredientes}
        recetasUsuario={recetasUsuario}
        recetasSugeridasUsuarios={recetasSugeridasUsuarios}
      />
    )
  },
  {
    path: url + 'recetas',
    main: () => <RecetasScreen recetas={recetasUsuario} />
  },
  {
    path: url + 'social',
    main: () => <SocialScreen></SocialScreen>
  },
  {
    path: url + 'calendario',
    main: () => <CalendarioScreen></CalendarioScreen>
  },
  {
    path: url + 'inventario',
    main: () => <InventarioScreen></InventarioScreen>
  },
  {
    path: url + 'ajustes',
    main: () => <AjustesScreen></AjustesScreen>
  }
];

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handlingDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <Router>
        <div className="NavBarContainer" onClick={() => {
          if (this.state.open)
            this.handlingDrawer();
        }}>
          <AppBar color="secondary" position="fixed">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={this.handlingDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Typography styles={{ flexGrow: 1 }} variant="h5" color="inherit">
                Comidas App
              </Typography>

            </Toolbar>
          </AppBar>

          <SwipeableDrawer 
            variant="persistent" 
            anchor="left" 
            open={this.state.open} 
            onOpen={() => {}} 
            onClose={() => {}}
            swipeAreaWidth={400}
            hysteresis={0.8}
            disableDiscovery={true}
          >
            <div>
              <IconButton>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />

            <List>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircle />
                </ListItemIcon>
                <ListItemText primary={"Perfil"} />
              </ListItem>
            </List>

            <Divider />
            <List>
              <Link to={url} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary={"Inicio"} />
                </ListItem>
              </Link>

              <Link to={url + "recetas"} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <Restaurant />
                  </ListItemIcon>
                  <ListItemText primary={"Recetas"} />
                </ListItem>
              </Link>

              <Link to={url + "inventario"} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <Assignment />
                  </ListItemIcon>
                  <ListItemText primary={"Inventario"} />
                </ListItem>
              </Link>

              <Link to={url + "calendario"} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <CalendarToday />
                  </ListItemIcon>
                  <ListItemText primary={"Calendario"} />
                </ListItem>
              </Link>

              <Link to={url + "social"} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <People />
                  </ListItemIcon>
                  <ListItemText primary={"Social"} />
                </ListItem>
              </Link>

            </List>
            <Divider />
            <List>
              <Link to={url + "ajustes"} style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary={"Ajustes"} />
                </ListItem>
              </Link>

              <ListItem button>
                <ListItemIcon>
                  <ShareIcon />
                </ListItemIcon>
                <ListItemText primary={"Compartir"} />
              </ListItem>
            </List>
          </SwipeableDrawer>

          <br />
          <br />
          <br />
          <br />

          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default Navbar;
