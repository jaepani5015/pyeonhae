import React, { useCallback } from 'react';

import { Row, Col, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import {
    Title,
    SubTitle,
    P,
} from './LoginForm_Styled';

const LoginForm = () => {
    const onFinish = useCallback(e => {
        console.log('you onFinish');
        console.log(e);
    }, []);

    return (
        <Row style={{ marginTop: 100 }}>
            {/* <GlobalStyle></GlobalStyle> */}
            <Col xs={1} md={7}/>
            <Col xs={22} md={8}>
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
                        name="userEmail"
                        rules={[{ required: true, whitespace: true, message: '이메일을 입력해 주세요' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="이메일" type="email" style={{ borderRadius: 10 }} />
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
            <Col xs={1} md={7}/>
        </Row>
    );
}

export default LoginForm;