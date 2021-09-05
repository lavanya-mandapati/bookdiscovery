import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Rating from '@material-ui/lab/Rating';
import ReplySharpIcon from '@material-ui/icons/ReplySharp';
import { CardActions, TableCell, Typography } from '@material-ui/core';
import { COLORS } from '../../../theme/constants';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAddRounded';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import theme from '../../../theme/theme';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
        width: "255px",
        height: "331px",
        padding:theme.spacing(5,0,2),
        marginLeft: theme.spacing(4),
        borderRadius: "4px",
        border: "solid 1px",
        borderColor: COLORS.GREY_300
    },
    image: {
        width: "180px",
        height: "190px",
        margin: theme.spacing(0, 6, 2, 7),
        objectFit: "contain"
    },
    title: {
        width: "216px",
        height: "28px",
        margin: theme.spacing(1, 8),
        color: COLORS.CHARCOAL_GREY
    },
    author: {
        width: "46px",
        height: "22px",
        textTransform: "none",
        color: COLORS.CHARCOAL_GREY_100
    },
    authorName: {
        height: "24px",
        float: "right"
    },
    star:{
        padding:theme.spacing(0)
    },
    rating: {
        width: "108px",
        height: "22px",
        margin: theme.spacing(1,2),
        textTransform: "none",
        textAlign: "left"
    },
    actions: {
        padding: theme.spacing(0),
        marginLeft: theme.spacing(8),
    },
    titleActions: {
        padding: theme.spacing(0)
    },
    bookmark: {
        color: COLORS.PRIMARY_COLOR_500,
        padding: theme.spacing(2),
        fontSize: "22px",
    },
    bookmarkBorder: {
        color: COLORS.ICON_500,
        padding: theme.spacing(2),
        fontSize: "22px",
    },
    reply: {
        color: COLORS.GREY_500,
        padding: theme.spacing(1, 2),
        fontSize: "22px"
    },
    playlist: {
        color: COLORS.GREY_500,
        padding: theme.spacing(1, 2),
        fontSize: "22px"
    },
    content:{
        padding: theme.spacing(0)
    },
    cell: {
        padding: theme.spacing(1),
        borderBottom: "none",
        width: "20px"
      }
});

export type RecommendationBookCardProps = {
    title: string;
    authorName: string;
    image: string;
}

const RecommendationBookCard: React.FC<RecommendationBookCardProps> = (props) => {
    const [bookMark, setBookMark] = useState(false);
    const bookmarkClick = () => {
        setBookMark((prev) => {
            return !prev;
        });
    }
    const [playlistAdded, setPlaylistAdded] = useState(false);
    const playlistClick = () => {
        setPlaylistAdded((prev) => {
            return !prev;
        });
    }
    const onClick = () => {
        return alert("Directed to BookDetail Page");
    }
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <TableCell className={classes.cell}>
                <CardMedia className={classes.image}
                    component="img"
                    image={props.image}
                    onClick={onClick} />
            </TableCell>
            <CardContent className={classes.content}>
                <CardActions className={classes.titleActions} >
                    <Typography className={classes.title} variant="h6">{props.title}</Typography>
                </CardActions>
                <CardActions className={classes.actions}>
                    <Typography className={classes.author} variant="body2">Author</Typography>
                    <Typography className={classes.authorName} variant="subtitle2">{props.authorName}</Typography>
                </CardActions>
                <CardActions className={classes.actions}>
                    <Rating size="small" read-only value={4} readOnly />
                    <Typography className={classes.star} variant="body1">4.0</Typography>
                    <Typography className={classes.rating} variant="overline">(1,204 ratings)</Typography>
                </CardActions>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
                {bookMark && <BookmarkIcon className={classes.bookmark} onClick={bookmarkClick} />}
                {!bookMark && <BookmarkBorderIcon className={classes.bookmarkBorder} onClick={bookmarkClick} />}
                <ReplySharpIcon className={classes.reply} />
                {!playlistAdded && <PlaylistAddIcon className={classes.playlist} onClick={playlistClick} />}
                {playlistAdded && <PlaylistAddCheckIcon className={classes.playlist} onClick={playlistClick} />}
            </CardActions>

        </Card>
    );
}

export default RecommendationBookCard;