import React from 'react';
import profileImage from "../img/Isgmuseum-2-min.jpg";

const ProfilePicture = () => {
    return (
        <div>
            <div className="u-avatar u-avatar--huge u-margin-x--auto" style={{backgroundImage: `url(${profileImage})`}}/>
        </div>
    );
};

export default ProfilePicture;
