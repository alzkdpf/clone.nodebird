import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { Menu, Input, Row, Col } from 'antd'
import UserProfile from 'components/UserProfile'
import LoginForm from 'components/LoginForm'

const AppLayout = ({ children }) => {
    // dummy
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>Home</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>Profile</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButton style={{verticalAlign: "middle"}}></Input.Search>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>SignUp</a></Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6} >
                    {isLoggedIn ? <UserProfile/> : <LoginForm/>}
                </Col>
                <Col xs={24} md={12} >
                    {children}    
                </Col>
                <Col xs={24} md={6} >
                    <a href="https://github.com/alzkdpf" target="_blank" rel="noreferrer noopener">GitHub</a>
                </Col>
            </Row>
        {children}
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;