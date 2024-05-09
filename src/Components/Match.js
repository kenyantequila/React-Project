import React from 'react';
import './Match.css';

function Match({ selectedPeople,onRemove}) {
  const handleCardClick = (person) => {
    onRemove(person);}
  return (
    <div className='Match'>
      <h2 className='heading'>Liked People</h2>
      <div className="liked"></div>
      {selectedPeople.map((person) => (
      <div key={person.id} onClick={() => handleCardClick(person)} className="liked-person">
          <h3 className='name'>{person.name}</h3>
          <p className='age'>Age:{person.age}</p>
          <p className='gender'>Gender:{person.gender}</p>
          <p className='location'>Location:{person.location}</p> 
        </div>

      ))}
    </div>
  );
}

export default Match;