import React, { useState, useEffect, useCallback } from 'react';

import { Row, Col, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, EyeOutlined } from '@ant-design/icons';

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

const RegisterForm = () => {

    const onFinish = useCallback(e => {
        console.log('you onFinish');
        console.log(e);
    }, []);

    const [password, setPassword] = useState(null);
    const [passwordCheck, setPasswordCheck] = useState(null);
    const [passwordState, setPasswordState] = useState(false);

    // 비밀번호 입력 이벤트
    const onChangePassword = useCallback(e => {
        console.log('onchangepassword :', e.target.value);
        setPassword(e.target.value);
    }, [password]);

    // 비밀번호 확인 입력 이벤트
    const onChangePasswordCheck = useCallback(e => {
        console.log('onchangepasswordcheck :', e.target.value);
        setPasswordCheck(e.target.value);
    }, [passwordCheck]);

    // 비밀번호 동일 확인
    useEffect(() => {
        console.log(passwordState);
        password === passwordCheck ? setPasswordState(true) : setPasswordState(false);
    }, [password, passwordCheck, passwordState]);

    return (
        <Row>
            <Col xs={1} md={6} />
            <Col xs={22} md={10}>
                <Title>
                    <Link to='/' style={{ color: '#000000' }}>편할까</Link>
                </Title>
                <p style={{ textAlign: 'center' }}><Link to='/' style={{ color: '#a0a0a0', fontSize: '13px' }}>회원가입</Link></p>
                <Form
                    name="login_form"
                    onFinish={onFinish}
                    labelCol={{ xs: { span: 5 } }}
                >

                    {/* NAME */}
                    <Form.Item
                        label="이름"
                        name="userName"
                        rules={[{ required: true, whitespace: true, message: '이름을 입력해 주세요' }]}
                    >
                        <Input prefix={<EyeOutlined />} placeholder="이름" style={{ borderRadius: 10 }} />
                    </Form.Item>

                    {/* ID */}
                    <Form.Item
                        label="아이디"
                        name="userId"
                        rules={[{ required: true, whitespace: false, message: '사용하실 아이디를 입력해 주세요' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="아이디" style={{ borderRadius: 10 }} />
                    </Form.Item>

                    {/* PASSWORD */}
                    <Form.Item
                        label="비밀번호"
                        name="userPassword"
                        rules={[{ required: true, whitespace: false, message: '사용하실 비밀번호를 입력해 주세요' }]}
                    >
                        <Input prefix={<LockOutlined />} placeholder="비밀번호" type="password" style={{ borderRadius: 10 }} onChange={onChangePassword} />
                    </Form.Item>

                    {/* PASSWORD CHECK */}
                    <Form.Item
                        label="비밀번호 체크"
                        name="userPasswordCheck"
                        rules={[{ required: true, whitespace: false, message: '사용하실 비밀번호를 입력해 주세요' }]}
                    >
                        <Input prefix={<LockOutlined />} placeholder="비밀번호 확인" type="password" style={{ borderRadius: 10 }} onChange={onChangePasswordCheck} />
                        <div style={{ textAlign: 'end', marginBottom: 25 }}>
                            {passwordCheck !== null ?
                                passwordState === true ? <span>비밀번호가 일치합니다.</span> : <span style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</span>
                                : ''
                            }
                        </div>
                    </Form.Item>

                    {/* 로그인 버튼 */}
                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ borderRadius: 10 }}
                            disabled={passwordCheck && passwordState === true ? false : true}
                        >
                            회원가입
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col xs={1} md={6} />
        </Row>
    );
}

export default RegisterForm;