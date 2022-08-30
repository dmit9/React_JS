
let store = {
    _state: {
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
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newpText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;
