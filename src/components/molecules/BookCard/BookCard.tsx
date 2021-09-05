import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import Rating from "@material-ui/lab/Rating";
import ReplySharpIcon from "@material-ui/icons/ReplySharp";
import { CardActions, Table, TableRow, Typography } from "@material-ui/core";
import { COLORS } from "../../../theme/constants";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "../../atoms/Avatar";
import theme from "../../../theme/theme";

const useStyles = makeStyles({
  root: {
    width: "530px",
    height: "255px",
    padding: theme.spacing(5, 2, 4, 3),
    borderRadius: "4px",
    border: "solid 1px",
    borderColor: COLORS.GREY_300,
  },
  image: {
    width: "180px",
    height: "250px",
    margin: theme.spacing(0, 1),
    borderRadius: "4px",
    objectFit: "initial",
  },
  title: {
    width: "304px",
    height: "30px",
    margin: theme.spacing(0, 2.5),
    color: COLORS.CHARCOAL_GREY,
  },
  desc: {
    width: "290px",
    height: "66px",
    margin: theme.spacing(2),
    color: COLORS.CHARCOAL_GREY_100,
    lineHeight: "22px",
  },
  avatar: {
    width: "38px",
    height: "38px",
    margin: theme.spacing(2, 2),
  },
  author: {
    width: "36px",
    height: "18px",
    margin: theme.spacing(0, 1),
    textTransform: "none",
    color: COLORS.ICON_500,
  },
  authorName: {
    width: "53px",
    height: "24px",
    color: COLORS.CHARCOAL_GREY,
  },
  star: {
    width: "20px",
    height: "22px",
    margin: theme.spacing(0, 1),
    color: COLORS.CHARCOAL_GREY,
  },
  rating: {
    width: "98px",
    height: "22px",
    color: COLORS.CHARCOAL_GREY,
  },
  bookmark: {
    color: COLORS.PRIMARY_COLOR_500,
    paddingRight: "20px",
  },
  reply: {
    color: COLORS.GREY_500,
    paddingRight: "20px",
  },
  playlist: {
    color: COLORS.GREY_500,
  },
  action: {
    display: "flex",
    width: "auto",
  },
  content: {
    padding: theme.spacing(0),
  },
  table: {
    width: theme.spacing(0),
  },
  cell: {
    padding: theme.spacing(0),
    borderBottom: "none",
    width: "20px",
  },
});
export type BookCardProps = {
  title: string;
  desc: string;
  authorName: string;
  image: string;
  onClick?: () => void;
};
const BookCard: React.FC<BookCardProps> = ({
  title,
  desc,
  authorName,
  image,
  onClick,
}) => {
  const classes = useStyles();
  return (
    <Card onClick={onClick} className={classes.root}>
      <CardActionArea className={classes.action}>
        <CardMedia className={classes.image} component="img" image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          <Typography className={classes.desc} variant="body2">
            {desc}
          </Typography>
          <Table className={classes.table}>
            <TableRow>
              <TableCell rowSpan={2} className={classes.cell}>
                <Avatar className={classes.avatar} src="" />
              </TableCell>
              <TableCell className={classes.cell}>
                <Typography className={classes.author} variant="overline">
                  Author
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.cell}>
                <Typography className={classes.authorName} variant="subtitle2">
                  {authorName}
                </Typography>
              </TableCell>
            </TableRow>
          </Table>
          <CardActions>
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
              ( 1,204 ratings )
            </Typography>
          </CardActions>
          <CardActions>
            <BookmarkIcon className={classes.bookmark} />
            <ReplySharpIcon className={classes.reply} />
            <PlaylistAddCheckIcon className={classes.playlist} />
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
