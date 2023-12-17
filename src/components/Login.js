import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        // Symulacja logowania - tutaj zazwyczaj byłby żądanie do serwera
        const user = { id: 1, name: 'John', email: 'john@example.com', role: 'User' };
        login(user); // Logowanie użytkownika
    };

    return (
        <div className="login">
            <button onClick={handleLogin}>Zaloguj</button>
        </div>
    );
};

export default Login;
