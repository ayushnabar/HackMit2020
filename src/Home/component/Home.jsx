
import React, {Component} from 'react';
import fire from '../../Firebase/firebase.js';
import history from '../../history'
import {Course} from '../../Info/component/course.js'
import Planner from '../../Planner/component/table';
import '../../css/home.css'
import ThreadDisplay from '../../ThreadDisplay/component/ThreadDisplay.jsx';

class Home extends Component {
    constructor(props){
        super(props);
        this.handleClassInputChange = this.handleClassInputChange.bind(this);
        this.handlePreRequisiteChange = this.handlePreRequisiteChange.bind(this);
        this.handleUnitInputChange = this.handleUnitInputChange.bind(this);
        this.addClass = this.addClass.bind(this);
        this.handlePreReqInputChange = this.handlePreReqInputChange.bind(this);
        this.generateSchedule = this.generateSchedule.bind(this);
        this.logout = this.logout.bind(this);
        this.addCollege = this.addCollege.bind(this);
        this.handleCollegeInputChange = this.handleCollegeInputChange.bind(this);
        this.generate = this.generate.bind(this);
        this.state = {
            user: fire.auth().currentUser,
            college: "",
            oneClass: "",
            unitCap: 0,
            classes: [],
            preReqList: [],
            nonPreReqList: [],
            preReqName: "",
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
            SeniorSummer: [],
            fill: "hello",
            preReq: false,
            toShow: true,
            summer: true,
            quarter: true,
            showPlanner: false,
            showDiscussion: false,
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

    handlePreReqInputChange(event){
        var temp = event.target.value;
        var courses = temp.split("\n");
        this.setState({
            preReqList: courses,
            preReqName: temp,
        });

    }
    handleUnitInputChange(event){
        this.setState({
            toShow: true,
            unitCap: event.target.value,
        });

    }
    addCollege(){
        const temp = this.state.college;
        fire.database().ref('users/'+fire.auth().currentUser.uid).update({
            college: temp,
        })
        //add college to users firebase
        this.setState({
           college: "",
        });
    }
    handleCollegeInputChange(event){
        console.log(event.target.value );
        this.setState({
            college: event.target.value,
        })  
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
        if(this.state.oneClass.length > 0 ){
            var newCourse = new Course(this.state.preReq, 4, this.state.oneClass, this.state.preReqList, "Fall");
            var toUpdate = [];
            const names = this.state.classes;
            names.push(newCourse);
            for(var i = 0; i < names.length; i++){
                toUpdate.push(names[i].name)
            }
            fire.database().ref('users/'+fire.auth().currentUser.uid).update({
                classes: toUpdate,
            })
            this.setState({
                classes: names,
                oneClass: "",
                preReqName: "",
                preReqList: [],
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
            if(this.state.classes[i].prereqs.length === 0){
                this.state.nonPreReqList.push(this.state.classes[i]);
            }else{
                this.state.preReqList.push(this.state.classes[i]);
            }
        }
        //user enters a class
        //class only has 1 prereq
        //list of pre requisites
        for(let i = 0; i < this.state.nonPreReqList.length; i++){
            this.state.orderedList.push(this.state.nonPreReqList[i]);
        }
    }
    generate(){
        this.setState({showPlanner: true})
    }
    logout(){
        
        fire.auth().signOut();
        history.replace('/signin');
    }
    render() {
        
        return( 
            <div id="home-page">
                <h1 id="title">
                    Kana: Curriculum Planner
                </h1>
                <div class="form-group">
                    <label for="exampleFormControlInput1">College</label>
                    <textarea className = "form-control post-editor-input" value={ this.state.college } onChange={ this.handleCollegeInputChange }/>
                    <button type="button" class="btn btn-dark" onClick = { this.addCollege } > Add College Name </button>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Enter Unit Cap</label>
                    <textarea className = "form-control post-editor-input" value={this.state.toShow ? this.state.unitCap : ""} onChange={ this.handleUnitInputChange }/>
                    <button type="button" class="btn btn-dark" onClick = {() => this.addUnitCap()}> Add Unit Cap </button>
                </div>
                <div class="form-group">
                    <label >Class: {this.state.classes.length + 1}</label>
                    <textarea className = "form-control post-editor-input" value={this.state.oneClass} onChange={ this.handleClassInputChange }/>
                    {!this.state.preReq ? <button type="button" class="btn btn-dark" onClick = { this.addClass } > Add Class Name </button> : null}
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" onChange={ this.handlePreRequisiteChange } value="" id="defaultCheck1"></input>
                    <label class="form-check-label" for="defaultCheck1" >Are there any prerequisites?</label>
                </div>
                {this.state.preReq ? <div class="form-group">
                    <label >Enter the Prerequisites for the class</label>
                    <textarea className = "form-control post-editor-input" value={this.state.preReqName} onChange={ this.handlePreReqInputChange }/>
                    <button type="button" class="btn btn-dark" onClick = { this.addClass } > Enter </button>
                </div> : null}
                    <button type="button" class="btn btn-danger" onClick = { this.addClass } > Clear List </button>
                    <button type="button" class="btn btn-success" onClick={ this.generate } > Generate </button>
                    <div>
                        { this.state.college }
                    </div>
                <button type="button" class="btn btn-warning" onClick={this.logout} > Logout</button> 
                <button type="button" class="btn btn-success" onClick={ this.generate } > Discussion </button>
                <div id="planner">
                    {this.state.showPlanner ? <Planner courses = {this.state.classes} /> : null}
                </div>
                {this.state.showDiscussion ? <ThreadDisplay /> : null}
            </div>
            
        )
    }
}   

export default Home;