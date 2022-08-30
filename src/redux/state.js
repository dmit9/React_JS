const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let store = {
    _state: {
        profilePage:{
            posts: [
                {id: 1, message:'fdgdfg', likesCount: 11 },
                {id: 2, message:'rtrtrrt', likesCount: 15},
                {id: 3, message:'cvcv', likesCount: 5},
            ],
            newPostText:''
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
            newMessageBody:''
        },
        sidebar:{
            friends:[
                {id: 1, name: '111'},
                {id: 2, name: '222'},
                {id: 3, name: '333'}
            ]
        }
    },
    _callSubscriber()  {
        console.log('state us changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        /* debugger; */
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}
export const addPostActionCreator = () => {
    return{
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}
export const sendMessageCreator = () => {
    return{
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}
export default store;
window.store = store;
