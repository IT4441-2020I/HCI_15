import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Chi tiết lỗi
              </Typography>
              <Table
                size="small"
                aria-label="purchases"
                style={{ backgroundColor: "rgb(221, 221, 221)" }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Từ gõ sai</TableCell>
                    <TableCell>Quy tắc gõ</TableCell>
                    <TableCell align="right">Số lần gõ sai</TableCell>
                    <TableCell align="right">Tỉ lệ sai</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      ngu
                    </TableCell>
                    <TableCell>KR-IU</TableCell>
                    <TableCell align="right">5</TableCell>
                    <TableCell align="right">100%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "1",
    "Luyện gõ theo âm (âm tiết đầu)",
    5,
    95,
    "Wed Dec 02 2020 19:26:03",
    5
  ),
  createData(
    "1",
    "Luyện gõ theo âm (âm tiết đầu)",
    6,
    20,
    "Thu Dec 03 2020 19:26:03",
    4.99
  ),
  createData(
    "3",
    "Luyện gõ theo âm (âm tiết đầu)",
    5,
    30,
    "Sun Feb 18 2020 19:26:03",
    3.79
  ),
  createData(
    "4",
    "Luyện gõ theo âm (âm tiết đầu)",
    3,
    65,
    "Fri Dec 01 2020 19:26:03",
    2.5
  ),
  createData(
    "5",
    "Luyện gõ theo âm (âm tiết đầu)",
    7,
    70,
    "Tue Nov 02 2020 19:26:03",
    1.5
  ),
];

const useStyles1 = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flex: 1,
    position: "relative",
    minHeight: 200,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
}));

export default function HistoryPractice() {
  const classess = useStyles();
  const classess1 = useStyles1();
  const [age, setAge] = React.useState("");
  const [choice, setChoice] = React.useState(1);
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card>
        <CardContent>
        <div style={{ display: "flex" }}>
      <div style={{ width: "300px",marginRight:"50px" }}>
        <Card>
          <CardContent>
            <FormControl
              className={classess1.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel id="demo-simple-select-label">
                Chọn thống kê theo
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChangeAge}
              >
                <MenuItem value="Gõ lẫn âm" onClick={() => setChoice(1)}>
                  Thời gian
                </MenuItem>
                <MenuItem value="Âm đầu" onClick={() => setChoice(2)}>
                  Độ chính xác
                </MenuItem>
                <MenuItem value="Âm chính" onClick={() => setChoice(3)}>
                  Tốc độ gõ
                </MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className={classess.root}>
          <CardContent>
            <Typography>
              <h1>Lịch sử luyện tập cá nhân</h1>
              <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                  <TableHead
                    style={{ backgroundColor: "#3f51b5", color: "white" }}
                  >
                    <TableRow style={{ color: "white" }}>
                      <TableCell />
                      <TableCell style={{ color: "white" }}>
                        Bài luyện tập
                      </TableCell>
                      <TableCell style={{ color: "white" }} align="right">
                        Loại bài
                      </TableCell>
                      <TableCell style={{ color: "white" }} align="right">
                        Thời gian hoàn thành bài(phút)
                      </TableCell>
                      <TableCell style={{ color: "white" }} align="right">
                        Điểm số(/100)
                      </TableCell>
                      <TableCell style={{ color: "white" }} align="right">
                        Thời gian
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <Row
                        key={row.name}
                        row={row}
                        style={{ fontWeight: "bold" }}
                      />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
        </CardContent>
    </Card>
  );
}
