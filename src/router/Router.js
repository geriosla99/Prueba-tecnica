import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from '../components/Login/Login'

const RouterApp = () => {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Login}/>            
        </Switch>
    </Router>
  );
}

export default RouterApp;