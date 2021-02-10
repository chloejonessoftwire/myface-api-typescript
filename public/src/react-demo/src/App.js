import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react'
import PostPage from './PostPage.jsx';
import UserDetailsPage from './UserDetailsPage.jsx';
import UserProfilePage from './UserProfilePage.jsx';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export function App() {

  return (
    <Router> 
            <h1> MyFace!</h1>
            <Switch> 

              <Route path='/users/1/'>
                <UserProfilePage/>
              </Route>

              <Route path="/posts">
                <PostPage/>
              </Route>

              <Route path="/users">
                <UserDetailsPage/>
              </Route>
              

              <Route path="">
                <div> Sorry, page does not exsist. Please try these</div>
                <Link to="/posts" >Posts Page</Link>
                <Link to="/users" >Users Page</Link>
                <Link to="/users/1">Profile Page</Link>
              </Route>

            </Switch>
    </Router>
  );
 }

export default App;


