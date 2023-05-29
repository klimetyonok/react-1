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
          <a>Profile</a>
        </div>
        <div className={classes.item}>
          <a>Messages</a>
        </div>
        <div className={classes.item}>
          <a>News</a>
        </div>
        <div className={classes.item}>
          <a>Music</a>
        </div>
        <div className={classes.item}>
          <a>Settings</a>
        </div>
      </nav>);
}

export default Navbar;