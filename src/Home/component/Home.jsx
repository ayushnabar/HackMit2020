import React, {Component} from 'react';

class Home extends Component {
    render() {
        return( 
            <div>
               <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
            </div>
        )
    }
}   

export default Home;