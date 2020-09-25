import React, { useState, useEffect, useCallback } from 'react';

import { Row, Col, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, EyeOutlined, ConsoleSqlOutlined, EyeTwoTone } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Title } from './style/RegisterForm_Styled';

import { nickNameCheck, emailCheck } from '../modules/userReg';

const RegisterForm = () => {
    const nickNameSelect = useSelector(state => state.userReg.reg.nickName);
    const emailSelect = useSelector(state => state.userReg.reg.email);
    const dispatch = useDispatch();

    const onFinish = useCallback(e => {
        console.log('you onFinish');
        console.log(e);
    }, []);

    const [password, setPassword] = useState(null);
    const [passwordCheck, setPasswordCheck] = useState(null);
    const [passwordState, setPasswordState] = useState(false);

    const [useRegState, setUseRegState] = useState({
        nickNameState: false,
        emailState: false,
    });
    const [nickName, setNickName] = useState(null);
    const [email, setEmail] = useState(null);
    

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

    // 닉네임체크
    const onClickNickNameCheck = useCallback(() => {
        dispatch(nickNameCheck(nickName));
    }, [nickName]);

    // 이메일체크
    const onClickEmailCheck = useCallback(() => {
        dispatch(emailCheck(email));
    }, [email]);

    // 비밀번호 동일 확인
    useEffect(() => {
        password === passwordCheck ? setPasswordState(true) : setPasswordState(false);
    }, [password, passwordCheck, passwordState]);

    useEffect(() => {
        if(nickNameSelect === false) {
            alert('이미 사용중인 닉네임 입니다.');
            setNickName(null);
        } else if(nickNameSelect === true){
            alert('사용가능한 닉네임 입니다.');
            setUseRegState({ ...useRegState, nickNameState: true });
        } else console.log('nickNameSelect error');
    }, [nickNameSelect]);

    useEffect(() => {
        if(emailSelect === false) {
            alert('이미 사용중인 이메일 입니다.');
            setEmail(null);
        } else if(emailSelect === true){
            alert('사용가능한 이메일 입니다.');
            setUseRegState({ ...useRegState, emailState: true });
        } else console.log('emailSelect error');
    }, [emailSelect]);

    return (
        <Row style={{ marginTop: 100 }}>
            <Col xs={1} md={6} />
            <Col xs={22} md={10}>
                <Title>
                    <Link to='/' style={{ color: '#000000' }}>편해</Link>
                </Title>
                <p style={{ textAlign: 'center' }}><Link to='/' style={{ color: '#a0a0a0', fontSize: '13px' }}>회원가입</Link></p>
                <Form
                    name="login_form"
                    onFinish={onFinish}
                    labelCol={{ xs: { span: 5 } }}
                >

                    {/* NAME */}
                    <Form.Item
                        label="닉네임"
                        name="userNicname"
                        rules={[{ required: true, whitespace: true, message: '사용하실 닉네임을 입력해 주세요' }]}
                    >
                        <Input
                            prefix={<EyeOutlined />}
                            onChange={e => setNickName(e.target.value)}
                            value={nickName}
                            placeholder="닉네임"
                            style={{ borderRadius: 10 }}
                        />
                        <Button style={{ margin: '20px 0 0 0' }} onClick={onClickNickNameCheck}>닉네임 중복확인</Button>
                    </Form.Item>

                    {/* EMAIL */}
                    <Form.Item
                        label="이메일"
                        name="userEmail"
                        rules={[{ required: true, whitespace: false, message: '사용하실 이메일을 입력해 주세요' }]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            placeholder="이메일"
                            type="email"
                            style={{ borderRadius: 10 }}
                        />
                        <Button style={{ margin: '20px 0 0 0' }} onClick={onClickEmailCheck}>이메일 중복확인</Button>
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
                            disabled={passwordCheck && passwordState === true ? 
                                useRegState.emailState && useRegState.nickNameState === true ? false
                                : true : true}
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