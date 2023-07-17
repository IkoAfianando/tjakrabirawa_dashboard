import React from 'react';
import {signOut} from "next-auth/react";

const Header = ({name}) => {
    return (
        <div className='flex justify-between px-4 pt-4'>
            <h2>Dashboard</h2>
            <h2>Welcome Back, {name}</h2>
            <button onClick={() => signOut()}>Sign out</button>

        </div>
    );
};

export default Header;
