import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

class RecetaCard extends Component {
  constructor(props) {
    super(props);

    const { receta } = this.props

    this.state = {
        receta,
        expanded: false,
        anchorEl: null,
        open: false
    };
  }

  handleExpandClick = () => {

    const booleano = this.state.expanded;
    this.setState({ expanded: !booleano});
  }

  handleOpenMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { receta, anchorEl } = this.state;
    const primeraLetra = receta.titulo[0];
    const open = Boolean(anchorEl);

    return (
      <div className="RecetaCardContainer" style={{ display: 'inline-block', margin: 5 }}>
        <Card style={{ maxWidth: 400 }}>

          <CardHeader
            avatar={<Avatar aria-label="Recipe" styles={{ backgroundColor: 'red' }}>{primeraLetra}</Avatar>}
            title={receta.titulo}
            subheader="September 14, 2016"
            action={
              <IconButton onClick={this.handleOpenMenu}>
                <MoreVertIcon>
                  <Menu 
                    id="fade-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    TransitionComponent={Fade}>
                      <MenuItem onClick={this.handleCloseMenu}>Profile</MenuItem>
                      <MenuItem onClick={this.handleCloseMenu}>Profile</MenuItem>
                      <MenuItem onClick={this.handleCloseMenu}>Profile</MenuItem>
                      <MenuItem onClick={this.handleCloseMenu}>Profile</MenuItem>
                  </Menu>
                </MoreVertIcon>
              </IconButton>
            }
          />
          <CardMedia style= {{ height: '0', paddingTop: '50%' }}
            image={receta.foto}
            title={receta.titulo} 
          />

          <CardContent>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>

          <CardActions disableActionSpacing styles={{ display: 'flex' }}>
            <IconButton 
                aria-label="Like"
                onClick={() => {console.log('LIKE');}}
            >
              <FavoriteIcon />
            </IconButton>

            <IconButton 
                aria-label="Share"
                onClick={() => {console.log('SHARE');}}    
            >
              <ShareIcon />
            </IconButton>

            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>

          </CardActions>

          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>

              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>

            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default RecetaCard;
