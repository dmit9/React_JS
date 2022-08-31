import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
