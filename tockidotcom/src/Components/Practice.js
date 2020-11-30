import React, { Component } from 'react';

import { Row, Col, PageHeader, Button, Card, Input } from 'antd';
import 'antd/dist/antd.css';
import { SyncOutlined } from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout';
import imagess from './Capture.PNG';

import './Practice.css';


class Practice extends Component {
    render() {
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
                            <Button key="1" type="primary">
                                Dừng
                            </Button>,
                            <Button key="2" type="primary">
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
                                    00 : 00 : 00
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
                            {/* <div style={{
                                margin: 20,
                                backgroundColor: 'white',
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                minHeight: 300,
                                display: 'flex'
                            }}>
                                <Col span='9'>
                                    <Card title="Văn bản" bordered={true}>
                                        <p>{`Chính lòng yêu nước, chứ không phải lý tưởng cộng sản, 
                                    là nguồn cảm hứng cho tôi.`}</p>
                                    </Card>
                                </Col>

                                <Col span='9'>
                                    <Card title="Tốc ký" bordered={true}>
                                        <p>{`-TK SK-S*IK SR-HOG -IEJG PR-SEWNK *-AW -K SK-SUW KH-OWG 
                                        PH-HSAJ SR-SI T-HSEWG KN-OWG S-HSAN *-AW -K SR-HA KR-HUON 
                                        K-HSAT H-SUWG SK-O T-OWJ -AGK`}</p>

                                    </Card>
                                </Col>
                                <div>
                                    <img
                                        // width={200}
                                        // src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                        src={imagess}
                                    />
                                </div> */}
                            <Row>

                                <div style={{
                                    margin: 20,
                                    backgroundColor: 'white',
                                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                                    minHeight: 300,
                                    display: 'flex'
                                }}>
                                    <Col span='12'>
                                        <Card title="Văn bản" bordered={true}>
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
                                </div>
                                <Input></Input>
                            </Row>
                            <Row>
                                <Input></Input>
                            </Row>
                            <Row>
                                <img
                                    src={imagess}
                                />
                            </Row>

                            {/* </div> */}
                        </Col>
                    </Row>
                </Content>
            </div >

        );
    }
}

export default Practice;
