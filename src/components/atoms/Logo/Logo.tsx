import SvgIcon from '@material-ui/core/SvgIcon';
import React from "react";
import {SVG_PATH} from '../../../theme/constants';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../theme/theme';


interface Props { }

const useStyles = makeStyles({
  root: {
  width: '35px',
  height: '24px',
  objectFit: "contain",
  margin: theme.spacing(2)
}});


const Logo: React.FC<Props> =({})=>{
  const classes = useStyles();
    return (
      <SvgIcon className={classes.root} >
      <path d={SVG_PATH.LOGO} />
    </SvgIcon>
    );
  } 
  
export default Logo;