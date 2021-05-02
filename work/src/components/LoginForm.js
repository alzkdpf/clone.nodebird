import React, { useState, useCallback } from 'react'
import { Form, Input, Button } from 'antd'
import Link from 'next/link'

const LoginForm = () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')

    const onChangeId = useCallback(() => {
        setId(e.target.value)
    }, [])
    
    const onChangePassword = useCallback(() => {
        setPassword(e.target.value)
    },[])

    return (
        <>
            <Form>
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
                <div style={{marginTop:'10px'}}>
                    <button type="primary" htmlType="submit" loading={false}>로그인</button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </div>
                <div>
                    
                </div>
            </Form>
        </>
    )
}

export default LoginForm;