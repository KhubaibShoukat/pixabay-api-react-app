import React from 'react'

import ProfilePhoto from '../assets/images/profileImage.JPG'


const ProfileDetails = ({ userName, firstName, lastName, email, gender, bio }) => {
    return (
        <div className='profile-container'>
            <div className="front-container">
                <img src={ProfilePhoto} alt="avatar" />
                <form className="form-group">
                    <div className="username">
                        <label for="username">Username</label>
                        <input type="text" value={userName} id="username" readOnly />
                    </div>

                    <div className="first-name">
                        <label for="first-name">First Name</label>
                        <input type="text" value={firstName} id="first-name" readOnly />
                    </div>

                    <div className="last-name">
                        <label for="last-name">Last Name</label>
                        <input type="text" value={lastName} id="last-name" readOnly />
                    </div>

                    <div className="email">
                        <label for="email">Email</label>
                        <input type="email" value={email} id="email" readOnly />
                    </div>

                    <div className="gender">
                        <label for="gender">Gender</label>
                        <input type="gender" value={gender} id="gender" readOnly />
                    </div>

                    <div className="bio">
                        <label for="bio">Bio</label>
                        <textarea name="bio" id="bio" value={bio} ></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProfileDetails