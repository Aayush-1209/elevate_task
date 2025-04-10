import React from 'react';
import { MyContext } from './MyContext';
import Parent from './components/Parent';

const App = () => {
  const user = {
    name: 'Aayush Pandey',
    role: 'Full Stack Developer in the Making 💻🔥',
  };

  return (
    <MyContext.Provider value={user}>
      <div style={{ padding: '20px' }}>
        <h1>🚀 Avoiding Prop Drilling with Context</h1>
        <Parent />
      </div>
    </MyContext.Provider>
  );
};

export default App;
