import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, red, teal } from "@material-ui/core/colors";
import "./BuyAndSell.css";

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

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "15ch",
    },
  },
  margin: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.common.paper,
  },
  small: {
    paddingTop: 5,
    width: 40,
    height: 30,
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
    third: teal,
  },
});

function BuyAndSell() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="buy-and-sell-container">
      <div className="tab">tabs</div>
      <div id="inputs-and-ddl" className="inputs-and-ddl">
        <div className="controller-row">
          <FormControl className={classes.margin}>
            <NativeSelect
              id="demo-customized-select-native"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option aria-label="None" value="" />
              <option value={10}>Product</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
          <FormControl className={classes.margin}>
            <NativeSelect
              id="demo-customized-select-native"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option aria-label="None" value="" />
              <option value={10}>Fok</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>
        </div>

        <div className="controller-row">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
              placeholder="Quantity"
            />
            <TextField
              id="outlined-basic"
              label="Sippege-bps"
              variant="outlined"
              placeholder="Sippege-bps"
            />
          </form>
        </div>
        <div className="buttons-row">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.margin}
            >
              Sell
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="third" className={classes.small}>
              -9698.0
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              Buy
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default BuyAndSell;
