import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserProfile = () => {
    // Użycie useContext do uzyskania dostępu do danych z AuthContext
    const { authenticatedUser } = useContext(AuthContext);

    return (
        <div className="user-profile">
            {authenticatedUser ? (
                <div>
                    <h2>Profil użytkownika</h2>
                    <p>Imię: {authenticatedUser.name}</p>
                    <p>Email: {authenticatedUser.email}</p>
                    <p>Rola: {authenticatedUser.role}</p>
                </div>
            ) : (
                <p>Użytkownik niezalogowany</p>
            )}
        </div>
    );
};

export default UserProfile;
