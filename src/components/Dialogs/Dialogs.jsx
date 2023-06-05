import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
    <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Agafia' id='1' />
                <DialogItem name='Arkadiy' id='2' />
                <DialogItem name='Nikifor' id='3' />
                <DialogItem name='Varvara' id='4' />
                <DialogItem name='Petr' id='5' />
            </div>

            <div className={classes.messages}>
                <Message message='Hi' />
                <Message message='How is your it-kourses?' />
                <Message message='How are you doing?' />
            </div>
        </div>
    );
}

export default Dialogs;