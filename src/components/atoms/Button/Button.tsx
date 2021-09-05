import React from "react";
import {Button as MuiButton, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
  root: {
    width: 'auto',
    height: '38px',
    padding: '8px 21px 8px 23px',
    borderRadius: '4px',
    border: 'solid 1px',
    textTransform: "none",
  }
}))
  
export type ButtonProps={
  name: string;
  onClick?: () => void;
  variant?: "contained"|"outlined";
  color?: "primary"|"secondary";
}

const Button: React.FC<ButtonProps> = ({ 
    name,
    children,
    onClick, 
    color,
    variant
  }) => { 
  const classes = useStyles();
  return (
    <MuiButton className={classes.root} variant={variant} color={color} onClick={onClick} >
     <Typography variant="body1" >{name}</Typography>
    </MuiButton>
  );
}

Button.defaultProps = {
  variant: "outlined",
 color: "primary",
};

export default Button;