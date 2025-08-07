import { UserContext } from "../UserContext";
import React, { useContext } from 'react';

const UserProfile = () => {
  const { user, updateUser } = useContext(UserContext);

  const handleUpdate = () => {
    updateUser({ name: 'Jane Doe', age: 25 });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
}

export default UserProfile;