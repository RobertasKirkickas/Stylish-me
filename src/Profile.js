import React, { useState } from 'react';

const Profile = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  const handleLogout = () => {
    alert('User has logged out');
    setLoggedOut(true);
  };

  return (
    <div>
      <h2>Profile Page</h2>
      { !loggedOut && <button onClick={handleLogout}>Logout</button> }
    </div>
  );
};

export default Profile;
