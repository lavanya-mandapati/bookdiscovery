import { makeStyles } from '@material-ui/core';
import React from 'react';
import BookStatusCard, { BookStatusCardProps } from '../BookStatusCard/BookStatusCard';



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        gridGap: '20px',
        marginTop: theme.spacing(7),
        width:"1112px"
    },
}));

const BooksStatusCompleteItems: React.FC = () => {

    const data: BookStatusCardProps[] = [
        {
            "title": "Inorganic chemistry",
            "authorName": "Joe Pearson",
            "field": "Chemistry",
            "image": "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/03991C69-3988-432F-AD72-535D7FCFFC54.png",
            "upCount": 15,
            "total": 239
        },
        {
            "title": "Inorganic chemistry",
            "authorName": "Joe Pearson",
            "field": "Chemistry",
            "image": "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/03991C69-3988-432F-AD72-535D7FCFFC54.png",
            "upCount": 15,
            "total": 239
        },
        {
            "title": "Inorganic chemistry",
            "authorName": "Joe Pearson",
            "field": "Chemistry",
            "image": "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/03991C69-3988-432F-AD72-535D7FCFFC54.png",
            "upCount": 15,
            "total": 239
        },
        {
            "title": "Inorganic chemistry",
            "authorName": "Joe Pearson",
            "field": "Chemistry",
            "image": "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/03991C69-3988-432F-AD72-535D7FCFFC54.png",
            "upCount": 15,
            "total": 239
        },
    ]

    const classes = useStyles();

    const cards = data.map((dataItem) => {
        console.log(dataItem);

        return <BookStatusCard
            authorName={dataItem.authorName}
            title={dataItem.title}
            field={dataItem.field}
            image={dataItem.image}
            total={dataItem.total}
            upCount={dataItem.upCount} />
    })
    return (
        <div className={classes.root}>
            {cards}
        </div>
    )
}

export default BooksStatusCompleteItems;