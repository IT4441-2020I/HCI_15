import React, { Component } from 'react';

import { Row, Col, PageHeader, Card, Input, Statistic, Select } from 'antd';
import Button from "@material-ui/core/Button";
import 'antd/dist/antd.css';
import { SyncOutlined } from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout';
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';
import "./stenoKeyboard.css";

import './Practice.css';

const { Countdown } = Statistic;
const { Option } = Select;

// const deadline = Date.now() + 3000 * 60;

class Practice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: Date.now() + 3000 * 60,
            check: false,
            speed: 0,
            keyTrue: 0,
            keyFalse: 0,
            text: 'Chính lòng yêu nước, chứ không phải lý tưởng cộng sản, là nguồn cảm hứng cho tôi.',
            tocKy: '-TK SK-S*IK SR-HOG -IEJG PR-SEWNK *-AW -K SK-SUW KH-OWG PH-HSAJ SR-SI T-HSEWG KN-OWG S-HSAN *-AW -K SR-HA KR-HUON K-HSAT H-SUWG SK-O T-OWJ -AGK',
        }
    }

    onStart = () => {

    }

    onChangeKey = () => {
        let temp = this.state.check;
        this.setState({
            check: !temp,
        })
    }

    handleFinish = () => {
        this.setState({
            speed: 30,
            keyTrue: 27,
            keyFalse: 3,
        })
    }

    handleSelect = (e) => {
        console.log(e);
        if (e == 'luyenGoTheoAm') {
            this.setState({
                text: 'Ơ',
                tocKy: 'W',
            })
        } else if (e == 'luyenGoTheoTu') {
            this.setState({
                text: 'TẬP',
                tocKy: 'T*-WP',
            })
        } else if (e == 'luyenGoTheoCau') {
            this.setState({
                text: 'Chính lòng yêu nước, chứ không phải lý tưởng cộng sản, là nguồn cảm hứng cho tôi.',
                tocKy: '-TK SK-S*IK SR-HOG -IEJG PR-SEWNK *-AW -K SK-SUW KH-OWG PH-HSAJ SR-SI T-HSEWG KN-OWG S-HSAN *-AW -K SR-HA KR-HUON K-HSAT H-SUWG SK-O T-OWJ -AGK',
            })
        }
    }

    handleSelectTime = (e) => {
        console.log(e);
        switch (e) {
            case 1:
                this.setState({ deadline: Date.now() + 1000 * 60 });
                break;
            case 3:
                this.setState({ deadline: Date.now() + 3000 * 60 });
                break;
            case 5:
                this.setState({ deadline: Date.now() + 5000 * 60 });
                break;
            case 10:
                this.setState({ deadline: Date.now() + 10000 * 60 });
                break;
            case 15:
                this.setState({ deadline: Date.now() + 15000 * 60 });
                break;
            case 20:
                this.setState({ deadline: Date.now() + 20000 * 60 });
                break;
            case 30:
                this.setState({ deadline: Date.now() + 30000 * 60 });
                break;
        }
    }

    render() {
        const { text, tocKy, deadline } = this.state;

        console.log('render' + this.state.test);

        const listKeyBoard1 = ['S', 'K', 'R', 'N', 'H', '*', 'W', 'J', 'N', 'T'];
        const listKeyBoard2 = ['T', 'P', 'H', 'N', 'S', 'I', 'Y', 'J', 'G', 'K'];

        return (
            <div
                style={{
                    backgroundColor: "white",
                    // boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                    minHeight: '500px',
                }}
            >
                <Content>
                    {/* <CountDownTimer /> */}
                    <PageHeader
                        className="site-page-header pageHeader"
                        style={{ borderBottom: '1.5px solid #f0f2f5' }}
                        title={<div style={{ fontSize: '32px', paddingBottom: '10px' }}>Luyện tập</div>}
                        subTitle="gõ tốc ký Tiếng Việt"
                        onBack={() => null}
                        extra={[
                            <Button
                                variant="contained"
                                color="primary"
                                onPress={this.onStart}
                            >
                                Bắt đầu
                            </Button>,
                            <Button
                                variant="contained"
                                color="primary"
                                onPress={this.onStart}
                                style={{ marginLeft: '15px' }}
                            >
                                Tạm dừng
                            </Button>,
                            <Button
                                variant="contained"
                                color="primary"
                                onPress={this.onStart}
                                style={{ marginLeft: '15px' }}
                            >
                                Kết thúc
                            </Button>,
                            <Button
                                variant="contained"
                                color="primary"
                                onPress={this.onStart}
                                style={{ marginLeft: '15px' }}
                            >
                                Làm mới
                                <SyncOutlined style={{ paddingLeft: '10px' }} />
                            </Button>
                        ]}
                    />

                    <Row>
                        <Col span='6'>
                            <div style={{
                                margin: 20,
                            }}>
                                <div style={{
                                    padding: 20,
                                    marginBottom: 20,
                                    backgroundColor: 'white',
                                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                    fontSize: 32,
                                }}>
                                    <Countdown value={deadline} onFinish={this.handleFinish} />
                                </div>
                                <Card
                                    title="Kết quả"
                                    style={{
                                        backgroundColor: 'white',
                                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                    }}
                                >
                                    <p>Tốc độ gõ (từ/ phút): <span style={{ fontSize: 24 }}>{this.state.speed}</span></p>
                                    <p>Số từ gõ đúng: <span style={{ fontSize: 24, color: '#3FCC28' }}>{this.state.keyTrue}</span> </p>
                                    <p>Số từ gõ sai: <span style={{ fontSize: 24, color: '#F3574F' }}>{this.state.keyFalse}</span></p>

                                </Card>
                            </div>
                        </Col>
                        <Col span='18'>
                            <Select
                                defaultValue="Luyện gõ theo câu"
                                style={{ width: 180, margin: 20, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
                                onSelect={this.handleSelect}
                            >
                                <Option value="luyenGoTheoAm">Luyện gõ theo âm</Option>
                                <Option value="luyenGoTheoTu">Luyện gõ theo từ</Option>
                                <Option value="luyenGoTheoCau">Luyện gõ theo câu</Option>
                            </Select>

                            <Select
                                defaultValue="3 phút"
                                style={{ width: 180, margin: 20, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
                                onSelect={this.handleSelectTime}
                            >
                                <Option value={1}>1 phút</Option>
                                <Option value={3}>3 phút</Option>
                                <Option value={5}>5 phút</Option>
                                <Option value={10}>10 phút</Option>
                                <Option value={15}>15 phút</Option>
                                <Option value={20}>20 phút</Option>
                                <Option value={30}>30 phút</Option>
                            </Select>
                            <div style={{
                                margin: 20,
                                backgroundColor: 'white',
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                minHeight: 500,
                            }}>
                                <Row>
                                    <Col span='12'>
                                        <Card title="Văn bản" bordered={true} style={{ minHeight: 210 }}>
                                            <p>{text}</p>
                                        </Card>
                                    </Col>

                                    <Col span='12'>
                                        <Card title="Tốc ký" bordered={true}>
                                            <p>{tocKy}</p>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row style={{
                                    margin: 20,
                                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 4px 15px 0px',
                                }}>
                                    <Input
                                        size='large'
                                        placeholder="Start practice"
                                        onChange={this.onChangeKey}
                                        style={{ height: '80px' }}
                                    />
                                </Row>

                                <Row style={{justifyContent: "center"}}>
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

                                </Row>

                                {/* steno keyboard */}
                                {/* <div class="col-5" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                                </div> */}

                            </div>
                        </Col>
                    </Row>
                </Content>
            </div >

        );
    }
}

const KeyBoard = (props) => {
    return (
        <div
            style={{
                height: 50,
                width: 30,
                backgroundColor: 'black',
                color: 'white',
                fontSize: 18,
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                marginRight: 8,
                marginBottom: 2,

            }}
        >
            {props.item}
        </div>
    )
}

const KeyBoard1 = (props) => {
    return (
        <div
            style={{
                height: 50,
                width: 30,
                backgroundColor: props.bgColor,
                color: 'white',
                fontSize: 18,
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                marginRight: 8,
                marginBottom: 2,

            }}
        >
            {props.item}
        </div>
    )
}

export default Practice;
