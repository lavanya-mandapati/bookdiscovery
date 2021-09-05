import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import theme from "../../../theme/theme";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {COLORS} from '../../../theme/constants';
const useStyles = makeStyles({
  root: {
    width: 350,
    height: 128,
    borderRadius:'unset',
  },
  subject:{
      display:'flex',
      alignItems:'center',
      columnGap:theme.spacing(1.5)
  },
  innerGrid:{
    display: 'grid',
    rowGap:'5px'
  },
  header:{
      width:350,
      height:50,
      borderRadius:'unset',
      textAlign: 'center',
      justifyContent: 'center',
  },
  header1:{
    width:350,
    height:50,
    borderRadius:'unset',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems:'center',
    display:'flex',
    color:theme.palette.primary.main,
  },
  bullet: {
    display: "inline-block",
    margin: theme.spacing(0,0.5),
    transform: "scale(0.8)",
  },
  title: {
    fontSize: theme.typography.body1.fontSize,
  },
  pos: {
    marginBottom: theme.spacing(3),
  },
  text: {
    marginLeft: theme.spacing(8),
    marginTop:theme.spacing(-0.5),
  },
  avatar: {
    height: "104px",
    width: "90px",
  },
  typography:{
      fontSize:theme.typography.h6.fontSize,
      color:'#6b6c6f',
      display: 'flex',
      marginLeft: theme.spacing(3.5),
      marginTop: theme.spacing(3),
  },
  typography1:{
    fontSize: theme.typography.body2.fontSize,
    display: 'flex',
    marginLeft: 'auto',
    justifyContent: 'flex-end',
  },
  footer:{
      marginRight:theme.spacing(7),
  },name:{
      fontSize:theme.spacing(3),
      color:COLORS.CHARCOAL_GREY,
  },
  constants:{
      color:COLORS.ICON_500,
  }
});

export type Mock = {
  image: string;
};

export type BatchmatesProps = {
  booksSrc: Array<Mock>;
};

const Batchmates: React.FC<BatchmatesProps> = ({ booksSrc }) => {
  const classes = useStyles();
  return (
    <>
    <Grid container>
        <Grid item xs={12} >
        <Card className={classes.header} variant="outlined">
            <Typography className={classes.typography}>Your batchmates also read</Typography>
        </Card>
        </Grid>
        <Grid item xs={12} >
      {booksSrc.map((book) => {
        return (
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar
                    src={book.image}
                    className={classes.avatar}
                    variant="square"
                  />
                </Grid>
                <Grid item xs={8} className={classes.innerGrid}>
                  <Grid>
                    <Typography>Inorganic chemistry</Typography>
                  </Grid>
                  <Grid className={classes.subject}>
                    <Typography variant="caption"  className={classes.constants}>
                      by
                    </Typography>
                    <Typography  className={classes.name}>J D Lee</Typography>
                  </Grid>
                  <Grid container spacing={9}>
                    <Grid item xs={3}>
                      <Rating size="small" defaultValue={4} />
                    </Grid>
                    <Grid item xs={1} className={classes.text}>
                      <Typography>4.0</Typography>
                    </Grid>
                  </Grid>
                  <Grid className={classes.subject}>
                    <Typography variant="caption"  className={classes.constants}>
                      Field: 
                    </Typography>
                    <Typography className={classes.name}>Chemistry</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}
         <Grid item xs={12} >
        <Card className={classes.header1} variant="outlined">
            <Typography className={classes.typography1}>See all</Typography>
            <KeyboardArrowRightIcon className={classes.footer}/>
        </Card>
        </Grid>
      </Grid>
      </Grid>
    </>
    
  );
};
export default Batchmates;