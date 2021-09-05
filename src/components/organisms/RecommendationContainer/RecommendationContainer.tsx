import React from "react";
import RecommendationBookCard, { RecommendationBookCardProps } from "../RecommendationBookCard/RecommendationBookCard";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { COLORS } from '../../../theme/constants';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import theme from "../../../theme/theme";

export type RecommendationContainerProps={
    cardClicked?: ()=>any;
    data: Array<RecommendationBookCardProps>;
}
const useStyles = makeStyles({
    heading: {
        width: "475px",
        height: "38px",
        margin: theme.spacing(4,3,1,20),
        color: COLORS.CHARCOAL_GREY_100
    },
    text: {
        width: "68px",
        height: "24px",
        margin: theme.spacing(5,2,1,125),
        color: COLORS.PRIMARY_COLOR_500,
    },
    icon: {
        color: COLORS.PRIMARY_COLOR_500,
        margin: theme.spacing(7,2,1,0),
        fontSize: "12px"
    },
    textContainer:{
        display: "flex"
    },
    grid:{
        display: "flex",
        marginLeft: theme.spacing(16),
        marginRight: theme.spacing(20)
    }
})
const RecommendationContainer: React.FC<RecommendationContainerProps> = ({
    data
}) => {
    const classes = useStyles();
    const recommendationCards = data.map((dataItem) => {
        return <RecommendationBookCard
            authorName={dataItem.authorName}
            title={dataItem.title}
            image={dataItem.image} />
    })
    return (
        <React.Fragment>
            <Grid className={classes.textContainer}>
            <Typography variant="h3" className={classes.heading}>Recommendations based on your search</Typography>
            <Typography variant="subtitle2" className={classes.text}>See more</Typography>
            <ArrowForwardIosIcon className={classes.icon} />
            </Grid>
            <Grid className={classes.grid}>
                   {recommendationCards}
            </Grid>
        </React.Fragment>
    );
}

export default RecommendationContainer;