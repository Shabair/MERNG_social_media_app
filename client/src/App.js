import './App.css';
import React from "react";
import Login from './components/auth/login'
import Profile from './components/user/Profile'
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const {isLoading} = useAuth0();

  if(isLoading) return <div>...Loading</div>;
  return (
    <div>
      <Login />
      <Profile />
    </div>
  );
}

export default App;