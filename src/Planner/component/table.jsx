
import React, {Component} from 'react';
// import fire from '../../Firebase/firebase.js';
// import Home from '../../Home/component/Home';
// import {Course} from '../../Info/component/course';

class Planner extends Component {
    // constructor(props){
    //   super(props);
    // }
    // classes are passed in as this.props.courses
  	render(){
    	return (
      		<div class="container-fluid" id="table">
      			<div class="row">
	        		<div class="col">
	        			Course
	        			<hr/>
	        			{this.props.courses.map((course, index) => <li key={index}> {course.name} </li>)}
	        		</div>
	        		<div class="col">
	        			Units
	        			<hr/>
	        			{this.props.courses.map((course, index) => <li key={index}> {course.units} </li>)}
	        		</div>
	        		<div class="col">
	        			Prerequisites
	        			<hr/>
	        			{this.props.courses.map((course, index) => <li key={index}> {course.prereqs[0]} </li>)}
	        		</div>
	        		<div class="col">
	        			Term
	        			<hr/>
	        			{this.props.courses.map((course, index) => <li key={index}> {course.term} </li>)}
	        		</div>
	        	</div>
      		</div>
   		)
  	}
}

export default Planner;