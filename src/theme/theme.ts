import { createTheme } from "@material-ui/core/styles";
import "./constants.ts";


const theme = createTheme({

  typography: {
    h1: {
      fontFamily: "Roboto",
      fontSize: "36px",
      fontWeight: "bold",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.39,
      letterSpacing: "normal",
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: "36px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.39,
      letterSpacing: "normal",
    },
    h3: {
      fontFamily: "Roboto",
      fontSize: "26px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.46,
      letterSpacing: "normal",
    },
    h4: {
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    h5: {
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
    },
    h6: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.56,
      letterSpacing: "normal",
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      textAlign: "right",
    },
    subtitle2: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      textAlign: "right",
    },
    body1: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.57,
      letterSpacing: "normal",
      textAlign: "right",
    },
    body2: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.57,
      letterSpacing: "normal",
    },

    //caption1
    caption: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      textAlign: "right",
    },
    //caption2
    overline: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: "normal",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: 1.5,
      letterSpacing: "normal",
      textAlign: "center",
    },
  },

});



export default theme;
