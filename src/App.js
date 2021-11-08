import {  Switch,Route } from 'react-router-dom';
import './App.css';
import ForgetPwd from './Components/ForgetPassword';
import SignUp from './Components/Signup';
import * as ROUTES from './Constants/Routes';
import SignIn from './Components/Signin';
import { Globalprovider } from './Components/Context/context';
import  {
      ProfileRoute,
      StoreRoute,
      DashboardRoute,
      AssetsRoute,
      LogoutRoute,
      NotificationsRoute, 
      EmailValidationRoute,
      PhoneValidationRoute,
      InstagramRoute

} from './Routes';
import ProtectedRoute from './protectedRoutes';
import ResetPassword from './Components/ResetPassword';
import ProtectedLoginRoute from './routeForLogin';
import EmailSent from './Components/ForgetPassword/emailSent';
import PasswordChanged from './Components/ResetPassword/passwordChanges';
import PayPal from './Components/Profile/paypal';



function App() {
//   const [signed, setSigned]= useState(false);
  return (
     <Globalprovider> 
    <Switch>

      <ProtectedLoginRoute path="/" component={SignIn} exact />
      
{/* profile */}
      <ProtectedRoute path={"/profile"} component={ProfileRoute} exact  />

{/* for dashboard */}
      <ProtectedRoute path={"/dashboard"} component={DashboardRoute} exact/>
{/* for assets */}
      <ProtectedRoute path={"/assets"} component={AssetsRoute} exact/>
{/* store */}
      <ProtectedRoute path={"/store"} component={StoreRoute} exact/>
{/* notifications */}
      <ProtectedRoute path={"/notifications"} component={NotificationsRoute} exact/>
{/* logout */}
      <ProtectedRoute path={"/logout"} component={LogoutRoute}  exact />    
{/* down here we will have routes to all flows one by one! */}
    
      {/* route to email validation flow */}
      <ProtectedRoute path={"/emailvalidation"} component={EmailValidationRoute}/>
       {/* route to email validation flow */}
       <ProtectedRoute path={"/phonevalidation"} component={PhoneValidationRoute}/>
      {/* route to instagram flow */}
      <ProtectedRoute path={"/instagram"} component={InstagramRoute}/>


      <Route path={ROUTES.SIGN_UP} component={SignUp} />
      <Route path={ROUTES.PASSWORD_FORGET} component={ForgetPwd}/>
      <Route path={"/ForgetPassword/emailsent"} component={EmailSent} exact/>
      <Route path={"/resetPassword"} component={ResetPassword} exact />
      <Route path={"/resetPassword/passwordchanged"} component={PasswordChanged} exact />
      <Route path={"/paypal"} component={PayPal} exact />

      <Route path="*">
           <Page404 />
          </Route>
</Switch>
    </Globalprovider>
  
    );
}

export default App;

//404 page -demo
const Page404= ()=>{
      return( <div className="flex justify-center items-center font-bold text-center text-5xl text-red-600">404- no page found</div>)
     
      
}