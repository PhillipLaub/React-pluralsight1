
  
//input box will clear out every second, because entire <div> is being reloaded in the DOM every second
const render = () => {
  document.getElementById('mountNode').innerHTML = `
	<div>
    Hello HTML
<input/>
  <pre>${(new Date).toLocaleTimeString()}</pre>
  </div>
`;


//Will display current time with ticks, and allow you to type in the input and keep ticking, because only the <pre> is being updated in the DOM every second
ReactDOM.render(
  React.createElement(
    'div', 
    null, 
    'Hello React',
    React.createElement('input', null),
    React.createElement('pre', null, (new Date).toLocaleTimeString())
  ),
  document.getElementById('mountNode2'),
);

}


// 	currentTime: (new Date).toLocaleTimeString()
 setInterval(render, 1000);



