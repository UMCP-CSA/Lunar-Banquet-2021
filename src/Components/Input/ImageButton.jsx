import React from 'react';
import { Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const buttonStyles = makeStyles({
  buttonImage: {
    // rounded box
    borderRadius: '25px',
    // add shadow
    boxShadow: '6px 8px #545454',
    // bring component to front
    position: "relative",
    zIndex: 2,
}
});

function EnterButton(props) {
  const classes = buttonStyles();
  
  return(
    <Link href={props.link}>
      <img
        src={props.img}
        className={classes.buttonImage} 
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </Link>
  )
}

export default EnterButton;