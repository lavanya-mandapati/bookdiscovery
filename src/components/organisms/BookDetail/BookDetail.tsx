import React from "react";
import {
  CardActions,
  CardMedia,
  Grid,
  makeStyles,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { COLORS } from "../../../theme/constants";
import { Rating } from "@material-ui/lab";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAddRounded";
import ReplySharpIcon from "@material-ui/icons/ReplySharp";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import LanguageIcon from "@material-ui/icons/Language";
import NewReleasesOutlinedIcon from "@material-ui/icons/NewReleasesOutlined";
import { useState } from "react";
import theme from "../../../theme/theme";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./style.css";
import SplitButton from "../../molecules/SplitButton/index";

const useStyles = makeStyles({
  title: {
    width: "387px",
    height: "38px",
    margin: theme.spacing(6, 1, 0, 2),
    color: COLORS.CHARCOAL_GREY,
  },
  image: {
    width: "180px",
    height: "259px",
    objectFit: "contain",
    margin: theme.spacing(2, 1),
  },
  by: {
    width: "15px",
    height: "22px",
    color: COLORS.ICON_500,
  },
  authorName: {
    width: "101px",
    height: "28px",
    color: COLORS.CHARCOAL_GREY,
    fontWeight: "normal",
  },
  field: {
    width: "37px",
    height: "22px",
    color: COLORS.ICON_500,
  },
  fieldName: {
    width: "73px",
    height: "24px",
    color: COLORS.CHARCOAL_GREY,
  },
  desc: {
    width: "154px",
    height: "30px",
    margin: theme.spacing(1, 3, 1, 0),
    color: COLORS.CHARCOAL_GREY,
  },
  descText: {
    width: "727px",
    color: COLORS.CHARCOAL_GREY_100,
    fontWeight: "normal",
  },
  star: {
    width: "20px",
    height: "22px",
    color: COLORS.CHARCOAL_GREY,
  },
  rating: {
    width: "108px",
    height: "22px",
    color: COLORS.CHARCOAL_GREY,
  },
  release: {
    fontSize: "15px",
    color: COLORS.CHARCOAL_GREY_100,
  },
  releaseDate: {
    width: "169px",
    height: "22px",
    marginLeft: theme.spacing(0),
    color: COLORS.CHARCOAL_GREY_100,
  },
  languageIcon: {
    fontSize: "15px",
    color: COLORS.CHARCOAL_GREY_100,
  },
  language: {
    color: COLORS.CHARCOAL_GREY_100,
    width: "46px",
    height: "22px",
  },
  reply: {
    color: COLORS.ICON_500,
    paddingRight: theme.spacing(3),
    fontSize: "20px",
  },
  playlist: {
    color: COLORS.ICON_500,
    paddingRight: theme.spacing(3),
    fontSize: "20px",
  },
  bookmark: {
    color: COLORS.PRIMARY_COLOR_500,
    paddingRight: theme.spacing(3),
    fontSize: "20px",
  },
  bookmarkBorder: {
    color: COLORS.ICON_500,
    paddingRight: theme.spacing(3),
    fontSize: "20px",
  },
  list: {
    color: COLORS.ICON_500,
    fontSize: "18px",
  },
  actions: {
    padding: theme.spacing(1.5),
  },
  firstActions: {
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(0.5),
  },
  grid: {
    display: "flex",
  },
  flex: {
    display: "flex",
    height: "50px",
  },
  text: {
    width: "68px",
    height: "24px",
    margin: theme.spacing(0, 0, 0, 65),
    color: COLORS.PRIMARY_COLOR_500,
  },
  icon: {
    color: COLORS.PRIMARY_COLOR_500,
    fontSize: "20px",
  },
  pages: {
    width: "103px",
    height: "18px",
    color: COLORS.CHARCOAL_GREY_100,
    textTransform: "none",
    margin: theme.spacing(2, 1.5),
  },
  spacing: {
    margin: theme.spacing(-1),
    padding: theme.spacing(1, 0.8),
  },
  descTextEnd: {
    color: COLORS.CHARCOAL_GREY_100,
    fontWeight: "normal",
  },
  border: {
    border: "none",
  },
});
export type BookDetailProps = {
  desc1: string;
  desc2: string;
  title: string;
  authorName: string;
  fieldName: string;
  releaseDate: string;
  language: string;
  image: string;
};
const BookDetail: React.FC<BookDetailProps> = (props) => {
  const [bookMark, setBookMark] = useState(false);
  const onBookmarkClick = () => {
    setBookMark((prev) => {
      return !prev;
    });
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid className={classes.grid}>
        <CardMedia
          className={classes.image}
          component="img"
          image={props.image}
        />
        <div>
          <div className={classes.flex}>
            <Typography variant="h3" className={classes.title}>
              {props.title}
            </Typography>
            <TableCell align="left" className={classes.border}>
              <TableRow>
                <div className="round"></div>
              </TableRow>
              <TableRow>
                <Typography variant="overline" className={classes.pages}>
                  0 read / 285 pages
                </Typography>
              </TableRow>
            </TableCell>
          </div>
          <CardActions className={classes.firstActions}>
            <Typography variant="body2" className={classes.by}>
              by
            </Typography>
            <Typography className={classes.authorName} variant="h6">
              {props.authorName}
            </Typography>
          </CardActions>
          <CardActions className={classes.actions}>
            <Typography variant="body2" className={classes.field}>
              Field:
            </Typography>
            <Typography className={classes.fieldName} variant="subtitle2">
              {props.fieldName}
            </Typography>
          </CardActions>
          <CardActions className={classes.actions}>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              size="small"
              readOnly
            />
            <Typography className={classes.star} variant="body1">
              4.5
            </Typography>
            <Typography className={classes.rating} variant="body2">
              ( 1,204 reviews )
            </Typography>
          </CardActions>
          <CardActions className={classes.actions}>
            <NewReleasesOutlinedIcon className={classes.release} />
            <Typography variant="body2" className={classes.releaseDate}>
              Release Date: {props.releaseDate}
            </Typography>
            <LanguageIcon className={classes.languageIcon} />
            <Typography variant="body2" className={classes.language}>
              {props.language}
            </Typography>
          </CardActions>
          <CardActions className={classes.actions}>
            {bookMark && (
              <BookmarkIcon
                className={classes.bookmark}
                onClick={onBookmarkClick}
              />
            )}
            {!bookMark && (
              <BookmarkBorderIcon
                className={classes.bookmarkBorder}
                onClick={onBookmarkClick}
              />
            )}
            <PlaylistAddIcon className={classes.playlist} />
            <ReplySharpIcon className={classes.reply} />
            <FormatListBulletedRoundedIcon className={classes.list} />
          </CardActions>
          <CardActions className={classes.actions}>
            <SplitButton items={["Start Reading", "Finish Reading"]} />
          </CardActions>
        </div>
      </Grid>
      <Typography variant="h4" className={classes.desc}>
        Book Description
      </Typography>
      <Typography variant="h6" className={classes.descText}>
        {props.desc1}
      </Typography>
      <Typography variant="h6" className={classes.descText}>
        {props.desc2}
      </Typography>
      <CardActions className={classes.spacing}>
        <Typography variant="h6" className={classes.descTextEnd}>
          networks. With exercises in each
        </Typography>
        <Typography variant="subtitle2" className={classes.text}>
          See more
        </Typography>
        <ExpandMoreIcon className={classes.icon} />
      </CardActions>
    </React.Fragment>
  );
};


export default BookDetail;
