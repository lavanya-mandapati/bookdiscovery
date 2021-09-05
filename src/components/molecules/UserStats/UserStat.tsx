import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { COLORS } from '../../../theme/constants';
import { ReactElement } from 'react';

const useStyles = makeStyles({
  root: {
    width:'255px',
    height:'120px',
    border:'2px solid',
    borderColor:COLORS.GREY,
  },
  title: {
    fontSize: 10,
    textAlign:"left"
  },
  pos: {
    marginBottom: 12,
  },
  display:
  {
     paddingLeft:'80px'
  },
  font:{
      fontSize:'14px',
        width:'156px',
        fontFamily:'Roboto',
        fontWeight:'normal',
        fontStretch:'normal',
        fontStyle:'normal',
        lineHeight:'1.57',
        letterSpacing:'normal',
        color:'#6b6c6f'

      },
      image:{
        width: '33px',
        objectFit:'contain'
      }
});
 export type UserStatProps =
{
    name:string,
    count:number,
    element:ReactElement
}
const UserStatItem:React.FC<UserStatProps> = (props) =>
{
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
          <CardActions>
       {props.element}
        <Typography className={classes.font}>
            {props.name}
        </Typography>
        </CardActions>
       <h1 className={classes.display}>{props.count}</h1>
        </CardContent>
    </Card>
  );
}
export default UserStatItem;
