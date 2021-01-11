import React from 'react';
import { Grid, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const buttonStyles = makeStyles({
  buttonImage: {
    borderRadius: '25px',
    boxShadow: '6px 8px #545454',
}
});

function EnterButton(props) {
  const classes = buttonStyles();
  
  return(
      <Grid 
        container
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Link href={props.link}>
            <img 
              src={props.img}
              className={classes.buttonImage} 
              alt={props.alt} 
              width={props.width}
              height={props.height}/>
          </Link>
        </Grid>
      </Grid>
      
  )
}

export default EnterButton;