import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  return (
    <Route {...rest} render={(props) => {
      return isAuth ? (role === 'admin' ? <Redirect to="/dashboard" /> : <Redirect to="/" />) : <Component {...props} />
    }} />
  )
}

export default PublicRoute
