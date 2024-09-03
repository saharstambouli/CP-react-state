import React from 'react';

const PersonProfile = ({ person }) => {
  return (
    <div>
      <h1>{person.fullName}</h1>
      <p>{person.bio}</p>
      <img src={person.imgSrc} alt="Profile" />
      <h2>{person.profession}</h2>
    </div>
  );
};

export default PersonProfile;
