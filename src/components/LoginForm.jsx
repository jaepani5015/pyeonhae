import React, { useCallback } from 'react';

import { Row, Col, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.p`
    margin: 0;
    padding: 0;
    color: #000000;
    text-align: center;
    font-size: 30px;
    margin-top: 70px;
`;

const SubTitle = styled.p`
    color: #a0a0a0;
    text-align: center;
    font-size: 13px;
`

const P = styled.p`
    color: #a0a0a0;
    margin: 0;
    padding: 0;
    font-size: 12px;
`;

const LoginForm = () => {
    const onFinish = useCallback(e => {
        console.log('you onFinish');
        console.log(e);
    }, []);

    return (
        <Row>
            {/* <GlobalStyle></GlobalStyle> */}
            <Col xs={1} md={6}/>
            <Col xs={22} md={10}>
                <Title>
                    <Link to='/' style={{ color: '#000000' }}>편할까</Link>
                </Title>
                <SubTitle>편의점 할인을 까보다</SubTitle>
                <Form
                    name="login_form"
                    onFinish={onFinish}
                >
                    {/* ID */}
                    <Form.Item
                        name="userId"
                        rules={[{ required: true, whitespace: true, message: '아이디를 입력해 주세요' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="아이디" style={{ borderRadius: 10 }} />
                    </Form.Item>

                    {/* PASSWORD */}
                    <Form.Item
                        name="userPassword"
                        rules={[{ required: true, whitespace: true, message: '비밀번호를 입력해 주세요' }]}
                    >
                        <Input prefix={<LockOutlined />} placeholder="패스워드" type="password" style={{ borderRadius: 10 }} />
                    </Form.Item>

                    {/* 로그인 버튼 */}
                    <Form.Item>
                        <Button
                            type="primary"
                            block
                            htmlType="submit"
                            style={{ borderRadius: 10 }}
                        >
                            로그인
                        </Button>
                    </Form.Item>

                    {/* 회원가입 버튼 */}
                    <Form.Item>
                        <P>아직 회원이 아니신가요?</P>
                        <Button type="default" block style={{ borderRadius: 10 }}>
                            <Link to='/register'>회원가입</Link>
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col xs={1} md={6}/>
        </Row>
    );
}

export default LoginForm;