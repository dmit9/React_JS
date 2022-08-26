import { renderEntireTree } from "../render";

const state = {
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
        ]},
    sidebar:{
        friends:[
            {id: 1, name: '111'},
            {id: 2, name: '222'},
            {id: 3, name: '333'}
        ]
    }
    }
window.state = state;
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.props.updateNewPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}


export default state;
