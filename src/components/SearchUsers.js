// components/SearchUsers.js
import React, { useRef, useState } from 'react';
import UserList from './UserList';

const SearchUsers = ({ users }) => {
    const searchInputRef = useRef(null);
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = () => {
        const searchTerm = searchInputRef.current.value.toLowerCase();
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm)
        );
        setSearchResult(filteredUsers);
    };

    return (
        <div className="search-users">
            <input type="text" ref={searchInputRef} onChange={handleSearch} />
            {searchResult.length > 0 ? (
                <UserList users={searchResult} />
            ) : (
                <p>brak wyszukań</p>
            )}

        </div>
    );
};

export default SearchUsers;


