import React from 'react';
import '../styles.css';
export default function UserList({users}){
    return(
        <div className="user-list">
            <h2>Lista użytkowników</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>ID:</strong> {user.id}, <strong>Nazwa:</strong> {user.name}, <strong>Email:</strong> {user.email}, <strong>Rola:</strong> {user.role}
                    </li>
                ))}
            </ul>
        </div>
    )
}