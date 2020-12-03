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
  createData("Phương Trung Đức", 1, 5, 95, "Wed Dec 02 2020 19:26:03", 5),
  createData("Phạm Mạnh Tuấn", 2, 6, 20, "Thu Dec 03 2020 19:26:03", 4.99),
  createData("Hoàng Quốc Trung", 5, 5, 30, "Sun Feb 18 2020 19:26:03", 3.79),
  createData("Lý Trung Kiên", 305, 3, 65, "Fri Dec 01 2020 19:26:03", 2.5),
  createData("Lê Thị Huế", 356, 7, 70, "Tue Nov 02 2020 19:26:03", 1.5),
];

export default function CollapsibleTable() {
  return (
    <div>
      <h1>Lịch sử luyện gõ</h1>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead style={{ backgroundColor: "#3f51b5", color: "white" }}>
            <TableRow style={{ color: "white" }}>
              <TableCell />
              <TableCell style={{ color: "white" }}>Người dùng</TableCell>
              <TableCell style={{ color: "white" }} align="right">
                Bài luyện tập
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
              <Row key={row.name} row={row} style={{ fontWeight: "bold" }} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
