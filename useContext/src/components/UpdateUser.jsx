import { UserContext } from "../UserContext";
import React, { useContext, useState } from 'react';

const UpdateUser = () => {
    const { user, updateUser } = useContext(UserContext);
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if (newName && newAge) {
            updateUser({ name: newName, age: parseInt(newAge) });
            setNewName('');
            setNewAge('');
        }

    }

  return (
      <div>
          <h2>Update User</h2>
          <form onSubmit={handleClick}>
                <input 
                    type="text" 
                    placeholder="New Name" 
                    value={newName} 
                    onChange={(e) => setNewName(e.target.value)} 
                />
                <input 
                    type="number" 
                    placeholder="New Age" 
                    value={newAge} 
                    onChange={(e) => setNewAge(e.target.value)} 
                />
              <button type="submit">Update User</button> 
            </form>
      
    </div>
  )
}

export default UpdateUser
