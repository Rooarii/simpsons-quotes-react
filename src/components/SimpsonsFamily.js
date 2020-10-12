import React from 'react';
function SimpsonsFamily() {
    const simpsons = ['Marge', 'Homer', 'Bart', 'Lisa', 'Maggie'];
    return (
      <ul>
        {
          simpsons.map(member => <li key={member}>{member}</li>)
        }
      </ul>
    );
  }