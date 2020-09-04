

//import React library, and useState from react
import React from "react";
import "./App.css";

import Counter from './ReactProjects/Counter';
import GithubCardsApp from './ReactProjects/GithubCardsApp';

function App() {
  
  
  return (
    <div>
      <Counter />
      <br/>
      <GithubCardsApp />
      <br/>
      
    </div>
  );
}

//export App component to the DOM
export default App;
