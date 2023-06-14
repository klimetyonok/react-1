let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 23 }
        ],
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
    }
}

export let addPost = (postMessage) => {
debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;