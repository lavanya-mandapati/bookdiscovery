import React,{FormEvent, useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Menu from '@material-ui/core/Menu';
import ExploreTab, { Category } from '../../molecules/ExploreTab/index';
import { makeStyles } from "@material-ui/core";

type CustomButtonProps = {
  name:string,
  items?:Category[],
}

const StyledMenu = withStyles({
  paper: {
      border: '1px solid #d3d4d5',
  },
})((props:any) => (
  <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
      }}
      transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
      }}
      {...props}
  />
));


const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.57,
    letterSpacing: "normal"

  },

}));



const CustomButtonVal:React.FC<CustomButtonProps> =(props) =>{

  const classes = useStyles();

    const [expand,setExpand] = useState(true);
    const [anchorEl, setAnchorEl] = useState<any>(null);

      const handleClick = (event:MouseEvent|FormEvent) => {
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
        setExpand((prev)=>!prev);
      };

      const handleClose = () => {
        setAnchorEl(null);
        setExpand((prev)=>!prev);
      };


const items =[
  {
      category:"Communication",
      topics:["Aptitude","Vocabulary","Languages","Writing"]
  },
  {
      category:"Mathematics",
      topics:["Algebra","Calculus","Statistics","Trignometry"]
  }, {
      category:"Science",
      topics:["Biology","Chemistry","Medical Science","Physics"]
  },
  {
      category:"Social Science",
      topics:["Vocabulary","Writing","Languages","Aptitude"]
  },
  {
      category:"NOVELS",
      topics:["Literary","Fiction","Genre Fiction","Science Fiction"]
  }, {
      category:"Text Books",
      topics:["Higher Education","School Textbooks","Reference","Study guides"]
  },
  {
      category:"OTHERS",
      topics:["Computer","Development","Internet","Politics"]
  },
  {
      category:"Exam Preparation",
      topics:["Defence","Engineering Entrance","Medical entrance","UPSC Exams"]
  }

]

    return(
        <React.Fragment>
            <Button
                // aria-controls="customized-menu"
                // aria-haspopup="true"
                color="primary"
                onClick={handleClick}
                endIcon= { expand?<ExpandMoreIcon />:<ExpandLessIcon/>}
                className={classes.button}
            > {props.name}</Button>

            <StyledMenu
                //  id="customized-menu"
                 anchorEl={anchorEl}
                 keepMounted
                 open={Boolean(anchorEl)}
                 onClose={handleClose}>

                   <ExploreTab items={items} 
                   getExploreCategory={(category)=>console.log(category)} 
                   handleClose={()=>console.log("closed")}/>

              </StyledMenu>
        </React.Fragment>
    )
}







export default CustomButtonVal;