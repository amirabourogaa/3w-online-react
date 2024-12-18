import React from 'react';

const UserCard = ({ name, age, description, image, buttonText }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      maxWidth: '300px',
      margin: '16px auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>
      <img src={image} alt={`${name}'s profile`} style={{ width: '100px', borderRadius: '50%' }} />
      <h2 style={{ fontSize: '18px', margin: '10px 0' }}>{name}</h2>
      <p style={{ color: '#555', fontSize: '14px' }}>Âge : {age}</p>
      <p style={{ fontSize: '14px', color: '#777' }}>{description}</p>
      <button style={{
        padding: '8px 16px',
        backgroundColor: '#3C7169',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px'
      }}>
        {buttonText}
      </button>
    </div>
  );
};

export default UserCard;
