import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
    <div className={classes.posts}>
      <Post message='Hi, how are you?' likesCount='0'/>
      <Post message="It's my first post" likesCount='23'/>
    </div>
  </div>);
}

export default MyPosts;