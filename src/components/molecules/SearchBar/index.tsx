import InputField from "../../atoms/InputField";
import { ClickAwayListener, makeStyles, Menu, MenuItem, MenuList, Popper, withStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import React, { FormEvent, useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import { BookStatusCardProps } from "../BookStatusCard/BookStatusCard";
import SearchResultCard from "../SearchResultCard/SearchResultCard";


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: any) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0.5, 1),
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin:"0",
    boxShadow:"none",
    flex:"null"
  },
  icon: {
    marginLeft: '10px'
  },
  closeIcon: {
    marginLeft: 'auto'
  },
  flex: {
    flex: "column"
  },
  searchBooks: {
    backgroundColor:'white',
    width:"390px"
  },
  menuItem:{
    padding:0,
  }
}));

export type SearchBarProps = {
  type?: string;
  searchValue?: string;
  placeholder: string;
  className?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchValue, placeholder, className }) => {

  const classes = useStyles();
  const [searchText, setSearchText] = useState<string>(searchValue ? searchValue : "");

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

  const [filterBooks, setFilterBooks] = useState<BookStatusCardProps[]>([]);

  const [expand, setExpand] = useState(true);
  // const boo
  const onChange = (event: React.ChangeEvent<{ value: unknown; }>) => {
    setSearchText(event.target.value as string);
    const books = data.filter((dataItem: BookStatusCardProps) => {
      return (dataItem.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
    })
    console.log(books);

    setFilterBooks(books);
    setExpand(true);
  }

  const handleClosed = () => {
    setSearchText('');
    setExpand(false);
  }

  console.log(Boolean(searchText))

  // const [anchorEl, setAnchorEl] = useState<any>(null);
  const searchBooks = filterBooks.map((book) => {
    return (
      <MenuItem className={classes.menuItem}>
        <SearchResultCard {...book} />
      </MenuItem>
    );
  });



  // console.log(searchBooks)
  return (
    // <Grid container direction="column" alignItems="center">
    <div className={classes.flex}>
      {/* // <React.Fragment> */}

      <div className={classes.root} >
        <SearchIcon className={classes.icon} />
        <InputField placeholder={placeholder}
          value={searchText}
          className={className}
          disableUnderline={true}
          data-testid="search-field"
          onChange={onChange}>
        </InputField>
        {searchText && <CloseIcon className={classes.closeIcon} onClick={handleClosed} />}
      </div>

      {expand && <div className={classes.searchBooks}>
        {searchBooks}
      </div>}

    </div>
    // </React.Fragment>



    // </Grid>

  );
}

export default SearchBar;