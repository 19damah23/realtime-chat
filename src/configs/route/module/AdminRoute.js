import { Route, Redirect } from "react-router-dom"

const AdminRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem('role')
  const token = localStorage.getItem('token')
  return (
    <Route {...rest} render={(props) => {
      return isAuth === 'admin' && token ? <Component {...props} /> : <Redirect to="/login" />
    }} />
  )
}

export default AdminRoute
