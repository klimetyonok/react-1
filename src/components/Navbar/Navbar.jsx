import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
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
          <NavLink to='/profile' className={({isActive}) => isActive ? classes.activeLink: ''}>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/dialogs' className={({isActive}) => isActive ? classes.activeLink: ''}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/news' className={({isActive}) => isActive ? classes.activeLink: ''}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/music' className={({isActive}) => isActive ? classes.activeLink: ''}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/settings' className={({isActive}) => isActive ? classes.activeLink: ''}>Settings</NavLink>
        </div>
      </nav>);
}

export default Navbar;