// App.js
import React, { useEffect, useState } from 'react';
import UserList from './components/UserList';
import SearchUsers from './components/SearchUsers';
import { AuthProvider } from './context/AuthContext';
import useFilterUsersByRole from './hooks/useFilterUsersByRole';
import userData from './data/users.json';
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Logout from "./components/Logout"; // Import danych użytkowników

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(userData);
    }, []);

    const filteredUsers = useFilterUsersByRole(users, 'Administrator');

    return (
        <div className="app">
            <AuthProvider>
                <UserList users={users} />
                <SearchUsers users={users} />
                <UserList users={filteredUsers} />
                <UserProfile />
                <Login />
                <Logout />
            </AuthProvider>
        </div>
    );
};

export default App;
