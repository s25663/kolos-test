// hooks/useFilterUsersByRole.js
import { useEffect, useState } from 'react';

const useFilterUsersByRole = (users, role) => {
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const filterUsers = role => {
            const filtered = users.filter(user => user.role === role);
            setFilteredUsers(filtered);
        };

        filterUsers(role);
    }, [role, users]);

    return filteredUsers;
};

export default useFilterUsersByRole;
