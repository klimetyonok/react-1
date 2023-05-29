import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
 
    return (
      <div className={classes.item}>
        <img src='https://i.pinimg.com/564x/e0/86/35/e086353b7879e4c2d4d903fe47ab2d5a.jpg'></img>
        { props.message }
        <div>
        <span>like</span>
        { props.likesCount }
        </div>
      <input value='5'/>
      <input value='6'/>
      </div>);
}

export default Post;