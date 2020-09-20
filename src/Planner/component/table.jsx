
import React, {Component} from 'react';
// import fire from '../../Firebase/firebase.js';
// import Home from '../../Home/component/Home';
// import {Course} from '../../Info/component/course';

class Planner extends Component {
    constructor(props){
    	super(props);
    	this.printTable = this.printTable.bind(this);
    }

    printTable() {
    	console.log("hi");
    	for (let i = 0; i < this.props.courses.length; ++i) {
    		console.log(this.props.courses[i]);
	    	let row = document.createElement("div");
	    	row.classList.add("row");
	    	let col1 = document.createElement("div");
	    	col1.classList.add("col");
	    	col1.innerHTML = this.props.courses[i].name;
	    	let col2 = document.createElement("div");
	    	col2.classList.add("col");
	    	col2.innerHTML = this.props.courses[i].units;
	    	let col3 = document.createElement("div");
	    	col3.classList.add("col");
	    	let prereqList;
	    	for (let j = 0; j < this.props.courses[i].prereqs.length; ++j) {
	    		if (j == 0)
	    			prereqList = this.props.courses[i].prereqs[j];
	    		else
	    			prereqList += ", " + this.props.courses[i].prereqs[j];
	    	}
	    	row.appendChild(col1);
	    	row.appendChild(col2);
	    	row.appendChild(col3);

	    	document.querySelector("#table").appendChild("row");
	    }
    }
    
  	render(){
    	return (
      		<div class="container-fluid" id="table">
      			<button type="button" class="btn btn-primary" onClick={ this.printTable } > Generate </button>
      			<div class="row">
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
      		</div>
   		)
  	}
}

export default Planner;