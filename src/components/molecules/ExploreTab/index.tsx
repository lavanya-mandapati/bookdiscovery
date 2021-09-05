import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, ListItemText } from "@material-ui/core";
import theme from "../../../theme/theme";
import CloseIcon from "@material-ui/icons/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faGlobe,
  faFlask,
  faCommentAlt,
  faRunning,
  faBook,
  faHeadSideVirus,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../../theme/constants";

const useStyles = makeStyles(() => ({
  root: {
    width: 1100,
    height: "256px",
    border: `${theme.spacing(0.125)}px solid ${theme.palette.grey[300]}`,
  },
  topnav: {
    height: "56px",
    borderBottom: `${theme.spacing(0.75)}px solid ${theme.palette.grey[300]}`,
  },
  grid: {
    width: 1100,
    height: "670px",
    backgroundColor: COLORS.GREY_300,
  },
  closeIcon: {
    marginLeft: "50px",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  innerGrid: {
    margin: 80,
    marginTop: "auto",
  },
  text: {
    marginTop: theme.spacing(3.75),
    marginLeft: "95px",
  },
  icon: {
    fontSize: "18px",
  },
  category: {
    width: "fit-content",
    height: "24px",
    fontFamily: theme.typography.h3.fontFamily,
    color: "#3e3f42",
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: theme.typography.subtitle1.lineHeight,
    letterSpacing: "normal",
  },
  button: {
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "normal",
  },
  topic: {
    color: COLORS.PRIMARY_COLOR_500,
  },
}));

export type Category = {
  category: string;
  topics: Array<string>;
};

export type ExploreTabProps = {
  items: Array<Category>;
  getExploreCategory: (category: string) => void;
  handleClose: (open: boolean) => void;
};

var icons = [
  faCommentAlt,
  faCalculator,
  faFlask,
  faGlobe,
  faBookOpen,
  faBook,
  faRunning,
  faHeadSideVirus,
];
const ExploreTab: React.FC<ExploreTabProps> = ({
  items,
  getExploreCategory,
  handleClose,
}) => {
  const classes = useStyles();
  const onClose = () => {
    handleClose(false);
  };

  const filterCategory = (category: string) => {
    getExploreCategory(category);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.topnav}>
        <Grid container className={classes.text}>
          <Grid item xs={2}>
            <Typography className={classes.topic}>All Topics</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Authors</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>Recent titles</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Popular titles</Typography>
          </Grid>
          <Grid item onClick={onClose} className={classes.closeIcon}>
            <CloseIcon data-testid="close" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.grid}>
        <Grid container spacing={3} className={classes.innerGrid}>
          {items.map((item: Category, index) => {
            return (
              <Grid item xs={4}>
                <Grid className={classes.header}>
                  <FontAwesomeIcon
                    icon={icons[index++]}
                    className={classes.icon}
                  />
                  <Button className={classes.category}>
                    {item.category.toUpperCase()}
                  </Button>
                </Grid>
                <Grid>
                  {item.topics.map((topic, index) => {
                    return (
                      <ListItemText>
                        <Button
                          className={classes.button}
                          onClick={() => filterCategory(item.topics[index])}
                        >
                          {item.topics[index]}
                        </Button>
                      </ListItemText>
                    );
                  })}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExploreTab;