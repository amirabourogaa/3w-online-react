import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          age={user.age}
          description={user.description}
          image={user.image}
          buttonText={user.buttonText}
        />
      ))}
    </div>
  );
};

export default UserList;
