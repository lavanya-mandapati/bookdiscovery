import SvgIcon from "@material-ui/core/SvgIcon";
import React from "react";
import { SVG_PATH } from "../../../theme/constants";
import { makeStyles } from "@material-ui/core/styles";

export type LogoProps = {};

const useStyles = makeStyles({
  root: {
    width: "35px",
    height: "24px",
    objectFit: "contain",
    margin: "7px 17px 7px 0",
  },
});

const Logo: React.FC<LogoProps> = ({}) => {
  const classes = useStyles();
  return (
    <SvgIcon className={classes.root}>
      <path d={SVG_PATH.LOGO} />
    </SvgIcon>
  );
};

export default Logo;
