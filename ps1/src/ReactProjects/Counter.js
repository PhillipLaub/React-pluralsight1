

//import React library, and useState from react
import React, { useState } from "react";
import "../App.css";

//props passed to Button function from App component
function Button(props) {
  //create handleClick function, pass in onClickFunction props from App <Button /> , and increment props from App <Button />
  const handleClick = () => {
    //onClick, pass in value of increment for corresponding button
    props.onClickFunction(props.increment);
  };

  //returns a button to the Virtual DOM, with an onClick functionality of 'handleClick', 
  // displays '+' on the button, followed by the associated increment value defined by the props passed from App <Button />
  return <button onClick={handleClick}>+{props.increment}</button>;
}

//created a function called Display, pass in props from App
function Display(props) {
  //returns a div to the virtual DOM, div displays the props defined from App <Display />, message
  return <div>{props.message}</div>;
}

function App() {
  //React Hooks
  //make variables and functions in the parent function App, to be passed down to children Button and Display
  //initial value of counter is set to '0', define setCounter to be used in function incrementCounter, passes in incrementValue, 
  // which will be used in setCounter, which adds the counter, and incrementValue values
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) =>
    setCounter(counter + incrementValue);

    //components to be displayed in the DOM
  return (
    <div>
      {/* Calls above functions:create 4 button components, creating props onClickFunction, attaching function incrementCounter defined above, and props increment, each button with its own defined increment value
          create a display component with defining the props of message, and setting its value as counter
      */}
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={15} />
      <Button onClickFunction={incrementCounter} increment={20} />
      <Display message={counter} />
    </div>
  );
}

//export App component to the DOM
export default App;

