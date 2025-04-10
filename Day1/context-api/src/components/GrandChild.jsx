import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

const GrandChild = () => {
  const user = useContext(MyContext); // magic happens here

  return (
    <div style={{ border: '1px dotted green', padding: '10px', marginTop: '10px' }}>
      <h4>GrandChild</h4>
      <p>
        Hi, I'm <strong>{user.name}</strong> and I am a <em>{user.role}</em>
      </p>
    </div>
  );
};

export default GrandChild;
