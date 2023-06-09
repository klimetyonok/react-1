import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (<div className={classes.content}>
    <div>
      <img src='https://i.pinimg.com/564x/6c/d7/6d/6cd76d4a1f7a2af5d21b0cd325e0a08a.jpg'></img>
    </div>
    <div>
      ava+description
      <img class={classes.avatar} src='https://i.pinimg.com/564x/84/ba/3f/84ba3f1393d83359ce4292933cd7de97.jpg'></img>
    </div>
    <MyPosts />
  </div>);
}

export default Profile;