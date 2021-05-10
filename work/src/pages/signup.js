import React, { useCallback, useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import AppLayout from 'components/AppLayout';
import Head from 'next/head';
import useInput from 'hooks/useInput';
import styled from 'styled-components';

const ErrorMsg = styled.div`
  color: red;
`;

const SignUp = () => {
  const submit = useCallback(e => {});

  const [id, onChangeId] = useInput('');

  const [nick, onChangeNick] = useInput('');

  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [termError, setTermError] = useState(false);
  const [term, setTerm] = useState('');
  const onChangeTerm = useCallback(
    e => {
      setTerm(e.target.checked);
      setTermError(false);
    },
    [term],
  );

  const onSubmit = useCallback(
    e => {
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }

      if (!term) {
        return setTermError(true);
      }
    },
    [password, passwordCheck, term],
  );

  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password],
  );

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Clone node bird</title>
      </Head>
      <AppLayout>
        <div>sign up</div>
        <Head>
          <title>Sign Up</title>
        </Head>
        <Form onFinish={onSubmit}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name="user-id" value={id} required onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nick">닉네임</label>
            <br />
            <Input
              name="user-nick"
              value={nick}
              required
              onChange={onChangeNick}
            />
          </div>
          <div>
            <label>비밀번호 입력</label>
            <br />
            <input type="passwod"></input>
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePassword}
            />
            {passwordError && (
              <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
            )}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              제로초 말을 잘 들을 것을 동의합니다.
            </Checkbox>
            {termError && (
              <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default SignUp;
