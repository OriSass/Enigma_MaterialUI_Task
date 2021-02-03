import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "./HeaderBar.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.common.paper,
  },
}));
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(1),
      width: "20ch",
    },
  },
  input: {
    borderRadius: 4,
    width: 100,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

function HeaderBar() {
  const classes = useStyles();
  const handleChange = (event) => {};
  return (
    <div className="header">
      <div className="frost">
        <AcUnitIcon /> <b>Dashboard</b>
      </div>
      <span className="date-time">3:02:22 PM wednesday, December 16 2020</span>
      <div>
        <FormControl className={classes.margin}>
          <NativeSelect
            id="demo-customized-select-native"
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <option value={10}>Tom Reiven</option>
          </NativeSelect>
        </FormControl>
      </div>
    </div>
  );
}

export default HeaderBar;
