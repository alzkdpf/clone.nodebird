import React, { useMemo } from 'react';
import { List, Button } from 'antd';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      header={<div> {header} </div>}
      loadMore={
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button>Load more...</Button>{' '}
        </div>
      }
      bordered
      dataSource={data}
      renderItem={item => {
        <List.Item style={{ marginTop: 20 }}>
          <Card action={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>;
      }}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRquired,
  data: PropTypes.array.isRquired,
};

export default FollowList;
