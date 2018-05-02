import React from 'react';
import UserList from './container/user-list';
import UserDetails from './container/user-detail';

const User = () => (
    <div>
        <h2>Select a User</h2>
        <UserList />
        <hr />
        <br />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default User;