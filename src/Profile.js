import React from 'react';
import { Component } from 'react';
import image6 from './img/profile.png'
import './Profile.css'
class Profile extends Component{
    render(){
        return (
            <div className="BlogPost-Author">
            <div className="row">
                <div className="col-sm-3">
                    <div className="profilpiture">
                    <img src={image6} />
                    </div>                   
                </div>
                <div className="col-sm-9">
                   <span class="about">About the Author</span>
                   <h3 class="h1">Eric Bishard</h3>
                   <p>Eric Bishard is a Developer Advocate and former member of the&nbsp;KendoReact&nbsp;team at Progress.
                        A software engineer with experience building web based applications with a focus on components for user interfaces in Angular and React,
                         Eric works with <a href="https://twitter.com/couchbase" title="" target="">@Couchbase</a>,&nbsp;tweets <a href="https://twitter.com/httpJunkie" title="" target="">@httpJunkie</a>&nbsp;and blogs at&nbsp;<a href="http://ReactStateofMind.com" title="" target="">ReactStateofMind.com</a>
                         .</p>
                   </div>
            </div>
            </div>
        )
    }
}

export default Profile;