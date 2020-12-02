import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  withStyles,
} from "@material-ui/core";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(id, participants, tests_taken, time_left) {
  return { id, participants, tests_taken, time_left };
}

const rows = [
  createData("12315641", 34, 54, "12m"),
  createData("75615462", 18, 37, "17m"),
  createData("21564321", 140, 320, "1h"),
  createData("21542316", 6, 12, "1h"),
  createData("13154564", 66, 139, "2h"),
];

const useStyles1 = makeStyles(() => ({
  table: {
    minWidth: 700,
  },
}));
function CustomizedTables() {
  const classes = useStyles1();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">Số người tham gia</StyledTableCell>
            <StyledTableCell align="right">
              Số lượng kiểm tra đã thực hiện
            </StyledTableCell>
            <StyledTableCell align="right">Thời gian còn lại</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
                <Link to="competition">
                <Button
                  variant="outlined"
                  color="white"
                  className={classes.button}
                  startIcon={<ArrowRightIcon />}
                  size="small"
                  style={{ marginLeft: "10px" }}
                >
                  Tham gia
                </Button>
                </Link>
              </StyledTableCell>

              <StyledTableCell align="right">
                {row.participants}
              </StyledTableCell>
              <StyledTableCell align="right">{row.tests_taken}</StyledTableCell>
              <StyledTableCell align="right">{row.time_left}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
const times = [
  {
    value: "0",
    label: "30 phút",
  },
  {
    value: "1",
    label: "1 giờ",
  },
  {
    value: "2",
    label: "3 giờ",
  },
  {
    value: "3",
    label: "12 giờ",
  },
  {
    value: "4",
    label: "1 ngày",
  },
];
function SelectTextField(props) {
  //console.log(props.orderStatusValue);
  const [time, setTime] = React.useState("0");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <div>
      <TextField
        id="standard-select-currency-native"
        select
        value={time}
        fullWidth
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
      >
        {times.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
        >
          <Tab icon={<PersonIcon />} label="Tham gia" {...a11yProps(0)} />
          <Tab icon={<AddIcon />} label="Tạo mới" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CustomizedTables />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container maxWidth="sm">
          <Box
            bgcolor="white"
            boxShadow="2"
            borderRadius="15px"
            p="8px"
            mt="0px"
          >
            <Typography
              variant="subtitle2"
              display="block"
              gutterBottom
              style={{ textAlign: "left", marginTop: 10 }}
            >
              Thời gian
            </Typography>
            <SelectTextField />
            <FormControlLabel
              control={<Checkbox />}
              label="Tạo một cuộc thi riêng"
              fullWidth
            />
            <br />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddIcon />}
              style={{ marginLeft: "170px", marginTop: "15px" }}
            >
              Bắt đầu cuộc thi
            </Button>
          </Box>
        </Container>
      </TabPanel>
    </div>
  );
}

class Battle extends Component {
  render() {
    return (
      <div>
        <SimpleTabs />
      </div>
    );
  }
}

export default Battle;
