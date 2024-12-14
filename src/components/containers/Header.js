/*==================================================
Header.js

It contains the Header component to be displayed on every page.
The header contains navigation links to every other page.
================================================== */
// Import "material" library for building UI with React components

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// Define styling for the header
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: 600,
    fontFamily: "Arial, sans-serif",
    fontSize: "28px",
    color: "white", // White for better contrast
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)", // Subtle shadow for readability
  },
  appBar: {
    backgroundImage:
      "url('https://media.cntraveler.com/photos/631b4fe1f2f54501e692c5d3/16:9/w_2991,h_1682,c_limit/University%20of%20Michigan_GettyImages-470656298.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    boxShadow: "none",
    height: "250px",
    position: "relative", // Ensure the overlay and content are properly positioned
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  content: {
    position: "relative", // Keeps the content above the overlay
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    height: "100%",
  },
  links: {
    textDecoration: "none",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white
    color: "#333333", // Muted dark gray for text
    fontWeight: 500,
    margin: "0 8px",
    padding: "6px 18px",
    borderRadius: "15px",
    textTransform: "none",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 1)", // Fully opaque on hover
      color: "#555555", // Slightly darker text on hover
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        {/* Overlay for readability */}
        <div className={classes.overlay}></div>
        <div className={classes.content}>
          <Typography variant="h6" className={classes.title}>
            Campus Management System
          </Typography>

          <div>
            <Link className={classes.links} to={"/"}>
              <Button className={classes.button}>Home</Button>
            </Link>

            <Link className={classes.links} to={"/campuses"}>
              <Button className={classes.button}>All Campuses</Button>
            </Link>

            <Link className={classes.links} to={"/students"}>
              <Button className={classes.button}>All Students</Button>
            </Link>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
