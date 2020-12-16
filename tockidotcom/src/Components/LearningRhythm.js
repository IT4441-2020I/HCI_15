import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import { Button, Card, CardContent } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import "../keyboard.css";
import "./qwertyKeyboard.css";
import "./stenoKeyboard.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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

export default function LearningKey() {
    const classes = useStyles();
    const [age, setAge] = React.useState("");

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" style={{ marginBottom: "2vh" }}>Học gõ âm tiết</Typography>
                <div style={{ height: "75vh", margin: "-2vh", padding: "2vh" }}>
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
                                fontSize: "30px"
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
                            <Button style={{}}>
                                Chuyển âm mới <ArrowForwardIosIcon />
                            </Button>
                        </div>
                    </div>
                    <div style={{ display: "flex", marginTop: '5vh' }}>

                        {/* standard keyboard  */}
                        <div class="col-7" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div id="stdKeyboard">
                                <div class="stdRow">
                                    <div class="stdKey code192" id="stdKeyGraveAccent"
                                        style={{ backgroundColor: '#6b6b47' }}><span
                                            class="upper">~</span><span class="lower">`</span></div>
                                    <div class="stdKey code49" id="stdKey1"
                                        style={{ backgroundColor: '#71787D' }}><span
                                            class="upper">!</span><span class="lower">1</span></div>
                                    <div class="stdKey code50" id="stdKey2"
                                        style={{ backgroundColor: '#71787D' }}><span
                                            class="upper">@</span><span class="lower">2</span></div>
                                    <div class="stdKey code51" id="stdKey3"
                                        style={{ backgroundColor: '#71787D' }}><span
                                            class="upper">#</span><span class="lower">3</span></div>
                                    <div class="stdKey code52" id="stdKey4"
                                        style={{ backgroundColor: '#71787D' }}><span
                                            class="upper">$</span><span class="lower">4</span></div>
                                    <div class="stdKey code53" id="stdKey5"
                                        style={{ backgroundColor: '#71787D' }}><span
                                            class="upper">%</span><span class="lower">5</span></div>
                                    <div class="stdKey code54" id="stdKey6"
                                        style={{ backgroundColor: '#71787D' }}><span
                                            class="upper">^</span><span class="lower">6</span></div>
                                    <div class="stdKey code55" id="stdKey7"
                                        style={{ backgroundColor: '#71787D' }}><span
                                            class="upper">&amp;</span><span class="lower">7</span></div>
                                    <div class="stdKey code56" id="stdKey8"
                                        style={{ backgroundColor: '#71787D' }}><span
                                            class="upper">*</span><span class="lower">8</span></div>
                                    <div class="stdKey code57" id="stdKey9"
                                        style={{ backgroundColor: '#71787D' }}><span
                                            class="upper">(</span><span class="lower">9</span></div>
                                    <div class="stdKey code48" id="stdKey0"
                                        style={{ backgroundColor: '#71787D' }}><span
                                            class="upper">)</span><span class="lower">0</span></div>
                                    <div class="stdKey code109 code189" id="stdKeyDash"
                                        style={{ backgroundColor: '#6b6b47' }}><span
                                            class="upper">_</span><span class="lower">-</span></div>
                                    <div class="stdKey code107 code187" id="stdKeyEqualSign"
                                        style={{ backgroundColor: '#6b6b47' }}><span
                                            class="upper">+</span><span class="lower">=</span></div>
                                    <div class="stdKey code8" id="stdKeyBackspace"
                                        style={{ backgroundColor: '#6b6b47' }}>Backspace
                                        </div>
                                </div>
                                <div class="stdRow">
                                    <div class="stdKey code9" id="stdKeyTab"
                                        style={{ backgroundColor: '#6b6b47' }}>Tab
                                        </div>
                                    <div class="stdKey code81" id="stdKeyQ"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>Q
                                        </div>
                                    <div class="stdKey code87" id="stdKeyW"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>W
                                        </div>
                                    <div class="stdKey code69" id="stdKeyE"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>E
                                        </div>
                                    <div class="stdKey code82" id="stdKeyR"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>R
                                        </div>
                                    <div class="stdKey code84" id="stdKeyT"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>T
                                        </div>
                                    <div class="stdKey code89" id="stdKeyY"
                                        style={{ backgroundColor: '#6b6b47' }}>Y
                                        </div>
                                    <div class="stdKey code85" id="stdKeyU"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>U
                                        </div>
                                    <div class="stdKey code73" id="stdKeyI"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>I
                                        </div>
                                    <div class="stdKey code79" id="stdKeyO"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>O
                                        </div>
                                    <div class="stdKey code80" id="stdKeyP"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>P
                                        </div>
                                    <div class="stdKey code219" id="stdKeyOpenBracket"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}><span
                                            class="upper">{"{"}</span><span class="lower">[</span></div>
                                    <div class="stdKey code221" id="stdKeyCloseBracket"
                                        style={{ backgroundColor: '#6b6b47' }}><span
                                            class="upper">{"}"}</span><span class="lower">]</span></div>
                                    <div class="stdKey code220" id="stdKeyBackslash"
                                        style={{ backgroundColor: '#6b6b47' }}><span
                                            class="upper">|</span><span class="lower">\</span></div>
                                </div>
                                <div class="stdRow">
                                    <div class="stdKey code20" id="stdKeyCapsLock"
                                        style={{ backgroundColor: '#6b6b47' }}>Caps Lock
                                        </div>
                                    <div class="stdKey code65" id="stdKeyA"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>A
                                        </div>
                                    <div class="stdKey code83" id="stdKeyS"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>S
                                        </div>
                                    <div class="stdKey code68" id="stdKeyD"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>D
                                        </div>
                                    <div class="stdKey code70" id="stdKeyF"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>F
                                        </div>
                                    <div class="stdKey code71" id="stdKeyG"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>G
                                        </div>
                                    <div class="stdKey code72" id="stdKeyH"
                                        style={{ backgroundColor: '#6b6b47' }}>H
                                        </div>
                                    <div class="stdKey code74" id="stdKeyJ"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>J
                                        </div>
                                    <div class="stdKey code75" id="stdKeyK"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>K
                                        </div>
                                    <div class="stdKey code76" id="stdKeyL"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>L
                                        </div>
                                    <div class="stdKey code59 code186" id="stdKeySemicolon"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}><span
                                            class="upper">:</span><span class="lower">;</span></div>
                                    <div class="stdKey code222" id="stdKeySingleQuote"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}><span
                                            class="upper">"</span><span class="lower">'</span></div>
                                    <div class="stdKey code13" id="stdKeyEnter"
                                        style={{ backgroundColor: '#6b6b47' }}>Enter
                                        </div>
                                </div>
                                <div class="stdRow">
                                    <div class="stdKey code16" id="stdKeyLeftShift"
                                        style={{ backgroundColor: '#71787D' }}>Shift
                                        </div>
                                    <div class="stdKey code90" id="stdKeyZ"
                                        style={{ backgroundColor: '#6b6b47' }}>Z
                                        </div>
                                    <div class="stdKey code88" id="stdKeyX"
                                        style={{ backgroundColor: '#6b6b47' }}>X
                                        </div>
                                    <div class="stdKey code67" id="stdKeyC"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>C
                                        </div>
                                    <div class="stdKey code86" id="stdKeyV"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>V
                                        </div>
                                    <div class="stdKey code66" id="stdKeyB"
                                        style={{ backgroundColor: '#6b6b47' }}>B
                                        </div>
                                    <div class="stdKey code78" id="stdKeyN"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>N
                                        </div>
                                    <div class="stdKey code77" id="stdKeyM"
                                        style={{ backgroundColor: 'rgb(0, 0, 0)' }}>M
                                        </div>
                                    <div class="stdKey code188" id="stdKeyComma"
                                        style={{ backgroundColor: '#6b6b47' }}><span
                                            class="upper">&lt;</span><span class="lower">,</span></div>
                                    <div class="stdKey code190" id="stdKeyPeriod"
                                        style={{ backgroundColor: '#6b6b47' }}><span
                                            class="upper">&gt;</span><span class="lower">.</span></div>
                                    <div class="stdKey code191" id="stdKeySlash"
                                        style={{ backgroundColor: '#6b6b47' }}><span
                                            class="upper">?</span><span class="lower">/</span></div>
                                    <div class="stdKey code16" id="stdKeyRightShift"
                                        style={{ backgroundColor: '#71787D' }}>Shift
                                        </div>
                                </div>
                                <div class="stdRow">
                                    <div class="stdKey code17" id="stdKeyLeftControl"
                                        style={{ backgroundColor: '#71787D' }}>Ctrl
                                        </div>
                                    <div class="stdKey code91" id="stdKeyLeftWindows"
                                        style={{ backgroundColor: '#6b6b47' }}>Win
                                        </div>
                                    <div class="stdKey code18" id="stdKeyLeftAlt"
                                        style={{ backgroundColor: '#6b6b47' }}>Alt
                                        </div>
                                    <div class="stdKey code32" id="stdKeySpace"
                                        style={{ backgroundColor: '#6b6b47' }}>Space
                                        </div>
                                    <div class="stdKey code18" id="stdKeyRightAlt"
                                        style={{ backgroundColor: '#6b6b47' }}>Alt
                                        </div>
                                    <div class="stdKey code92" id="stdKeyRightWindow"
                                        style={{ backgroundColor: '#6b6b47' }}>Win
                                        </div>
                                    <div class="stdKey code93" id="stdKeyMenu"
                                        style={{ backgroundColor: '#6b6b47' }}>Menu
                                        </div>
                                    <div class="stdKey code17" id="stdKeyRightControl"
                                        style={{ backgroundColor: '#71787D' }}>Ctrl
                                        </div>
                                </div>
                            </div>
                        </div>

                        {/* steno keyboard */}
                        <div class="col-5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div id="stenoKeyboard">
                                <div class="stenoNumberBar">
                                    <div class="stenoKey numberBar code48 code49 code50 code51 code52 code53 code54 code55 code56 code57" id="stenoKeyNumberBar" style={{ backgroundColor: '#71787D' }}></div>
                                </div>
                                <div class="stenoUpperBank">
                                    <div class="stenoKey square code81" id="stenoKey-0" data-priority="1" data-keyqwerty="81" data-valueqwerty="q">S</div>
                                    <div class="stenoKey square code87" id="stenoKey-1" data-priority="3" data-keyqwerty="87" data-valueqwerty="w">K</div>
                                    <div class="stenoKey square code69" id="stenoKey-2" data-priority="5" data-keyqwerty="69" data-valueqwerty="e">R</div>
                                    <div class="stenoKey square code82" id="stenoKey-3" data-priority="7" data-keyqwerty="82" data-valueqwerty="r">N</div>
                                    <div class="stenoKey square code84" id="stenoKey-4" data-priority="8" data-keyqwerty="84" data-valueqwerty="t">H</div>
                                    <div class="stenoKey square code85" id="stenoKey-5" data-priority="10" data-keyqwerty="85" data-valueqwerty="u">*</div>
                                    <div class="stenoKey square code73" id="stenoKey-6" data-priority="16" data-keyqwerty="73" data-valueqwerty="i">W</div>
                                    <div class="stenoKey square code79" id="stenoKey-7" data-priority="18" data-keyqwerty="79" data-valueqwerty="o">J</div>
                                    <div class="stenoKey square code80" id="stenoKey-8" data-priority="19" data-keyqwerty="80" data-valueqwerty="p">N</div>
                                    <div class="stenoKey square code219" id="stenoKey-9" data-priority="21" data-keyqwerty="219" data-valueqwerty="[">T</div>
                                </div>
                                <div class="stenoLowerBank">
                                    <div class="stenoKey rounded code65" id="stenoKey-10" data-priority="2" data-keyqwerty="65" data-valueqwerty="a">T</div>
                                    <div class="stenoKey rounded code83" id="stenoKey-11" data-priority="4" data-keyqwerty="83" data-valueqwerty="s">P</div>
                                    <div class="stenoKey rounded code68" id="stenoKey-12" data-priority="6" data-keyqwerty="68" data-valueqwerty="d">H</div>
                                    <div class="stenoKey rounded code70" id="stenoKey-13" data-priority="7" data-keyqwerty="70" data-valueqwerty="f">N</div>
                                    <div class="stenoKey rounded code71" id="stenoKey-14" data-priority="9" data-keyqwerty="71" data-valueqwerty="g">S</div>
                                    <div class="stenoKey rounded code74" id="stenoKey-15" data-priority="11" data-keyqwerty="74" data-valueqwerty="j">I</div>
                                    <div class="stenoKey rounded code75" id="stenoKey-16" data-priority="17" data-keyqwerty="75" data-valueqwerty="k">Y</div>
                                    <div class="stenoKey rounded code76" id="stenoKey-17" data-priority="18" data-keyqwerty="76" data-valueqwerty="l">J</div>
                                    <div class="stenoKey rounded code186" id="stenoKey-18" data-priority="20" data-keyqwerty="186" data-valueqwerty=";">G</div>
                                    <div class="stenoKey rounded code222" id="stenoKey-19" data-priority="22" data-keyqwerty="222" data-valueqwerty="'">K</div>
                                </div>
                                <div class="stenoVowelKeys">
                                    <div class="stenoKey rounded code67" id="stenoKey-20" data-priority="12" data-keyqwerty="67" data-valueqwerty="c">U</div>
                                    <div class="stenoKey rounded code86" id="stenoKey-21" data-priority="13" data-keyqwerty="86" data-valueqwerty="v">O</div>
                                    <div class="stenoKey rounded code78" id="stenoKey-22" data-priority="14" data-keyqwerty="78" data-valueqwerty="n">E</div>
                                    <div class="stenoKey rounded code77" id="stenoKey-23" data-priority="15" data-keyqwerty="77" data-valueqwerty="m" style={{ backgroundColor: 'rgb(186, 207, 250)', color: 'rgb(0, 0, 0)' }}>A</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div style={{ marginTop: "5vh", textAlign: "center" }}>
                        <Link to="/learningWord">
                            <Button
                                width="10%"
                                variant="contained"
                                color="primary"
                                size="large">
                                Chuyển sang học gõ từ<ArrowForwardIosIcon />
                            </Button>
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}