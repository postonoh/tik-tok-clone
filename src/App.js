import React from 'react';
import Video from './Video'

import './App.css';

function App() {
  return (
    // BEM
    <div className="app">
     <h1>Building Tik Tok Clone 🚀</h1>

     <div className="app__videos">
       <Video />
       <Video />
       <Video />
       <Video />
     </div>
    </div>
  );
}

export default App;
