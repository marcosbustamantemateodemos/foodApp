import React, { Component } from "react";
import RecetaCard from "./RecetaCard";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class RecetasSugeridas extends Component {
  constructor(props) {
    super(props);

    const { recetas } = this.props;

    this.state = {
      recetas,
      expanded: true
    };
  }

  handleExpandClick = () => {

    const booleano = this.state.expanded;
    this.setState({ expanded: !booleano});
  }

  render() {
    const { recetas } = this.state;

    return (
      <div className="RecetasSugeridasContainer">

        <IconButton
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton> 

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            {recetas.map(element => {
              return (<RecetaCard key={element.titulo} receta={element} />);
            })}
        </Collapse>
      </div>
    );
  }
}

export default RecetasSugeridas;
