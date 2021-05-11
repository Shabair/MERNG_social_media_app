import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
    const { loginWithRedirect } = useAuth0();
    return loginWithRedirect({
        screen_hint: "signup",
    });
};

export default Signup;