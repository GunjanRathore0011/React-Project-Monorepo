import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Profile = () => {

    const location = useLocation();
    // console.log(location);

    const {id}= useParams();
    // console.log(id);
    return (
        <div>Profile</div>
    )
}

export default Profile