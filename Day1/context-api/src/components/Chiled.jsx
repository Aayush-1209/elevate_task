import React from 'react';
import GrandChild from './GrandChild';

const Child = () => {
  return (
    <div style={{ border: '1px dashed blue', padding: '10px', marginTop: '10px' }}>
      <h3>👶 Child</h3>
      <GrandChild />
    </div>
  );
};

export default Child;
