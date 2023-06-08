import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsData = [{
        id: 1,
        name: 'Agafia'
    }, {
        id: 2,
        name: 'Arkadiy'
    }, {
        id: 3,
        name: 'Nikifor'
    }, {
        id: 4,
        name: 'Varvara'
    }, {
        id: 5,
        name: 'Petr'
    }];

    let messagesData = [{
        id: 1,
        message: 'Hi'
    }, {
        id: 2,
        message: 'How is your it-kourses?'
    }, {
        id: 3,
        message: 'How are you doing?'
    }];

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = messagesData
        .map(message => <Message message={message.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} /> */}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                {/* <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} /> */}
            </div>
        </div>
    );
}

export default Dialogs;