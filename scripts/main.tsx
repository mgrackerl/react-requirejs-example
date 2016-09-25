/// <reference path="../typings/index.d.ts" />

import React = require('react');
import ReactDOM = require('react-dom');
import DatePicker = require('react-datepicker'); // 3rd party DatePicker component
import moment = require('moment'); // use for the DatePicker component

// callback function for DatePicker onChange event
let handleChange = function(){
  return function(date:any) {
    console.log("data is: " + date);
  }; 
} 

// Create new React component that consumes 3rd party DatePicker component
var myDivElement = <div>
        <DatePicker
            selected={moment()}
            onChange={handleChange} />
</div>;
// Render newly create "myDivElement" component
ReactDOM.render(myDivElement, document.getElementById('example'));