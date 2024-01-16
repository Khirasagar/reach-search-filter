// App.js

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleSearch = () => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  };

  const handleSelect = (selectedOption) => {
    console.log('Selected User:', selectedOption);
    setSearchTerm(selectedOption?.label || '');
    setSelectedUser(selectedOption);
  };

  return (
    <div className="App">
      <div className="Search-container">
        <Select
          options={users.map((user) => ({ label: user.name, value: user.id }))}
          placeholder="Click to see the list..."
          onFocus={handleSearch}
          onChange={handleSelect}
          value={selectedUser}
          styles={{
            container: (provided) => ({
              ...provided,
              width: 400, // Adjust the width as needed
            }),
            control: (provided) => ({
              ...provided,
              minHeight: 60, // Adjust the height as needed
            }),
          }}
        />
      </div>
    </div>
  );
}

export default App;
