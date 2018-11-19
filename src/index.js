import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function timer(){
    var date = new Date();
    date.setHours(0,30,0); // Set hours, minutes and seconds
   var h = date.toTimeString();
   return  (h.split(' ')[0]);
    }
    const element = (
      <div className="timer_element">
      <h1> {timer()}</h1>
      <div className="designation"> <div className="Hour">Hour</div>     
      <div className="Minute">Minute</div> 
      <div className="Second">Second </div>   
      </div>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
