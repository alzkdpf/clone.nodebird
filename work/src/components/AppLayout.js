import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import UserProfile from 'components/UserProfile';
import LoginForm from 'components/LoginForm';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  // dummy
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <SearchInput
            enterButton
            style={{ verticalAlign: 'middle' }}
          ></SearchInput>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/alzkdpf"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
