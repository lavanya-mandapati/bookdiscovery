import { Grid ,makeStyles, StylesProvider ,Card} from "@material-ui/core"
import theme from "../../../theme/theme"
import TopicsYouFollowSub from "../TopicYouFollowSubject/TopicYouFollowSubject"


const useStyles = makeStyles({
    grid :{

        display:'flex',
        marginTop:theme.spacing(7),
        justifyContent:"space-between",
        paddingLeft:"-50px"
    }
})
function TopicYouFollow()
{
    const classes=useStyles()
    return(
        <Grid className={classes.grid}>
        <TopicsYouFollowSub imgSrc="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/50247E5B-3788-492D-956F-63172A8FDBF8.png" subjectName='Telugu'></TopicsYouFollowSub>
        <TopicsYouFollowSub imgSrc="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/4BA2C98D-1B0A-4984-A36F-3994BACDB944.png" subjectName='Hindi'></TopicsYouFollowSub>
        <TopicsYouFollowSub imgSrc="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/80BD6795-E0BE-4765-9C23-F737D4F6AD7B.png" subjectName='English'></TopicsYouFollowSub>
        <TopicsYouFollowSub imgSrc="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/40955D7D-20CD-4EF3-A752-728C3D5810E6.png" subjectName='Physics'></TopicsYouFollowSub>
        <TopicsYouFollowSub imgSrc="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/AF4114D0-FABB-4712-804C-5BFCFF242AAB.png" subjectName='Chemistry'></TopicsYouFollowSub>
        <TopicsYouFollowSub imgSrc="https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/14055696-F8E6-4CF2-B2C1-9F881E3A0CF4.png" subjectName='Social'></TopicsYouFollowSub>
        </Grid>
    )
}
export default TopicYouFollow
