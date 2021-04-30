import React, { Component } from 'react';
import axios from 'axios';



class Form extends Component{
     submitdata(params) {
        axios.post('http://localhost:5000/user', 
           this.state
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    handelchange(e){
        console.log(e.target);
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return <frameElement>
            
            <label>Movie Name:</label>
              <input type="text" name="movie" onChange={(e)=>this.handelchange(e)}/>
              <label>Movie Review:</label>
              <input type="text" name="moviesreview" onChange={(e)=>this.handelchange(e)}/>
              <button onClick={()=>this.submitdata()}>submit</button>
        </frameElement>
    }
}

export default Form;