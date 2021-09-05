import React from "react";
import {Button as MuiButton, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {COLORS} from '../../../theme/constants';

const useStyles = makeStyles( (theme) => ({
  root: {
    width: 'auto',
    height: '38px',
    padding: theme.spacing(1,3),
    borderRadius: '4px',
    border: 'solid 1px',
    borderColor: COLORS.TRANSPARENT_0,
    textTransform: "none",
  }
}))
  
export type ButtonProps={
  name: string;
  onClick: () => React.MouseEvent<HTMLElement>;
  variant?: "contained"|"outlined"|"text";
  color?: "primary"|"secondary"|"inherit"|"default";
}

const Button: React.FC<ButtonProps> = ({ 
    name,
    onClick, 
    color,
    children,
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
  variant: "contained",
};

export default Button;