import React, { useCallback } from 'react';
import AppLayout from 'components/AppLayout';
import Head from 'next/head';
const SignUp = () => {
  const submit = useCallback(e => {});

  const [id, onChangeId] = useInput('');
  const [nick, onChangeNick] = useInput('');
  const [password, onChangePassword] = useInput('');

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
        <Form onFinish={submit}>
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
            <label htmlFor="user-password-check">비밀번호체크</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>
            )}
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default SignUp;
