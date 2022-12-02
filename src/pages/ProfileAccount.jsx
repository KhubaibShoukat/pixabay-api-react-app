import React from 'react'
import ProfileDetails from '../components/ProfileDetails'

const ProfileAccount = () => {

    const profileData = {
        userName: 'khubaib238',
        firstName: 'Khubaib',
        lastName: 'Shoukat',
        email: 'khubaib',
        gender: 'Male',
        bio: 'Front-End React.Js Web Developer',
        profilePhoto: '../assets/images/profileImage.JPG'
    }

    return (
        <ProfileDetails
            userName={profileData.userName}
            firstName={profileData.firstName}
            lastName={profileData.lastName}
            email={profileData.email}
            gender={profileData.gender}
            bio={profileData.bio}
            profilePhoto={profileData.profilePhoto}
        />
    )
}

export default ProfileAccount