
import React, {Component} from 'react';
import fire from '../../Firebase/firebase.js';
// import user from '../../Firebase/firebase.js';
import CollegeInput from '../../Info/component/college';
import {Course} from '../../Info/component/course.js'
import Table from 'react-bootstrap/Table';

class Home extends Component {
    constructor(props){
        super(props);
        this.handleClassInputChange = this.handleClassInputChange.bind(this);
        this.handlePreRequisiteChange = this.handlePreRequisiteChange.bind(this);
        this.handleUnitInputChange = this.handleUnitInputChange.bind(this);
        this.addClass = this.addClass.bind(this);
        this.generateSchedule = this.generateSchedule.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            college: "",
            oneClass: "",
            unitCap: 0,
            classes: [],
            preReqList: [],
            nonPreReqList: [],
            
            FreshFall: [],
            FreshWinter: [],
            FreshSpring: [],
            FreshSummer: [],
            SophFall: [],
            SophWinter: [],
            SophSpring: [],
            SophSummer: [],
            JuniorFall: [],
            JuniorWinter: [],
            JuniorSpring: [],
            JuniorSummer: [],
            SeniorFall: [],
            SeniorWinter: [],
            SeniorSpring: [],
            SenioSummer: [],
            fill: "",
            preReq: false,
            toShow: true,
            summer: true,
        }
    }
    componentWillMount(){
        //update database
    }
    
    handleClassInputChange(event){
        this.setState({
            oneClass: event.target.value,
        });

    }
    handleUnitInputChange(event){
        this.setState({
            toShow: true,
            unitCap: event.target.value,
        });

    }
    handlePreRequisiteChange(event){
        if(event.target.checked){
            this.setState({
                preReq: true,
            });
        }else{
            this.setState({
                preReq: false,
            });
        }
    }
    addClass(){
        if(this.state.oneClass.length > 0){
            var newCourse = new Course(this.state.preReq, 4, this.state.oneClass);
            const names = this.state.classes;
            names.push(newCourse);
            this.setState({
                classes: names,
                oneClass: "",
            });
        }else{
            //render a popu
        }
    }

    addUnitCap(){
        this.setState({
            toShow: false,
        });
    }
    generateSchedule(){
        for(let i = 0; i < this.state.classes.length; i++){
            if(this.state.classes[i].preReq){
                this.state.preReqList.push(this.state.classes[i]);
            }else{
                this.state.nonPreReqList.push(this.state.classes[i]);
            }
        }
        //user enters a class
        //class only has 1 prereq
        //list of pre requisites

    }
    logout(){
        fire.auth().signOut();
    }
    render() {
        return( 
            <div>
               <CollegeInput />
                <div class="form-group">
                    <label for="exampleFormControlInput1">Enter Unit Cap</label>
                    <textarea className = "form-control post-editor-input" value={this.state.toShow ? this.state.unitCap : ""} onChange={ this.handleUnitInputChange }/>
                    <button type="button" class="btn btn-primary" onClick = {() => this.addUnitCap()}> Add Unit Cap </button>
                </div>
                <div class="form-group">
                    <label >Class {this.state.classes.length}</label>
                    <textarea className = "form-control post-editor-input" value={this.state.oneClass} onChange={ this.handleClassInputChange }/>
                    <button type="button" class="btn btn-primary" onClick = { this.addClass } > Add Class Name </button>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" onChange={ this.handlePreRequisiteChange } value="" id="defaultCheck1"></input>
                    <label class="form-check-label" for="defaultCheck1" >Is a Pre-Requisite?</label>
                </div>
                {this.state.preReq ? <div class="form-group">
                    <label >Enter the PreRequisites for the class</label>
                    <textarea className = "form-control post-editor-input" value={this.state.oneClass} onChange={ this.handleClassInputChange }/>
                    <button type="button" class="btn btn-primary" onClick = { this.addClass } > Enter </button>
                </div> : null}
                    <button type="button" class="btn btn-primary" onClick = { this.addClass } > Clear List </button>
                    <button type="button" class="btn btn-primary" onClick = { this.generateSchedule } > Generate </button>
                    <div>
                        { this.state.college }
                    </div>
                <button onClick={this.logout} > Logout</button>
                <div>
                    <ul class="list-group">
                        { /* make a cool table based on whether a prerequitsite */this.state.classes.map((course, index) => <li key={index}>{course.name}, {course.preReq ? "hellooo" : "nooo"}</li>)}
                    </ul>
                </div>
                <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>1st</th>
                    <th>Fall</th>
                    <th>Winter</th>
                    <th>Spring</th>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                </tbody>
            </Table>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>2nd</th>
                    <th>Fall</th>
                    <th>Winter</th>
                    <th>Spring</th>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                    
                </tr>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                </tbody>
            </Table>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>3rd</th>
                    <th>Fall</th>
                    <th>Winter</th>
                    <th>Spring</th>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                </tbody>
            </Table>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>4th</th>
                    <th>Fall</th>
                    <th>Winter</th>
                    <th>Spring</th>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    {this.state.summer ? <th>Summer</th> : null}
                </tr>
                </tbody>
            </Table>
        </div>
            </div>
            
        )
    }
}   

export default Home;