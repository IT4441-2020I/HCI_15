import React, { Component } from 'react';

import { Row, Col, PageHeader, Card, Input, Statistic, Select } from 'antd';
import Button from "@material-ui/core/Button";
import 'antd/dist/antd.css';
import { SyncOutlined } from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout';
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';

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

                                <Row>
                                    <Col span='6'></Col>
                                    <Col span='12' style={{ minWidth: 300 }}>
                                        <div style={{
                                            height: 30,
                                            width: 372,
                                            backgroundColor: '#67757c',
                                            fontSize: 18,
                                            display: 'flex',
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: 5,
                                            marginRight: 8,
                                            marginBottom: 2,
                                        }}></div>

                                        <div style={{ display: "flex" }}>
                                            {
                                                listKeyBoard1.map((item, id) => <KeyBoard key={id} item={item} />)
                                            }
                                        </div>

                                        <div style={{ display: "flex" }}>
                                            {
                                                listKeyBoard2.map((item, id) => <KeyBoard key={id} item={item} />)
                                            }
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                                            <KeyBoard item="U" />
                                            <KeyBoard1 item="O" bgColor={this.state.check ? '#fcba03' : 'black'} />
                                            <KeyBoard item="E" />
                                            <KeyBoard1 item="A" bgColor={this.state.check ? '#3FCC28' : 'black'} />
                                        </div>
                                    </Col>
                                    <Col span='6'></Col>
                                </Row>
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
