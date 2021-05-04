import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";

// When giving a component property to route element, use this version
export default function ({ component: Component, ...rest }) {
  let { isLoggedIn } = useContext(AuthContext)

  return (
    <Route {...rest} render={(props) => {
      return isLoggedIn ? <Component {...props} /> : <Redirect to='/' />
    }} />
  )
}