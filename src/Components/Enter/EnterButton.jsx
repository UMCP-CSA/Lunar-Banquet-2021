import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const buttonStyles = makeStyles({
  enterButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: '#F505050',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px #808080',
    display: 'flex',
    justifyContent: 'center',
  }
});

function EnterButton(props) {
  const classes = buttonStyles();
  return(
    <div>
      <Button 
        variant='contained' href={props.link} classes={{enterButton: classes.enterButton}}>
        {props.text}
      </Button>
    </div>
  )
}


export default EnterButton;