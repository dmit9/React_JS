const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
};

const dialogsReducer =(state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {...state,
                    messages: [...state.messages, {id: 6, message: body}], // скопировали массив Мессадж и добавили в конец новое
                    newMessageBody: ''
                };

        case UPDATE_NEW_MESSAGE_BODY:
            return  {...state, newMessageBody: action.body};

        default:
            return state;
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
export  default dialogsReducer;
