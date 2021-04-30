import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory,IndexRoute } from 'react-router';

class Rounting extends React.Component{
    render(){
        return <div>
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
              {this.props.children}
        </div>
    }
}

export default Rounting;

// class Home extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>Home</h1>
//                 <p>Loaram ipsum</p>
//             </div>
//         )
//     }
// }

// export default Home;

// class About extends React.Component {
//     render() {
//        return (
//           <div>
//              <h1>About...</h1>
//           </div>
//        )
//     }
//  }
//  export default About;


//  class Contact extends React.Component {
//     render() {
//        return (
//           <div>
//              <h1>Contact...</h1>
//           </div>
//        )
//     }
//  }
//  export default Contact;