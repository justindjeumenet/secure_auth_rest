import React, {Fragment, useEffect} from 'react';
import {Router, Route, Switch} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline'
import {Provider} from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import {theme} from './components/common/Style'
import {history} from './utils/historyUtils'
import {authLogin, getUserProfile} from './actions/authActions'
import store from './store'
import * as routes from './routes'
import RequireAuth from "./routes/PrivateRoute";
import {UserProfile, SignUp, SignIn, HomePage,
    Dashboard, SignUpDone, AccountActivationComponent, ResetPasswordDone,
    EditUserProfile, ResetPasswordConfirmComponent,
    ResetPasswordComponent, ChangePasswordComponent} from './pages';


const token = localStorage.getItem('token');

if (token){
    store.dispatch(authLogin(token))
}


function App() {
   useEffect(() => {
    store.dispatch(getUserProfile())
  }, []);
  return (
    <div>
       <Router history={history}>
        <Fragment>
          <CssBaseline/>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                  <Switch>
                    <Route exact={true} path={routes.HOME} component={HomePage}/>
                    <Route exact={true} path={routes.SIGN_UP_DONE} component={SignUpDone}/>
                    <Route exact={true} path={routes.SIGN_IN} component={SignIn}/>
                    <Route exact={true} path={routes.SIGN_UP} component={SignUp}/>
                    <Route exact={true} path={routes.PASSWORD_RESET} component={ResetPasswordComponent}/>
                    <Route exact={true} path={routes.PASSWORD_RESET_DONE} component={ResetPasswordDone}/>
                    <Route exact={true} path={routes.PASSWORD_RESET_CONFIRM} component={ResetPasswordConfirmComponent}/>
                    <Route exact={true} path={routes.ACCOUNT_ACTIVATE} component={AccountActivationComponent}/>
                    <Route exact={true} path={routes.DASHBOARD} component={RequireAuth(Dashboard)}/>
                    <Route exact={true} path={routes.PASSWORD_CHANGE} component={RequireAuth(ChangePasswordComponent)}/>
                    <Route exact={true} path={routes.USER_PROFILE_UPDATE} component={RequireAuth(UserProfile)}/>
                    <Route exact={true} path={routes.PROFILE} component={RequireAuth(UserProfile)}/>
                    <Route exact={true} path={routes.PROFILE_EDIT} component={RequireAuth(EditUserProfile)}/>
                  </Switch>
                </Provider>
            </ThemeProvider>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
