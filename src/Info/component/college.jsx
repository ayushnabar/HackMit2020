import React, { Component } from 'react';

class CollegeInput extends Component{
    constructor(props){
        super(props);
        this.addCollege = this.addCollege.bind(this);
        this.handleCollegeInputChange = this.handleCollegeInputChange.bind(this);
        this.state = {
            name: "",
        }
    }
    addCollege(){
        this.setState({
            name: "",
        });
        //add college to users firebase
        
    }
    handleCollegeInputChange(event){
        this.setState({
            name: event.target.value,
        });
    }
    render(){
        return(
            <div class="form-group">
                    <label for="exampleFormControlInput1">College</label>
                    <textarea className = "form-control post-editor-input" value={this.state.college} onChange={ this.handleCollegeInputChange }/>
                    <button type="button" class="btn btn-primary" onClick = { this.addCollege } > Add College Name </button>
                    </div>
        )
    }
}

export default CollegeInput;