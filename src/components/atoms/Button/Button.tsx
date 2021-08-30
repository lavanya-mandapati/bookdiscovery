import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


interface Props {
  name: string;
  click?: () => void;
  variant?: "contained"|"outlined";
}
const useStyles = makeStyles({
  root: {
  width: 'auto',
  height: '38px',
  padding: '8px 21px 8px 23px',
  borderRadius: '4px',
  border: 'solid 1px rgba(255, 255, 255, 0)',
  textTransform: "none",
}});


const CustomButton: React.FC<Props> = ({ 
    name,
    children,
    click, 
    variant="outlined"
  }) => { 
  const classes = useStyles();
  return (
    <Button className={classes.root} variant={variant} color="primary" onClick={()=> click} >
     {name}
    </Button>
  );
}

export default CustomButton;