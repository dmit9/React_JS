const SEND_MESSAGE = 'SEND-MESSAGE';

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
};

const dialogsReducer =(state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {...state,
                    messages: [...state.messages, {id: 6, message: body}], // скопировали массив Мессадж и добавили в конец новое
                };
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export  default dialogsReducer;
