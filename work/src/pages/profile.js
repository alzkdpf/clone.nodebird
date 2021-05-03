import React from 'react';
import AppLayout from 'components/AppLayout';
import NickNameEditForm from 'components/NicknameEditForm';
import FollowList from 'components/FollowList';
import Head from 'next/head';
const Profile = () => {
  const followerList = [
    { nickname: '제로초' },
    { nickname: '바보' },
    { nickname: '노드버드오피셜' },
  ];
  const followingList = [
    { nickname: '제로초' },
    { nickname: '바보' },
    { nickname: '노드버드오피셜' },
  ];
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>My Profile</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
