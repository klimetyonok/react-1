import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://i.pinimg.com/564x/6c/d7/6d/6cd76d4a1f7a2af5d21b0cd325e0a08a.jpg' alt='terrace'></img>
      </div>
      <div className={classes.descriptionBlock}>
        ava+description
        <div>
        <img class={classes.avatar} src='https://i.pinimg.com/564x/84/ba/3f/84ba3f1393d83359ce4292933cd7de97.jpg' alt='terrace'></img>
        </div>
      </div>
    </div>);
}

export default ProfileInfo;