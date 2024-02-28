// src/UserRank.js
import React, { useState } from 'react';

function UserRank() {
  const [userId, setUserId] = useState('');
  const [rank, setRank] = useState('');
  const [error, setError] = useState(null);

  const handleUserIdChange = (event) => { 
   setUserId(event.target.value);
   console.log(userId) ;
  };

  const handleGetRank = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user-rank/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user rank');
      }
  
      const data = await response.json();
      console.log(data);
      setRank(data.rank);
      setError(null);
    } catch (error) {
      console.error('Error fetching user rank:', error);
      setError('An error occurred while fetching user rank');
      setRank(null);
    }
  };

  return (
    <div>
      <h1>User Rank</h1>
      <label htmlFor="userIdInput">Enter User ID:</label>
      <input
        type="text"
        id="userIdInput"
        value={userId}
        onChange={handleUserIdChange}
      />
      <button onClick={handleGetRank}>Get Rank</button>
      {rank && <p>User {userId} has rank: {rank}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default UserRank;
