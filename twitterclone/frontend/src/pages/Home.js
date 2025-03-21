import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../firebase.init';
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar/Sidebar';   
import Widgets from './Widgets/Widgets';
import {useAuthState} from 'react-firebase-hooks/auth'
// import Feed from './Feed/Feed';

const Home = () => {
    const user = useAuthState(auth);
    // console.log(user[0]?.email);
  
    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <div className='app'>
            <Sidebar handleLogout = {handleLogout} user={user}/>
            <Outlet  />
            <Widgets />
        </div>
    );
};

export default Home;