import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import theme from "../../../theme/theme";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { COLORS } from "../../../theme/constants";
const useStyles = makeStyles({
  root: {
    width: 350,
    height: 128,
    borderRadius: "unset",
  },
  subject: {
    display: "flex",
    alignItems: "center",
    columnGap: theme.spacing(1.5),
  },
  innerGrid: {
    display: "grid",
    rowGap: "5px",
  },
  header: {
    width: 350,
    height: 50,
    borderRadius: "unset",
    textAlign: "center",
    justifyContent: "center",
  },
  header1: {
    width: 350,
    height: 50,
    borderRadius: "unset",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: theme.palette.primary.main,
  },
  bullet: {
    display: "inline-block",
    margin: theme.spacing(0, 0.5),
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
    marginTop: theme.spacing(-0.5),
  },
  avatar: {
    height: "104px",
    width: "90px",
  },
  typography: {
    fontSize: theme.typography.h6.fontSize,
    color: "#6b6c6f",
    display: "flex",
    marginLeft: theme.spacing(3.5),
    marginTop: theme.spacing(3),
  },
  typography1: {
    fontSize: theme.typography.body2.fontSize,
    display: "flex",
    marginLeft: "auto",
    justifyContent: "flex-end",
  },
  footer: {
    marginRight: theme.spacing(7),
  },
  name: {
    fontSize: theme.spacing(3),
    color: COLORS.CHARCOAL_GREY,
  },
  constants: {
    color: COLORS.ICON_500,
  },
});

export type Image = {
  image: string;
};

export type BatchmatesProps = {
  booksSrc: Array<Image>;
};

const CONSTANTS = {
  BOOKTITLE: "Inorganic Chemistry",
  AUTHORNAME: "J D Lee",
  BY: "by",
  FIELD: "Field",
  AUTHORFIELD: "Chemistry",
  RATING: "4.0",
};

const Batchmates: React.FC<BatchmatesProps> = ({ booksSrc }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Card className={classes.header} variant="outlined">
            <Typography
              className={classes.typography}
              children="Your batchmates also read"
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          {booksSrc.map((book, index) => {
            return (
              <Card className={classes.root} key={index} variant="outlined">
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
                        <Typography children={CONSTANTS.BOOKTITLE} />
                      </Grid>
                      <Grid className={classes.subject}>
                        <Typography
                          variant="caption"
                          className={classes.constants}
                          children={CONSTANTS.BY}
                        />
                        <Typography
                          className={classes.name}
                          children={CONSTANTS.AUTHORNAME}
                        />
                      </Grid>
                      <Grid container spacing={9}>
                        <Grid item xs={3}>
                          <Rating size="small" defaultValue={4} />
                        </Grid>
                        <Grid item xs={1} className={classes.text}>
                          <Typography className={CONSTANTS.RATING} />
                        </Grid>
                      </Grid>
                      <Grid className={classes.subject}>
                        <Typography
                          variant="caption"
                          className={classes.constants}
                          children={CONSTANTS.FIELD}
                        />
                        <Typography
                          className={classes.name}
                          children={CONSTANTS.AUTHORFIELD}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            );
          })}
          <Grid item xs={12}>
            <Card className={classes.header1} variant="outlined">
              <Typography className={classes.typography1}>See all</Typography>
              <KeyboardArrowRightIcon className={classes.footer} />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Batchmates;