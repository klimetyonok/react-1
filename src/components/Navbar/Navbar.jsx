import React from 'react';
import classes from './Navbar.module.css';
console.log(classes);

// let classes = {
//   'nav': '';
//   'item': '';
//    'active: '';
// }

// let class1 = 'item';
// let class2 = 'active';
// let newClass = `${classes.item} + ${classes.active}`;

const Navbar = () => {
return (<nav className={classes.nav}>
        <div className={`${classes.item} + ${classes.active}`}>
          <a href='/profile'>Profile</a>
        </div>
        <div className={classes.item}>
          <a href='dialogs'>Messages</a>
        </div>
        <div className={classes.item}>
          <a href='news'>News</a>
        </div>
        <div className={classes.item}>
          <a href='music'>Music</a>
        </div>
        <div className={classes.item}>
          <a href='settings'>Settings</a>
        </div>
      </nav>);
}

export default Navbar;