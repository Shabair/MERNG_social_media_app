import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                {JSON.stringify(user)}
                <br />
                {user.name}
                <br />
                {user.email}
            </div>
        )

    )
}

export default Profile
