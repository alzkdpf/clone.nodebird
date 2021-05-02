import React, { useState, useCallback, useMemo } from 'react'
import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
    margin-top: 10px;
`
const FormWrapper = styled(Form)`
    padding: 10px;
`

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const onChangeId = useCallback(() => {
        setId(e.target.value)
    }, [])
    
    const onChangePassword = useCallback(() => {
        setPassword(e.target.value)
    }, [])
    
    const style = useMemo(() => ({ marginTop: 10 }), [])
    
    const onSubmitForm = useCallback(() => {
        console.log(id, password)
    }, [id, password])

    return (
        <>
            <FormWrapper onFinish={ onSubmitForm }>
                <div>
                    <label htmlFor="user-id">Id</label>
                    <br />
                    <Input name="user-id" value={id} onChangedId={onChangeId} required />
                </div>
                <div>
                    <label htmlFor="user-password">password</label>
                    <br />
                    <Input name="user-password" value={password} onChangedId={onChangePassword} required/>
                </div>
                <ButtonWrapper style={style}>
                    <button type="primary" htmlType="submit" loading={false}>로그인</button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </ButtonWrapper>
                <div>
                    
                </div>
            </FormWrapper>
        </>
    )
}

export default LoginForm;