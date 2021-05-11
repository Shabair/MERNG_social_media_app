import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    //pass options to redirect users, check all options in the following link
    //https://auth0.github.io/auth0-react/interfaces/auth0_context.redirectloginoptions.html
    return (
        <button
            onClick={() => loginWithRedirect()}
        >
            Log In
        </button>
    );
};

export default LoginButton;