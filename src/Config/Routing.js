import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';


import Main from '../Components/Main';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Login from '../Components/Login';
import SignContainer from '../Containers/SignContainer';
import PasswordRestore from '../Components/PasswordRestore';
import TeachingAids from '../Containers/TeachingAids';
import Teachers from '../Components/Teachers';
import EditProfile from '../Components/EditProfile';
import TermsOfUse from '../Components/TermsOfUse';


const Routing = (
    <Router history={browserHistory }>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='Home'  component={Home} />
            <Route path='About'  component={About} />
            <Route path='Contact'  component={Contact} />
            <Route path='Login'  component={Login} />
            <Route path='Signin'  component={SignContainer} />
            <Route path='PasswordRestore'  component={PasswordRestore} />
            <Route path='TeachingAids'  component={TeachingAids} />
            <Route path='Teachers'  component={Teachers} />
            <Route path='EditProfile'  component={EditProfile} />
            <Route path='TermsOfUse'  component={TermsOfUse} />
        </Route>
    </Router>
);

export default Routing;
