import React, { useCallback } from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit"> twit</div>,
        <div key="followings">
          following <br /> 0
        </div>,
        <div key="followings">
          following <br /> 0
        </div>,
      ]}
    >
      <Card.Meta title="lsj" avatar={<Avatar>ZC</Avatar>} />
      <Button onClick={onLogOut}> Log Out </Button>
    </Card>
  );
};

export default UserProfile;
