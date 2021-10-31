import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from "../../pages/home";
import NotFound from "../../pages/notfound";
import Login from '../../pages/auth/login';
import Register from '../../pages/auth/register';
import Dashboard from '../../pages/dashboard';
import PrivateRoute from './module/PrivateRoute';
import PublicRoute from './module/PublicRoute';
import AdminRoute from './module/AdminRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <AdminRoute path="/dashboard" component={Dashboard} />
        <PublicRoute path="/login" component={Login} />
        <PublicRoute path="/register" component={Register} />
        <Route path="/not-found" component={NotFound} />
        <Route><Redirect to="/not-found" /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
