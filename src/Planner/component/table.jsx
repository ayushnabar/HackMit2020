import React, {Component} from 'react';
import fire from '../../Firebase/firebase.js';

class Planner extends Component {
  	render(){
    	return (
      		<div class="container-fluid" id="table">
      			<div class="row">
	        		<div class="col">
	        			Term
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
	        		</div>
	        		<div class="col">
	        		</div>
	        		<div class="col">
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