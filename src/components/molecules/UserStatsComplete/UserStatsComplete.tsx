import { Grid, makeStyles, StylesProvider, Card } from "@material-ui/core"

import BookReading, { UserStatProps } from "../UserStats/UserStat"
import theme from "../../../theme/theme"
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import UserStatItem from "../UserStats/UserStat";
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { BookmarkBorderOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
    grid: {
        display: 'flex',
        gridGap: '20px',
        borderRadius: '4px',
        marginTop: theme.spacing(7),
        width: "1112px",
        justifyContent: "space-between"
    }
})

const userStatsData: UserStatProps[] = [
    {
        "name": "CURRENTLY READING",
        "count": 6,
        "element": <LocalLibraryOutlinedIcon />
    },
    {
        "name": "BOOKS TO READ",
        "count": 74,
        "element": <BookmarkBorderOutlined/>
    },
    {
        "name": "BOOKS READ",
        "count": 30,
        "element":<CheckCircleOutlineIcon/>
    },
    {
        "name": "TARGET PER YEAR",
        "count": 100,
        "element": <TrackChangesOutlinedIcon/>
    }
]
const allUserStats = userStatsData.map((userStat) => { return <UserStatItem {...userStat} /> })

const UserStatsComplete: React.FC = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.grid}>
            {allUserStats}
        </Grid>

    )

}
export default UserStatsComplete