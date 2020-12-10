import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Card,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import CachedIcon from "@material-ui/icons/Cached";
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

function createData(index, username, wpm, tests, ago) {
  return { index, username, wpm, tests, ago };
}

const rows = [
  createData(1, "Le Thanh Phong", 122, 2, "12m"),
  createData(2, "Phung Thanh Trung", 116, 3, "17m"),
  createData(3, "Nguyen Tan Trien", 85, 3, "1h"),
  createData(4, "Phuong Tran Ngoc", 80, 4, "1h"),
  createData(5, "tuyen anh", 66, 1, "2h"),
  createData(6, "Kunny", 64, 1, "2h"),
];

const useStyles1 = makeStyles(() => ({
  table: {
    minWidth: 500,
  },
}));
function CustomizedTables() {
  const classes = useStyles1();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell width="40px"></StyledTableCell>
            <StyledTableCell width="150px" align="left">
              Tên người chơi
            </StyledTableCell>
            <StyledTableCell width="50px" align="right">
              WPM
            </StyledTableCell>
            <StyledTableCell width="70px" align="right">
              Số bài test
            </StyledTableCell>
            <StyledTableCell width="70px" align="right">
              Cách đây
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.index}>
              <StyledTableCell>{row.index}</StyledTableCell>
              <StyledTableCell width="40px">{row.index}</StyledTableCell>
              <StyledTableCell width="150px" align="left">
                {row.username}
              </StyledTableCell>
              <StyledTableCell width="50px" align="right">
                {row.wpm}
              </StyledTableCell>
              <StyledTableCell width="40px" align="right">
                {row.tests}
              </StyledTableCell>
              <StyledTableCell width="40px" align="right">
                {row.ago}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export class Competion extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <Box bgcolor="white" boxShadow="2" borderRadius="2px" p="8px">
            <Typography variant="h4" gutterBottom>
              Cuộc thi
            </Typography>
          </Box>
          <Grid container spacing={3} style={{ marginTop: "15px" }}>
            <Grid item xs={8}>
              <Box
                bgcolor="white"
                boxShadow="2"
                borderRadius="2px"
                p="8px"
                mt="0px"
              >
                <Typography variant="h5" gutterBottom>
                  mưa kỹ thuật bướm tờ giấy trắng quảng nam gió năm phố kinh
                  kịch lịch sử sơ thanh thư kỹ học chăm rán bướm tờ giấy trắng
                  quảng nam gió ta chứng cớ sách báo quần
                </Typography>
              </Box>
              <Box
                bgcolor="lightBlue"
                boxShadow="2"
                borderRadius="10px"
                p="8px"
                mt="10px"
                textAlign="center"
              >
                <TextField
                  id="standard-basic"
                  variant="outlined"
                  autoFocus
                  size="small"
                  placeholder="Gõ vào đây"
                  style={{ width: "400px", backgroundColor: "white" }}
                />
                <Button
                  variant="contained"
                  size="large"
                  color="default"
                  style={{ marginLeft: "5px" }}
                >
                  1:00
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  style={{ marginLeft: "5px" }}
                >
                  <CachedIcon />
                </Button>
              </Box>
              <Box
                bgcolor="white"
                boxShadow="2"
                borderRadius="2px"
                p="8px"
                mt="10px"
                width="250px"
              >
                <Typography
                  align="left"
                  style={{ backgroundColor: "#dcedc8", color: "#558b2f" }}
                >
                  Kết quả
                </Typography>
                <Divider />
                <Grid container spacing={3}>
                  <Grid item xs={7}>
                    <Typography align="left">WPM</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography align="left">56</Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={3}>
                  <Grid item xs={7}>
                    <Typography align="left">Tổ hợp phím</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <span>
                      321(
                      <span style={{ color: "#388e3c" }}>306 </span>
                      <span> | </span>{" "}
                      <span style={{ color: "#f44336" }}>15</span>
                      <span>)</span>
                    </span>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={3}>
                  <Grid item xs={7}>
                    <Typography align="left">Tỉ lệ chính xác</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography align="left">69.96%</Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={3}>
                  <Grid item xs={7}>
                    <Typography align="left">Số từ đúng</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography align="left" style={{ color: "#388e3c" }}>
                      53
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container spacing={3}>
                  <Grid item xs={7}>
                    <Typography align="left">Số từ sai</Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography align="left" style={{ color: "#f44336" }}>
                      3
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography align="left">Bảng xếp hạng</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography align="right">Kết thúc sau: 2:10:15</Typography>
                </Grid>
              </Grid>
              <Typography
                align="center"
                style={{ backgroundColor: "#e0e0e0", padding: "8px" }}
              >
                15 bài test được thực hiện bởi 6 người tham gia
              </Typography>
              <CustomizedTables />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Competion;
