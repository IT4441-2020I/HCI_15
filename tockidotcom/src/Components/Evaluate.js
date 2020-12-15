import React, { useState } from "react";
import {
  List,
  ListItem,
  Typography,
  FormControlLabel,
  Checkbox,
  Divider,
  Button,
  withStyles,

  CardContent,
  FormGroup,
  Card,
  
  ListItemIcon,
  ListItemText,
  CardActions,
  Container,
  Box,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { AccountBox, StarRate, TrendingUp } from "@material-ui/icons";

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const CheckDetails = () => {
  return (
    <List style={{ width: "100%", borderColor: "black" }}>
      <ListItem>
        <ListItemText>
          <h6>
            <span style={{ color: "red" }}>* </span>Chọn thời gian làm bài{" "}
          </h6>
          <FormGroup class="row">
            <FormControlLabel
              class="col-4"
              control={<Checkbox name="checkedA" />}
              label="15 phút"
            />
            <FormControlLabel
              class="col-4"
              control={<Checkbox name="checkedA" />}
              label="30 phút"
            />
            <FormControlLabel
              class="col-4"
              control={<Checkbox name="checkedA" />}
              label="45 phút"
            />
          </FormGroup>
        </ListItemText>
      </ListItem>

      <Divider />
      <ListItem>
        <ListItemText>
          <h6>
            <span style={{ color: "red" }}>* </span>Chọn nội dung làm bài{" "}
          </h6>
          <FormGroup class="row">
            <FormControlLabel
              class="col-4"
              control={<Checkbox name="checkedA" />}
              label="Top 200 từ"
            />
            <FormControlLabel
              class="col-4"
              control={<Checkbox name="checkedA" />}
              label="Top 500 từ"
            />
            <FormControlLabel
              class="col-4"
              control={<Checkbox name="checkedA" />}
              label="Top 1000 từ"
            />
          </FormGroup>
        </ListItemText>
      </ListItem>
    </List>
  );
};
const Evaluate = () => {
  const useStyles = makeStyles((theme) => ({
    button: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "red",
    },
  }));

  return (
    <Box boxShadow="7" p="20px" mt="20px">
      <h3>Bài kiểm tra đánh giá</h3>

      <div class="row">
        <div class="col-3">
          <Card>
            <CardContent>
              <h6>Thông tin cá nhân</h6>
              <Divider />

              <Typography style={{ fontSize: "small", paddingTop: 20 }}>
                <AccountBox />
                <text> Người dùng: hcl15</text>
              </Typography>
              <Typography style={{ fontSize: "small", paddingTop: 10 }}>
                <TrendingUp />
                <text> Trình độ:</text>
                <StarRate style={{ color: "yellow" }} />
                <StarRate style={{ color: "yellow" }} />
                <StarRate style={{ color: "yellow" }} />
                <StarRate />
                <StarRate />
                <text>(123WPM)</text>
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div class="col-6">
          <Box boxShadow="7" p="20px">
            <CardContent>
              <h6>Chọn hình thức kiểm tra</h6>
            </CardContent>

            <Accordion>
              <AccordionSummary>
                <FormControlLabel
                  control={<Checkbox name="checkedA" />}
                  label="Mặc định"
                />
              </AccordionSummary>
            </Accordion>
            <Accordion>
              <AccordionSummary>
                <FormControlLabel
                  control={<Checkbox name="checkedA" />}
                  label="Tự chọn"
                />
              </AccordionSummary>
              <AccordionDetails>
                <CheckDetails />
              </AccordionDetails>
            </Accordion>
          </Box>
          <br />

          <Link
            to="test"
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Button variant="contained" color="primary" size="large">
              Bắt đầu làm bài
            </Button>
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default Evaluate;
