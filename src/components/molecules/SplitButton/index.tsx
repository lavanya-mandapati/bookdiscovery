import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import theme from '../../../theme/theme';
import {COLORS} from '../../../theme/constants';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  btn:{
     backgroundColor:theme.palette.primary.main,
     color:COLORS.WHITE_50,
     borderColor:theme.palette.primary.main,
     textTransform:'none',
  },
  grid:{
    width:'auto'
  }
}))

export type SplitButtonProps={
  selectedId?:number;
  items:Array<string>;
  
};

const SplitButton: React.FC<SplitButtonProps>= ({selectedId,items}) => {
  const classes=useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(selectedId?selectedId:0);

  const handleClick = () => {
    console.info(`You clicked ${items[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center" className={classes.grid}>
      <Grid item xs={12} >
        <ButtonGroup variant="contained" className={classes.btn} ref={anchorRef} aria-label="split button">
          <Button onClick={handleClick} className={classes.btn}>{items[selectedIndex]}</Button>
          <Button
            className={classes.btn}
            size="small"
            onClick={handleToggle}
            data-testid="openDropdown"
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu">
                    {items.map((item, index) => (
                      <MenuItem
                        key={index}

                        selected={index === selectedIndex}
                        data-testid="menuItemClick"
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}

export default SplitButton;