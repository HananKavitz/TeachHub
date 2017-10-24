import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';


import Main from '../Components/Main';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import NewTeachingAid from '../Containers/NewTeachingAidContainer';
import Login from '../Containers/LoginContainer';
import Logout from '../Components/Logout'
import SignContainer from '../Containers/SignContainer';
import PasswordRestore from '../Components/PasswordRestore';
import TeachingAids from '../Containers/TeachingAidsContainer';
import LoadTeachingAids from '../Containers/LoadTeachingAids';
import Teachers from '../Components/Teachers';
import EditProfile from '../Containers/EditProfileContainer';
import TermsOfUse from '../Components/TermsOfUse';


const Routing = (
    <Router history={browserHistory }>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='Home'  component={Home} />
            <Route path='Login'  component={Login} />
            <Route path='Logout'  component={Logout} />
            <Route path='Signin'  component={SignContainer} />
            <Route path='PasswordRestore'  component={PasswordRestore} />
            <Route path='TeachingAids'  component={TeachingAids} />
            <Route path='LoadTeachingAids'  component={LoadTeachingAids} />
            <Route path='Teachers'  component={Teachers} />
            <Route path='EditProfile'  component={EditProfile} />
            <Route path='NewTeachingAid'  component={NewTeachingAid} />
        </Route>

        <Route path='About'  component={About} />
        <Route path='Contact'  component={Contact} />
        <Route path='TermsOfUse'  component={TermsOfUse} />
        <Route path='Logout'  component={Logout} />
    </Router>
);

export default Routing;
