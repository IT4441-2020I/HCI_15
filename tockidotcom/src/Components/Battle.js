import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { BrowserRouter as Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
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
    <Card>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead style={{ backgroundColor: "#3f51b5", color: "white" }}>
              <TableRow>
                <TableCell></TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Số người tham gia
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Số lượng kiểm tra đã thực hiện
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Thời gian còn lại
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <TableCell component="th" scope="row">
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
                  </TableCell>
                  <TableCell align="right">{row.participants}</TableCell>
                  <TableCell align="right">{row.tests_taken}</TableCell>
                  <TableCell align="right">{row.time_left}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

class Battle extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h3">Danh sách các cuộc thi</Typography>
          <CustomizedTables />
        </CardContent>
      </Card>
    );
  }
}

export default Battle;
