import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ children, ...rest }) {
  let { isLoggedIn } = useContext(AuthContext)
  return (
    <Route {...rest} render={(props) => { return isLoggedIn ? children : <Redirect to='/' /> }}
    />
  )
}