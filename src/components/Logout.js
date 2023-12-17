import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout(); // Wylogowanie użytkownika
    };

    return (
        <div className="logout">
            <button onClick={handleLogout}>Wyloguj</button>
        </div>
    );
};

export default Logout;
