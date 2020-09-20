import React, {Component} from 'react';
import fire from '../../Firebase/firebase';
import '../../css/signin.css';
import history from '../../history';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
        }
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => 
        {history.replace('/');}).catch((error)=> {
            console.log(error);
        });
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=> {console.log(u)})
        .catch((error) => {
            console.log(error);
        })
        
    }
    handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    render(){
        return(
            <div id="signin">
                <form id="signinform">
                    <h1 id="title">
                        Kana: Curriculum Planner
                    </h1>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input value= {this.state.email} onChange={this.handleChange} type="email" class="form-control" name="email"
                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" 
                        class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                    </div>
                    <div id="buttons">
                        <button type="submit" onClick={this.login} class="btn btn-primary">Submit</button>
                        <button onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-info">SignUp</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;












