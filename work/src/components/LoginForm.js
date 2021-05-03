import React, { useState, useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useInput from 'hooks/useInput';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const style = useMemo(() => ({ marginTop: 10 }), []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <>
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">Id</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">password</label>
          <br />
          <Input
            name="user-password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <ButtonWrapper style={style}>
          <button type="primary" htmlType="submit" loading={false}>
            로그인
          </button>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </ButtonWrapper>
        <div></div>
      </FormWrapper>
    </>
  );
};

LoginForm.protoTypes = {
  setIsLoggedIn: PropTypes.func.isRquired,
};

export default LoginForm;
