import React from "react";
import {Button as MuiButton, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {COLORS} from '../../../theme/constants';


interface ButtonProps {
  name: string;
  onClick?: () => void;
  variant?: "contained"|"outlined";
  size?: string;
}
const useStyles = makeStyles({
  root: {
  width: 'auto',
  height: '38px',
  padding: '8px 21px 8px 23px',
  borderRadius: '4px',
  border: 'solid 1px COLORS.TRANSPARENT_0',
  textTransform: "none",
  color: COLORS.WHITE_50,
  backgroundColor: COLORS.PRIMARY_COLOR_500
}
});

const Button: React.FC<ButtonProps> = ({ 
    name,
    children,
    onClick, 
    variant="outlined"
  }) => { 
  const classes = useStyles();
  return (
    <MuiButton className={classes.root} variant={variant} onClick={()=> onClick}  >
     <Typography variant="body1" >{name}</Typography>
    </MuiButton>
  );
}

export default Button;