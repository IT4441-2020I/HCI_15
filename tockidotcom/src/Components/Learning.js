import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Row, Col } from "antd";

import "../keyboard.css";

const listKeyBoard1 = ["S", "K", "R", "N", "H", "*", "W", "J", "N", "T"];
const listKeyBoard2 = ["T", "P", "H", "N", "S", "I", "Y", "J", "G", "K"];

const KeyBoard = (props) => {
  return (
    <div
      style={{
        height: 50,
        width: 30,
        backgroundColor: "black",
        color: "white",
        fontSize: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginRight: 8,
        marginBottom: 2,
      }}
    >
      {props.item}
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
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

export default function Learning() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [age, setAge] = React.useState("");

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <AddIcon />,
      label: "Add",
    },
    {
      color: "secondary",
      className: classes.fab,
      icon: <EditIcon />,
      label: "Edit",
    },
    {
      color: "inherit",
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: "Expand",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="Học gõ phím" {...a11yProps(0)} />
          <Tab label="Học gõ âm tiết" {...a11yProps(1)} />
          <Tab label="Học gõ từ" {...a11yProps(2)} />
          <Tab label="Học gõ câu" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div style={{ height: "75vh", margin: "-2vh" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                height: "7vh",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "7.75%",
                  height: "100%",
                  textAlign: "center",
                  backgroundColor: "#3f51b5",
                  lineHeight: "7vh",
                  borderRadius: "2vh",
                  color: "white",
                }}
              >
                O
              </div>
            </div>
            <div>
              <div>
                <Button style={{ backgroundColor: "wheat" }}>
                  Chuyển phím khác <ArrowForwardIosIcon />
                </Button>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div class="keyboard">
                <div class="keyboard__row keyboard__row--h1">
                  <div data-key="27" class="key--word">
                    <span>esc</span>
                  </div>
                  <div data-key="112" class="key--fn">
                    <span>F1</span>
                  </div>
                  <div data-key="113" class="key--fn">
                    <span>F2</span>
                  </div>
                  <div data-key="114" class="key--fn">
                    <span>F3</span>
                  </div>
                  <div data-key="115" class="key--fn">
                    <span>F4</span>
                  </div>
                  <div data-key="116" class="key--fn">
                    <span>F5</span>
                  </div>
                  <div data-key="117" class="key--fn">
                    <span>F6</span>
                  </div>
                  <div data-key="118" class="key--fn">
                    <span>F7</span>
                  </div>
                  <div data-key="119" class="key--fn">
                    <span>F8</span>
                  </div>
                  <div data-key="120" class="key--fn">
                    <span>F9</span>
                  </div>
                  <div data-key="121" class="key--fn">
                    <span>F10</span>
                  </div>
                  <div data-key="122" class="key--fn">
                    <span>F11</span>
                  </div>
                  <div data-key="123" class="key--fn">
                    <span>F12</span>
                  </div>
                  <div data-key="n/a" class="key--word">
                    <span>pwr</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--double" data-key="192">
                    <div>~</div>
                    <div>`</div>
                  </div>
                  <div class="key--double" data-key="49">
                    <div>!</div>
                    <div>1</div>
                  </div>
                  <div class="key--double" data-key="50">
                    <div>@</div>
                    <div>2</div>
                  </div>
                  <div class="key--double" data-key="51">
                    <div>#</div>
                    <div>3</div>
                  </div>
                  <div class="key--double" data-key="52">
                    <div>$</div>
                    <div>4</div>
                  </div>
                  <div class="key--double" data-key="53">
                    <div>%</div>
                    <div>5</div>
                  </div>
                  <div class="key--double" data-key="54">
                    <div>^</div>
                    <div>6</div>
                  </div>
                  <div class="key--double" data-key="55">
                    <div>&</div>
                    <div>7</div>
                  </div>
                  <div class="key--double" data-key="56">
                    <div>*</div>
                    <div>8</div>
                  </div>
                  <div class="key--double" data-key="57">
                    <div>(</div>
                    <div>9</div>
                  </div>
                  <div class="key--double" data-key="48">
                    <div>)</div>
                    <div>0</div>
                  </div>
                  <div class="key--double" data-key="189">
                    <div>_</div>
                    <div>-</div>
                  </div>
                  <div class="key--double" data-key="187">
                    <div>+</div>
                    <div>=</div>
                  </div>
                  <div class="key--bottom-right key--word key--w4" data-key="8">
                    <span>delete</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w4" data-key="9">
                    <span>tab</span>
                  </div>
                  <div class="key--letter" data-char="Q">
                    Q
                  </div>
                  <div class="key--letter" data-char="W">
                    W
                  </div>
                  <div class="key--letter" data-char="E">
                    E
                  </div>
                  <div class="key--letter" data-char="R">
                    R
                  </div>
                  <div class="key--letter" data-char="T">
                    T
                  </div>
                  <div class="key--letter" data-char="Y">
                    Y
                  </div>
                  <div class="key--letter" data-char="U">
                    U
                  </div>
                  <div class="key--letter" data-char="I">
                    I
                  </div>
                  <div class="key--letter" data-char="O">
                    O
                  </div>
                  <div class="key--letter" data-char="P">
                    P
                  </div>
                  <div class="key--double" data-key="219" data-char="{[">
                    <div></div>
                    <div>[</div>
                  </div>
                  <div class="key--double" data-key="221" data-char="}]">
                    <div></div>
                    <div>]</div>
                  </div>
                  <div class="key--double" data-key="220" data-char="|\">
                    <div>|</div>
                    <div>\</div>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w5" data-key="20">
                    <span>caps lock</span>
                  </div>
                  <div class="key--letter" data-char="A">
                    A
                  </div>
                  <div class="key--letter" data-char="S">
                    S
                  </div>
                  <div class="key--letter" data-char="D">
                    D
                  </div>
                  <div class="key--letter" data-char="F">
                    F
                  </div>
                  <div class="key--letter" data-char="G">
                    G
                  </div>
                  <div class="key--letter" data-char="H">
                    H
                  </div>
                  <div class="key--letter" data-char="J">
                    J
                  </div>
                  <div class="key--letter" data-char="K">
                    K
                  </div>
                  <div class="key--letter" data-char="L">
                    L
                  </div>
                  <div class="key--double" data-key="186">
                    <div>:</div>
                    <div>;</div>
                  </div>
                  <div class="key--double" data-key="222">
                    <div>"</div>
                    <div>'</div>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w5"
                    data-key="13"
                  >
                    <span>return</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w6" data-key="16">
                    <span>shift</span>
                  </div>
                  <div class="key--letter" data-char="Z">
                    Z
                  </div>
                  <div class="key--letter" data-char="X">
                    X
                  </div>
                  <div class="key--letter" data-char="C">
                    C
                  </div>
                  <div class="key--letter" data-char="V">
                    V
                  </div>
                  <div class="key--letter" data-char="B">
                    B
                  </div>
                  <div class="key--letter" data-char="N">
                    N
                  </div>
                  <div class="key--letter" data-char="M">
                    M
                  </div>
                  <div class="key--double" data-key="188">
                    <div>&lt;</div>
                    <div>,</div>
                  </div>
                  <div class="key--double" data-key="190">
                    <div>&gt;</div>
                    <div>.</div>
                  </div>
                  <div class="key--double" data-key="191">
                    <div>?</div>
                    <div>/</div>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w6"
                    data-key="16-R"
                  >
                    <span>shift</span>
                  </div>
                </div>
                <div class="keyboard__row keyboard__row--h3">
                  <div class="key--bottom-left key--word">
                    <span>fn</span>
                  </div>
                  <div class="key--bottom-left key--word key--w1" data-key="17">
                    <span>control</span>
                  </div>
                  <div class="key--bottom-left key--word key--w1" data-key="18">
                    <span>option</span>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w3"
                    data-key="91"
                  >
                    <span>command</span>
                  </div>
                  <div
                    class="key--double key--right key--space"
                    data-key="32"
                    data-char=" "
                  >
                    &nbsp;
                  </div>
                  <div
                    class="key--bottom-left key--word key--w3"
                    data-key="93-R"
                  >
                    <span>command</span>
                  </div>
                  <div
                    class="key--bottom-left key--word key--w1"
                    data-key="18-R"
                  >
                    <span>option</span>
                  </div>
                  <div data-key="37" class="key--arrow">
                    <span>&#9664;</span>
                  </div>
                  <div class="key--double key--arrow--tall" data-key="38">
                    <div>&#9650;</div>
                    <div>&#9660;</div>
                  </div>
                  <div data-key="39" class="key--arrow">
                    <span>&#9654;</span>
                  </div>
                </div>
              </div>
              <div style={{marginTop: '4vh'}}>
                <Row>
                  {/* <Col span="6"></Col> */}
                  <Col span="24">
                    <div
                      style={{
                        height: 30,
                        width: 372,
                        backgroundColor: "#67757c",
                        fontSize: 18,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 5,
                        marginRight: 8,
                        marginBottom: 2,
                      }}
                    ></div>

                    <div style={{ display: "flex" }}>
                      {listKeyBoard1.map((item, id) => (
                        <KeyBoard key={id} item={item} />
                      ))}
                    </div>

                    <div style={{ display: "flex" }}>
                      {listKeyBoard2.map((item, id) => (
                        <KeyBoard key={id} item={item} />
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 10,
                      }}
                    >
                      <KeyBoard item="U" />
                      <KeyBoard item="O" />
                      <KeyBoard item="E" />
                      <KeyBoard item="A" />
                    </div>
                  </Col>
                  {/* <Col span="6"></Col> */}
                </Row>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <div style={{ height: "75vh", margin: "-2vh" }}>
            <div>
              <FormControl
                className={classes.formControl}
                style={{ width: "30%" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Chọn kiểu gõ âm tiết
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChangeAge}
                >
                  <MenuItem value="Gõ lẫn âm">Gõ lẫn âm</MenuItem>
                  <MenuItem value="Âm đầu">Âm đầu</MenuItem>
                  <MenuItem value="Âm chính">Âm chính</MenuItem>
                  <MenuItem value="Âm cuối">Âm cuối</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                height: "7vh",
                justifyContent: "center",
                marginTop: "2vh",
                marginBottom: "2vh",
              }}
            >
              <div
                style={{
                  width: "7.75%",
                  height: "100%",
                  textAlign: "center",
                  backgroundColor: "#3f51b5",
                  lineHeight: "7vh",
                  borderRadius: "2vh",
                  color: "white",
                }}
              >
                OẶ
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <form noValidate autoComplete="off">
                <TextField
                  variant="outlined"
                  style={{ minHeight: "75px", width: "100%" }}
                />
              </form>
            </div>
            <div>
              <div>
                <Button style={{ backgroundColor: "wheat" }}>
                  Chuyển âm mới <ArrowForwardIosIcon />
                </Button>
              </div>
            </div>
            <div>
              <div class="keyboard">
                <div class="keyboard__row keyboard__row--h1">
                  <div data-key="27" class="key--word">
                    <span>esc</span>
                  </div>
                  <div data-key="112" class="key--fn">
                    <span>F1</span>
                  </div>
                  <div data-key="113" class="key--fn">
                    <span>F2</span>
                  </div>
                  <div data-key="114" class="key--fn">
                    <span>F3</span>
                  </div>
                  <div data-key="115" class="key--fn">
                    <span>F4</span>
                  </div>
                  <div data-key="116" class="key--fn">
                    <span>F5</span>
                  </div>
                  <div data-key="117" class="key--fn">
                    <span>F6</span>
                  </div>
                  <div data-key="118" class="key--fn">
                    <span>F7</span>
                  </div>
                  <div data-key="119" class="key--fn">
                    <span>F8</span>
                  </div>
                  <div data-key="120" class="key--fn">
                    <span>F9</span>
                  </div>
                  <div data-key="121" class="key--fn">
                    <span>F10</span>
                  </div>
                  <div data-key="122" class="key--fn">
                    <span>F11</span>
                  </div>
                  <div data-key="123" class="key--fn">
                    <span>F12</span>
                  </div>
                  <div data-key="n/a" class="key--word">
                    <span>pwr</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--double" data-key="192">
                    <div>~</div>
                    <div>`</div>
                  </div>
                  <div class="key--double" data-key="49">
                    <div>!</div>
                    <div>1</div>
                  </div>
                  <div class="key--double" data-key="50">
                    <div>@</div>
                    <div>2</div>
                  </div>
                  <div class="key--double" data-key="51">
                    <div>#</div>
                    <div>3</div>
                  </div>
                  <div class="key--double" data-key="52">
                    <div>$</div>
                    <div>4</div>
                  </div>
                  <div class="key--double" data-key="53">
                    <div>%</div>
                    <div>5</div>
                  </div>
                  <div class="key--double" data-key="54">
                    <div>^</div>
                    <div>6</div>
                  </div>
                  <div class="key--double" data-key="55">
                    <div>&</div>
                    <div>7</div>
                  </div>
                  <div class="key--double" data-key="56">
                    <div>*</div>
                    <div>8</div>
                  </div>
                  <div class="key--double" data-key="57">
                    <div>(</div>
                    <div>9</div>
                  </div>
                  <div class="key--double" data-key="48">
                    <div>)</div>
                    <div>0</div>
                  </div>
                  <div class="key--double" data-key="189">
                    <div>_</div>
                    <div>-</div>
                  </div>
                  <div class="key--double" data-key="187">
                    <div>+</div>
                    <div>=</div>
                  </div>
                  <div class="key--bottom-right key--word key--w4" data-key="8">
                    <span>delete</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w4" data-key="9">
                    <span>tab</span>
                  </div>
                  <div class="key--letter" data-char="Q">
                    Q
                  </div>
                  <div class="key--letter" data-char="W">
                    W
                  </div>
                  <div class="key--letter" data-char="E">
                    E
                  </div>
                  <div class="key--letter" data-char="R">
                    R
                  </div>
                  <div class="key--letter" data-char="T">
                    T
                  </div>
                  <div class="key--letter" data-char="Y">
                    Y
                  </div>
                  <div class="key--letter" data-char="U">
                    U
                  </div>
                  <div class="key--letter" data-char="I">
                    I
                  </div>
                  <div class="key--letter" data-char="O">
                    O
                  </div>
                  <div class="key--letter" data-char="P">
                    P
                  </div>
                  <div class="key--double" data-key="219" data-char="{[">
                    <div></div>
                    <div>[</div>
                  </div>
                  <div class="key--double" data-key="221" data-char="}]">
                    <div></div>
                    <div>]</div>
                  </div>
                  <div class="key--double" data-key="220" data-char="|\">
                    <div>|</div>
                    <div>\</div>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w5" data-key="20">
                    <span>caps lock</span>
                  </div>
                  <div class="key--letter" data-char="A">
                    A
                  </div>
                  <div class="key--letter" data-char="S">
                    S
                  </div>
                  <div class="key--letter" data-char="D">
                    D
                  </div>
                  <div class="key--letter" data-char="F">
                    F
                  </div>
                  <div class="key--letter" data-char="G">
                    G
                  </div>
                  <div class="key--letter" data-char="H">
                    H
                  </div>
                  <div class="key--letter" data-char="J">
                    J
                  </div>
                  <div class="key--letter" data-char="K">
                    K
                  </div>
                  <div class="key--letter" data-char="L">
                    L
                  </div>
                  <div class="key--double" data-key="186">
                    <div>:</div>
                    <div>;</div>
                  </div>
                  <div class="key--double" data-key="222">
                    <div>"</div>
                    <div>'</div>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w5"
                    data-key="13"
                  >
                    <span>return</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w6" data-key="16">
                    <span>shift</span>
                  </div>
                  <div class="key--letter" data-char="Z">
                    Z
                  </div>
                  <div class="key--letter" data-char="X">
                    X
                  </div>
                  <div class="key--letter" data-char="C">
                    C
                  </div>
                  <div class="key--letter" data-char="V">
                    V
                  </div>
                  <div class="key--letter" data-char="B">
                    B
                  </div>
                  <div class="key--letter" data-char="N">
                    N
                  </div>
                  <div class="key--letter" data-char="M">
                    M
                  </div>
                  <div class="key--double" data-key="188">
                    <div>&lt;</div>
                    <div>,</div>
                  </div>
                  <div class="key--double" data-key="190">
                    <div>&gt;</div>
                    <div>.</div>
                  </div>
                  <div class="key--double" data-key="191">
                    <div>?</div>
                    <div>/</div>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w6"
                    data-key="16-R"
                  >
                    <span>shift</span>
                  </div>
                </div>
                <div class="keyboard__row keyboard__row--h3">
                  <div class="key--bottom-left key--word">
                    <span>fn</span>
                  </div>
                  <div class="key--bottom-left key--word key--w1" data-key="17">
                    <span>control</span>
                  </div>
                  <div class="key--bottom-left key--word key--w1" data-key="18">
                    <span>option</span>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w3"
                    data-key="91"
                  >
                    <span>command</span>
                  </div>
                  <div
                    class="key--double key--right key--space"
                    data-key="32"
                    data-char=" "
                  >
                    &nbsp;
                  </div>
                  <div
                    class="key--bottom-left key--word key--w3"
                    data-key="93-R"
                  >
                    <span>command</span>
                  </div>
                  <div
                    class="key--bottom-left key--word key--w1"
                    data-key="18-R"
                  >
                    <span>option</span>
                  </div>
                  <div data-key="37" class="key--arrow">
                    <span>&#9664;</span>
                  </div>
                  <div class="key--double key--arrow--tall" data-key="38">
                    <div>&#9650;</div>
                    <div>&#9660;</div>
                  </div>
                  <div data-key="39" class="key--arrow">
                    <span>&#9654;</span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <div style={{ height: "75vh", margin: "-2vh" }}>
            <div>
              <FormControl
                className={classes.formControl}
                style={{ width: "30%" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Chọn kiểu gõ từ
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChangeAge}
                >
                  <MenuItem value="Gõ từ bất kỳ">Gõ từ bất kỳ</MenuItem>
                  <MenuItem value="Gõ từ âm chính">Gõ từ âm chính</MenuItem>
                  <MenuItem value="Gõ từ âm đầu + âm chính">
                    Gõ từ âm đầu + âm chính
                  </MenuItem>
                  <MenuItem value="Gõ từ âm chính + âm cuối">
                    Gõ từ âm chính + âm cuối
                  </MenuItem>
                  <MenuItem value="Gõ từ âm đầu + âm chính + âm cuối">
                    Gõ từ âm đầu + âm chính + âm cuối
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                height: "7vh",
                justifyContent: "center",
                marginTop: "2vh",
                marginBottom: "2vh",
              }}
            >
              <div
                style={{
                  width: "7.75%",
                  height: "100%",
                  textAlign: "center",
                  backgroundColor: "#3f51b5",
                  lineHeight: "7vh",
                  borderRadius: "2vh",
                  color: "white",
                }}
              >
                HOẶC
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <form noValidate autoComplete="off">
                <TextField
                  variant="outlined"
                  style={{ minHeight: "75px", width: "100%" }}
                />
              </form>
            </div>
            <div>
              <div>
                <Button style={{ backgroundColor: "wheat" }}>
                  Chuyển từ mới
                  <ArrowForwardIosIcon />
                </Button>
              </div>
            </div>
            <div>
              <div class="keyboard">
                <div class="keyboard__row keyboard__row--h1">
                  <div data-key="27" class="key--word">
                    <span>esc</span>
                  </div>
                  <div data-key="112" class="key--fn">
                    <span>F1</span>
                  </div>
                  <div data-key="113" class="key--fn">
                    <span>F2</span>
                  </div>
                  <div data-key="114" class="key--fn">
                    <span>F3</span>
                  </div>
                  <div data-key="115" class="key--fn">
                    <span>F4</span>
                  </div>
                  <div data-key="116" class="key--fn">
                    <span>F5</span>
                  </div>
                  <div data-key="117" class="key--fn">
                    <span>F6</span>
                  </div>
                  <div data-key="118" class="key--fn">
                    <span>F7</span>
                  </div>
                  <div data-key="119" class="key--fn">
                    <span>F8</span>
                  </div>
                  <div data-key="120" class="key--fn">
                    <span>F9</span>
                  </div>
                  <div data-key="121" class="key--fn">
                    <span>F10</span>
                  </div>
                  <div data-key="122" class="key--fn">
                    <span>F11</span>
                  </div>
                  <div data-key="123" class="key--fn">
                    <span>F12</span>
                  </div>
                  <div data-key="n/a" class="key--word">
                    <span>pwr</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--double" data-key="192">
                    <div>~</div>
                    <div>`</div>
                  </div>
                  <div class="key--double" data-key="49">
                    <div>!</div>
                    <div>1</div>
                  </div>
                  <div class="key--double" data-key="50">
                    <div>@</div>
                    <div>2</div>
                  </div>
                  <div class="key--double" data-key="51">
                    <div>#</div>
                    <div>3</div>
                  </div>
                  <div class="key--double" data-key="52">
                    <div>$</div>
                    <div>4</div>
                  </div>
                  <div class="key--double" data-key="53">
                    <div>%</div>
                    <div>5</div>
                  </div>
                  <div class="key--double" data-key="54">
                    <div>^</div>
                    <div>6</div>
                  </div>
                  <div class="key--double" data-key="55">
                    <div>&</div>
                    <div>7</div>
                  </div>
                  <div class="key--double" data-key="56">
                    <div>*</div>
                    <div>8</div>
                  </div>
                  <div class="key--double" data-key="57">
                    <div>(</div>
                    <div>9</div>
                  </div>
                  <div class="key--double" data-key="48">
                    <div>)</div>
                    <div>0</div>
                  </div>
                  <div class="key--double" data-key="189">
                    <div>_</div>
                    <div>-</div>
                  </div>
                  <div class="key--double" data-key="187">
                    <div>+</div>
                    <div>=</div>
                  </div>
                  <div class="key--bottom-right key--word key--w4" data-key="8">
                    <span>delete</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w4" data-key="9">
                    <span>tab</span>
                  </div>
                  <div class="key--letter" data-char="Q">
                    Q
                  </div>
                  <div class="key--letter" data-char="W">
                    W
                  </div>
                  <div class="key--letter" data-char="E">
                    E
                  </div>
                  <div class="key--letter" data-char="R">
                    R
                  </div>
                  <div class="key--letter" data-char="T">
                    T
                  </div>
                  <div class="key--letter" data-char="Y">
                    Y
                  </div>
                  <div class="key--letter" data-char="U">
                    U
                  </div>
                  <div class="key--letter" data-char="I">
                    I
                  </div>
                  <div class="key--letter" data-char="O">
                    O
                  </div>
                  <div class="key--letter" data-char="P">
                    P
                  </div>
                  <div class="key--double" data-key="219" data-char="{[">
                    <div></div>
                    <div>[</div>
                  </div>
                  <div class="key--double" data-key="221" data-char="}]">
                    <div></div>
                    <div>]</div>
                  </div>
                  <div class="key--double" data-key="220" data-char="|\">
                    <div>|</div>
                    <div>\</div>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w5" data-key="20">
                    <span>caps lock</span>
                  </div>
                  <div class="key--letter" data-char="A">
                    A
                  </div>
                  <div class="key--letter" data-char="S">
                    S
                  </div>
                  <div class="key--letter" data-char="D">
                    D
                  </div>
                  <div class="key--letter" data-char="F">
                    F
                  </div>
                  <div class="key--letter" data-char="G">
                    G
                  </div>
                  <div class="key--letter" data-char="H">
                    H
                  </div>
                  <div class="key--letter" data-char="J">
                    J
                  </div>
                  <div class="key--letter" data-char="K">
                    K
                  </div>
                  <div class="key--letter" data-char="L">
                    L
                  </div>
                  <div class="key--double" data-key="186">
                    <div>:</div>
                    <div>;</div>
                  </div>
                  <div class="key--double" data-key="222">
                    <div>"</div>
                    <div>'</div>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w5"
                    data-key="13"
                  >
                    <span>return</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w6" data-key="16">
                    <span>shift</span>
                  </div>
                  <div class="key--letter" data-char="Z">
                    Z
                  </div>
                  <div class="key--letter" data-char="X">
                    X
                  </div>
                  <div class="key--letter" data-char="C">
                    C
                  </div>
                  <div class="key--letter" data-char="V">
                    V
                  </div>
                  <div class="key--letter" data-char="B">
                    B
                  </div>
                  <div class="key--letter" data-char="N">
                    N
                  </div>
                  <div class="key--letter" data-char="M">
                    M
                  </div>
                  <div class="key--double" data-key="188">
                    <div>&lt;</div>
                    <div>,</div>
                  </div>
                  <div class="key--double" data-key="190">
                    <div>&gt;</div>
                    <div>.</div>
                  </div>
                  <div class="key--double" data-key="191">
                    <div>?</div>
                    <div>/</div>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w6"
                    data-key="16-R"
                  >
                    <span>shift</span>
                  </div>
                </div>
                <div class="keyboard__row keyboard__row--h3">
                  <div class="key--bottom-left key--word">
                    <span>fn</span>
                  </div>
                  <div class="key--bottom-left key--word key--w1" data-key="17">
                    <span>control</span>
                  </div>
                  <div class="key--bottom-left key--word key--w1" data-key="18">
                    <span>option</span>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w3"
                    data-key="91"
                  >
                    <span>command</span>
                  </div>
                  <div
                    class="key--double key--right key--space"
                    data-key="32"
                    data-char=" "
                  >
                    &nbsp;
                  </div>
                  <div
                    class="key--bottom-left key--word key--w3"
                    data-key="93-R"
                  >
                    <span>command</span>
                  </div>
                  <div
                    class="key--bottom-left key--word key--w1"
                    data-key="18-R"
                  >
                    <span>option</span>
                  </div>
                  <div data-key="37" class="key--arrow">
                    <span>&#9664;</span>
                  </div>
                  <div class="key--double key--arrow--tall" data-key="38">
                    <div>&#9650;</div>
                    <div>&#9660;</div>
                  </div>
                  <div data-key="39" class="key--arrow">
                    <span>&#9654;</span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <div style={{ height: "75vh", margin: "-2vh" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                height: "7vh",
                justifyContent: "center",
                marginTop: "2vh",
                marginBottom: "2vh",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  backgroundColor: "#DEDEDE",
                  lineHeight: "7vh",
                  borderRadius: "2vh",
                  color: "black",
                }}
              >
                Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn,
                núi có thể mòn song chân lý ấy không bao giờ thay đổi.
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TextField
                variant="outlined"
                style={{ minHeight: "75px", width: "100vh", display: "flex" }}
              />
            </div>
            <div>
              <div>
                <Button style={{ backgroundColor: "wheat" }}>
                  Chuyển câu khác
                  <ArrowForwardIosIcon />
                </Button>
              </div>
            </div>
            <div>
              <div class="keyboard">
                <div class="keyboard__row keyboard__row--h1">
                  <div data-key="27" class="key--word">
                    <span>esc</span>
                  </div>
                  <div data-key="112" class="key--fn">
                    <span>F1</span>
                  </div>
                  <div data-key="113" class="key--fn">
                    <span>F2</span>
                  </div>
                  <div data-key="114" class="key--fn">
                    <span>F3</span>
                  </div>
                  <div data-key="115" class="key--fn">
                    <span>F4</span>
                  </div>
                  <div data-key="116" class="key--fn">
                    <span>F5</span>
                  </div>
                  <div data-key="117" class="key--fn">
                    <span>F6</span>
                  </div>
                  <div data-key="118" class="key--fn">
                    <span>F7</span>
                  </div>
                  <div data-key="119" class="key--fn">
                    <span>F8</span>
                  </div>
                  <div data-key="120" class="key--fn">
                    <span>F9</span>
                  </div>
                  <div data-key="121" class="key--fn">
                    <span>F10</span>
                  </div>
                  <div data-key="122" class="key--fn">
                    <span>F11</span>
                  </div>
                  <div data-key="123" class="key--fn">
                    <span>F12</span>
                  </div>
                  <div data-key="n/a" class="key--word">
                    <span>pwr</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--double" data-key="192">
                    <div>~</div>
                    <div>`</div>
                  </div>
                  <div class="key--double" data-key="49">
                    <div>!</div>
                    <div>1</div>
                  </div>
                  <div class="key--double" data-key="50">
                    <div>@</div>
                    <div>2</div>
                  </div>
                  <div class="key--double" data-key="51">
                    <div>#</div>
                    <div>3</div>
                  </div>
                  <div class="key--double" data-key="52">
                    <div>$</div>
                    <div>4</div>
                  </div>
                  <div class="key--double" data-key="53">
                    <div>%</div>
                    <div>5</div>
                  </div>
                  <div class="key--double" data-key="54">
                    <div>^</div>
                    <div>6</div>
                  </div>
                  <div class="key--double" data-key="55">
                    <div>&</div>
                    <div>7</div>
                  </div>
                  <div class="key--double" data-key="56">
                    <div>*</div>
                    <div>8</div>
                  </div>
                  <div class="key--double" data-key="57">
                    <div>(</div>
                    <div>9</div>
                  </div>
                  <div class="key--double" data-key="48">
                    <div>)</div>
                    <div>0</div>
                  </div>
                  <div class="key--double" data-key="189">
                    <div>_</div>
                    <div>-</div>
                  </div>
                  <div class="key--double" data-key="187">
                    <div>+</div>
                    <div>=</div>
                  </div>
                  <div class="key--bottom-right key--word key--w4" data-key="8">
                    <span>delete</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w4" data-key="9">
                    <span>tab</span>
                  </div>
                  <div class="key--letter" data-char="Q">
                    Q
                  </div>
                  <div class="key--letter" data-char="W">
                    W
                  </div>
                  <div class="key--letter" data-char="E">
                    E
                  </div>
                  <div class="key--letter" data-char="R">
                    R
                  </div>
                  <div class="key--letter" data-char="T">
                    T
                  </div>
                  <div class="key--letter" data-char="Y">
                    Y
                  </div>
                  <div class="key--letter" data-char="U">
                    U
                  </div>
                  <div class="key--letter" data-char="I">
                    I
                  </div>
                  <div class="key--letter" data-char="O">
                    O
                  </div>
                  <div class="key--letter" data-char="P">
                    P
                  </div>
                  <div class="key--double" data-key="219" data-char="{[">
                    <div></div>
                    <div>[</div>
                  </div>
                  <div class="key--double" data-key="221" data-char="}]">
                    <div></div>
                    <div>]</div>
                  </div>
                  <div class="key--double" data-key="220" data-char="|\">
                    <div>|</div>
                    <div>\</div>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w5" data-key="20">
                    <span>caps lock</span>
                  </div>
                  <div class="key--letter" data-char="A">
                    A
                  </div>
                  <div class="key--letter" data-char="S">
                    S
                  </div>
                  <div class="key--letter" data-char="D">
                    D
                  </div>
                  <div class="key--letter" data-char="F">
                    F
                  </div>
                  <div class="key--letter" data-char="G">
                    G
                  </div>
                  <div class="key--letter" data-char="H">
                    H
                  </div>
                  <div class="key--letter" data-char="J">
                    J
                  </div>
                  <div class="key--letter" data-char="K">
                    K
                  </div>
                  <div class="key--letter" data-char="L">
                    L
                  </div>
                  <div class="key--double" data-key="186">
                    <div>:</div>
                    <div>;</div>
                  </div>
                  <div class="key--double" data-key="222">
                    <div>"</div>
                    <div>'</div>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w5"
                    data-key="13"
                  >
                    <span>return</span>
                  </div>
                </div>
                <div class="keyboard__row">
                  <div class="key--bottom-left key--word key--w6" data-key="16">
                    <span>shift</span>
                  </div>
                  <div class="key--letter" data-char="Z">
                    Z
                  </div>
                  <div class="key--letter" data-char="X">
                    X
                  </div>
                  <div class="key--letter" data-char="C">
                    C
                  </div>
                  <div class="key--letter" data-char="V">
                    V
                  </div>
                  <div class="key--letter" data-char="B">
                    B
                  </div>
                  <div class="key--letter" data-char="N">
                    N
                  </div>
                  <div class="key--letter" data-char="M">
                    M
                  </div>
                  <div class="key--double" data-key="188">
                    <div>&lt;</div>
                    <div>,</div>
                  </div>
                  <div class="key--double" data-key="190">
                    <div>&gt;</div>
                    <div>.</div>
                  </div>
                  <div class="key--double" data-key="191">
                    <div>?</div>
                    <div>/</div>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w6"
                    data-key="16-R"
                  >
                    <span>shift</span>
                  </div>
                </div>
                <div class="keyboard__row keyboard__row--h3">
                  <div class="key--bottom-left key--word">
                    <span>fn</span>
                  </div>
                  <div class="key--bottom-left key--word key--w1" data-key="17">
                    <span>control</span>
                  </div>
                  <div class="key--bottom-left key--word key--w1" data-key="18">
                    <span>option</span>
                  </div>
                  <div
                    class="key--bottom-right key--word key--w3"
                    data-key="91"
                  >
                    <span>command</span>
                  </div>
                  <div
                    class="key--double key--right key--space"
                    data-key="32"
                    data-char=" "
                  >
                    &nbsp;
                  </div>
                  <div
                    class="key--bottom-left key--word key--w3"
                    data-key="93-R"
                  >
                    <span>command</span>
                  </div>
                  <div
                    class="key--bottom-left key--word key--w1"
                    data-key="18-R"
                  >
                    <span>option</span>
                  </div>
                  <div data-key="37" class="key--arrow">
                    <span>&#9664;</span>
                  </div>
                  <div class="key--double key--arrow--tall" data-key="38">
                    <div>&#9650;</div>
                    <div>&#9660;</div>
                  </div>
                  <div data-key="39" class="key--arrow">
                    <span>&#9654;</span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
