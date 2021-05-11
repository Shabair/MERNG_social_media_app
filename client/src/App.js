import './App.css';
// import NavBar from "./components/auth/nav-bar";
import Loading from "./components/common/Loading/Loading"
import { useAuth0 } from "@auth0/auth0-react";
import Route from './routes/Routes'

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Route />
    </div>
  );
}

export default App;