import React from 'react';
import HeaderItem from '../Header/Header';
import BookDiscover from '../../molecules/DiscoverBooks/DiscoverBooksImage';
import UserStatsComplete from '../../molecules/UserStatsComplete/UserStatsComplete';
import TopicYouFollow from '../../molecules/TopicYouFollow/TopicYouFollow';
import { makeStyles } from "@material-ui/core";
import BooksStatusCompleteItems from '../../molecules/BooksStatusCardComplete/BooksStatusCardComplete';
import RecommendationContainer from '../RecommendationContainer/RecommendationContainer';
import UserStatItem from '../../molecules/UserStats/UserStat';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';


type Image={
    image:string
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: theme.spacing(41),
        marginRight: theme.spacing(41),
        marginTop:theme.spacing(4)
    },
}));

const HomeItem: React.FC = () => {

    const classes = useStyles();
    const tempImage:Image={
       image: "https://cdn.zeplin.io/5f03041d8c8fc11335546618/assets/03991C69-3988-432F-AD72-535D7FCFFC54.png"
    }
    const batchBooks:Image[] = [tempImage,tempImage,tempImage];

    // const ele = 
    return (
        <React.Fragment>
            <HeaderItem />
            <div className={classes.root}>
                <BookDiscover />
                <UserStatsComplete />
                <BooksStatusCompleteItems/>
                {/* <RecommendationContainer/> */}
                <TopicYouFollow />
                <UserStatItem count={10} name="currently reading" element={<LocalLibraryOutlinedIcon/>}/>                                
            </div>
        </React.Fragment>
    )

}

export default HomeItem;