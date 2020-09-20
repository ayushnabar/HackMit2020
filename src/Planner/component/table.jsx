
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
                
	        		</div>
	        		<div class="col">
	        			Course
	        		</div>
	        		<div class="col">
	        			Units
	        		</div>
	        		<div class="col">
	        			Prerequisites
	        		</div>
	        	</div>
	        	<div class="row">
	        		<div class="col">
                {this.props.courses.map((course, index) => <li key={index}> {course.name}, </li>)}
	        		</div>
	        		<div class="col">
              {this.props.courses.map((course, index) => <li key={index}> {course.units}, </li>)}
	        		</div>
	        		<div class="col">
              {this.props.courses.map((course, index) => <li key={index}> {course.prereqs[0]}, </li>)}
	        		</div>
	        	</div>
	        	<div class="row">
	        		<div class="col">
	        		</div>
	        		<div class="col">
	        		</div>
	        		<div class="col">
	        		</div>
	        	</div>
      		</div>
   		)
  	}
}

export default Planner;