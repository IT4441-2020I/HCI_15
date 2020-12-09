import React, { Component } from 'react';

import { Row, Col, PageHeader, Button, Card, Input, Statistic } from 'antd';
import 'antd/dist/antd.css';
import { SyncOutlined } from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout';
import {AccountBox , StarRate,TrendingUp} from '@material-ui/icons';

import './Practice.css';

const { Countdown } = Statistic;

const deadline = Date.now() + 5000 * 60; 

class Practice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            test: 0,
        }
    }

    onStart = () => {
        
    }

    onChangeKey = () => {
        this.setState({ test: 1 })
    }

    render() {

        console.log('render' + this.state.test);

        const listKeyBoard1 = ['S', 'K', 'R', 'N', 'H', '*', 'W', 'J', 'N', 'T'];
        const listKeyBoard2 = ['T', 'P', 'H', 'N', 'S', 'I', 'Y', 'J', 'G', 'K'];

        return (
            <div
                style={{
                    backgroundColor: "white",
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                    minHeight: '500px',
                }}
            >
                <Content>
                    <PageHeader
                        className="site-page-header"
                        style={{ borderBottom: '1.5px solid #f0f2f5' }}
                        title="Luyện tập"
                        subTitle="gõ tốc ký Tiếng Việt"
                        extra={[
                            <Button key="1" type="primary" onPress={this.onStart}>
                                Bắt đầu
                            </Button>,
                            <Button key="2" type="primary">
                                Tạm dừng
                        </Button>,
                            <Button key="3" type="primary">
                                Kết thúc
                    </Button>,
                            <Button key="4" type="primary">
                                <SyncOutlined /> Làm mới
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
                                   <Countdown value={deadline} />
                                </div>
                                <Card
                                    title="Kết quả"
                                    style={{
                                        backgroundColor: 'white',
                                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                    }}
                                >
                                    <p>Tốc độ gõ (từ/ phút): </p>
                                    <p>Số từ gõ đúng: </p>
                                    <p>Số từ gõ sai: </p>

                                </Card>
                            </div>
                        </Col>
                        <Col span='18'>
                            <div style={{
                                margin: 20,
                                backgroundColor: 'white',
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                minHeight: 500,
                            }}>
                                <Row>
                                    <Col span='12'>
                                        <Card title="Văn bản" bordered={true} style={{ minHeight: 210 }}>
                                            <p>{`Chính lòng yêu nước, chứ không phải lý tưởng cộng sản, 
                                    là nguồn cảm hứng cho tôi.`}</p>
                                        </Card>
                                    </Col>

                                    <Col span='12'>
                                        <Card title="Tốc ký" bordered={true}>
                                            <p>{`-TK SK-S*IK SR-HOG -IEJG PR-SEWNK *-AW -K SK-SUW KH-OWG 
                                        PH-HSAJ SR-SI T-HSEWG KN-OWG S-HSAN *-AW -K SR-HA KR-HUON 
                                        K-HSAT H-SUWG SK-O T-OWJ -AGK`}</p>

                                        </Card>
                                    </Col>
                                </Row>
                                <Row style={{
                                    margin: 20,
                                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 4px 15px 0px',
                                }}>
                                    <Input size='large' placeholder="Start practice" onChange={this.onChangeKey} />
                                </Row>

                                <Row>
                                    <Col span='6'></Col>
                                    <Col span='12'>
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
                                            <KeyBoard item="O" />
                                            <KeyBoard item="E" />
                                            <KeyBoard item="A" />
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

export default Practice;
