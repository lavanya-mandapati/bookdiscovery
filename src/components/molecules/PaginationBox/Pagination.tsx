import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Pagination as MuiPaginationBox} from '@material-ui/lab';

export type PaginationProps={ }

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBlock:"1px",
        margin: "0px"
    },
    item:{
        margin: "0px"
    }
}));

const Pagination: React.FC<PaginationProps> = ({ }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <MuiPaginationBox className={classes.item} count={5} variant="outlined" shape="rounded" />
        </div>
    );
}

export default Pagination;