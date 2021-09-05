import React, { HTMLAttributes } from "react"
import Typography from '@material-ui/core/Typography'
import { Card, Grid, makeStyles, StylesProvider } from '@material-ui/core';
const useStyles = makeStyles((theme) =>({
    Rectangle :{
        width:'160px',
        padding:'0 1px 0 0',
    },
    Subject:{
        fontSize:'18px',
        fontFamily:'Roboto',
        fontWeight:'normal',
        fontStretch:'normal',
        fontStyle:'normal',
        //lineHeight:'1.57',
        letterSpacing:'normal',
        color:'#6b6c6f',
        marginLeft:'50px'
           
    },
}))
export interface Props extends HTMLAttributes<HTMLImageElement>
{
    imgSrc?:string,
    subjectName?:string,

}
function TopicsYouFollowSub ({imgSrc,subjectName,...props}:Props) 
{
    const classes = useStyles();
return(
    <Grid>
        <Grid>
        <img src={imgSrc} className={classes.Rectangle} />
    </Grid>
    <Grid>
         <h2 className={classes.Subject}>{subjectName}</h2>
    </Grid>
    </Grid>
)
}

export default TopicsYouFollowSub