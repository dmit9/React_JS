
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
    getState() {
       /*  debugger; */
        return this._state
    },
    callSubscriber()  {
        console.log('state us changed')
    },
    addPost() {
       /*  debugger; */
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage () {
    let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
    },
    updateNewMessageText(newpText) {
        this._state.dialogsPage.newMessageText = newpText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;
