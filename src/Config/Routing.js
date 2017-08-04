import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';


import Main from '../Components/Main';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Login from '../Components/Login';
import Signin from '../Containers/SignContainer';
import PasswordRestore from '../Components/PasswordRestore';
const Routing = (
    <Router history={browserHistory }>
        <Route path='/' component={Main}>    
            <IndexRoute component={Home} />
            <Route path='Home'  component={Home} />
            <Route path='About'  component={About} />
            <Route path='Contact'  component={Contact} />
            <Route path='Login'  component={Login} />
            <Route path='Signin'  component={Signin} />
            <Route path='PasswordRestore'  component={PasswordRestore} />
        </Route>
    </Router>
);
   
export default Routing;