import './App.css';
import React from 'react'
import PostPage from './PostPage.jsx';
import UserDetailsPage from './UserDetailsPage.jsx';
import UserProfilePage from './UserProfilePage.jsx';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function UserDetails(props){
    return (
        <div> 
            <p> User Details Page! </p>

            <img src={props.user.coverImageUrl} alt="postimage" />
            <div> User ID: {props.user.id} </div>
            <img src={props.user.profileImageUrl} alt="profileimage"/>
            <div> {props.user.name} </div>
            <div> {props.user.username} </div>
            <div> {props.user.email} </div>
            <Link to={`/users/${props.user.id}`} >Profile Page</Link>
            
        </div>
    )
}
export default UserDetails;