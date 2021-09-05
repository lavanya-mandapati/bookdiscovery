import { CardContent } from "@material-ui/core"
import { Card } from "@material-ui/core"
import { Grid ,makeStyles, StylesProvider} from "@material-ui/core"
import theme from "../../../theme/theme"

const useStyles = makeStyles({

    container: {
        position: 'relative',
        width: '100%',
       maxWidth:'400px',
       marginTop:theme.spacing(7),
        zIndex:-1
      },
      btn:{
        position: 'absolute',
        top: '80%',
        left: '25%',
        transform: 'translate(-50%, -50%)',
        backgroundColor:' blue',
        color: 'white',
        fontSize: '16px',
        padding: '12px 24px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        textAlign:'center'
      }
      


})


function BookDiscover()
{
    const classes=useStyles()
return(
   <div className={classes.container}>
    <img src="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/296A1994-087A-4F86-BC94-D8E3D96946EE.png" alt="Snow"/>
    <button className={classes.btn}>Discover</button>
    </div>
)}

export default BookDiscover