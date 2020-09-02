import React, {useState} from 'react';
import './App.css';

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
	return (
  	<button onClick={handleClick}  className="margin">
      +{props.increment}
    </button>
  );
}

function Display(props) {
	return (
  	<div className="messageDisplay">{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 buttonSection">
          <div>
<Button onClickFunction={incrementCounter} increment={1}/>
<Button onClickFunction={incrementCounter} increment={5} />
<Button onClickFunction={incrementCounter} increment={10} />
<Button onClickFunction={incrementCounter} increment={100} />
<Display message={counter}/>
</div> 
    </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      

 
  );
}

export default App;
