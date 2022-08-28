let renderEntireTree = () => {
    console.log('state us changed')
};

let state = {
    profilePage:{
        posts: [
            {id: 1, message:'fdgdfg', likesCount: 11 },
            {id: 2, message:'rtrtrrt', likesCount: 15},
            {id: 3, message:'cvcv', likesCount: 5},
        ],
        newPostText:'LaLaLaLa'
    },
    dialogsPage: {
        dialogs:[
            {id: 1, name:'Dima'},
            {id: 2, name:'Andrey'},
            {id: 3, name:'Sveta'},
            {id: 4, name:'Sacha'},
            {id: 5, name:'Viktor'},
            {id: 6, name:'Valera'}
        ],
        messages:[
            {id: 1, message:'HiHi'},
            {id: 2, message:'Yo'},
            {id: 3, message:'Ssss'},
            {id: 4, message:'EEE'},
            {id: 5, message:'AAAr'},
        ],
        newMessageText:'Ho Ho Ho'
    },
    sidebar:{
        friends:[
            {id: 1, name: '111'},
            {id: 2, name: '222'},
            {id: 3, name: '333'}
        ]
    }
    }
window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}
export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
export const updateNewMessageText = (newpText) => {
    state.dialogsPage.newMessageText = newpText;
    renderEntireTree(state);
}
export const subscribe = (observer) => {
    renderEntireTree = observer;
}
export default state;
