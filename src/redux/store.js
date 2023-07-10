import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 23 }
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
            messages: [{
                id: 1,
                message: 'Hi'
            }, {
                id: 2,
                message: 'How is your it-kourses?'
            }, {
                id: 3,
                message: 'How are you doing?'
            }],
            dialogs: [{
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
            }],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;

