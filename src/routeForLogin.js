import { Redirect } from "react-router";
import { getSession } from "./protectedRoutes";

function ProtectedLoginRoute(props) {
    const Component= props.component;
  
        return getSession()!==null ? (
            <Redirect to={{ pathname: '/dashboard' }} />
            ) : (
           <Component />
        );
}

export default ProtectedLoginRoute;