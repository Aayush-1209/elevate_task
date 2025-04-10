import React from 'react';
import Child from './Child';

const Parent = () => {
  return (
    <div style={{ border: '1px solid grey', padding: '10px', marginTop: '10px' }}>
      <h2> Parent</h2>
      <Child />
    </div>
  );
};

export default Parent;
