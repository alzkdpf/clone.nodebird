import React from 'react'
import AppLayout from 'components/AppLayout'
import Head from 'next/head'
const Profile = () => {
    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <title>
                    My Profile
                </title>
            </Head>
        <AppLayout>
            <div>my profile</div>
        </AppLayout>
        </>
    )
}

export default Profile;