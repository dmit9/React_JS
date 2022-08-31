let initialState = {
    posts: [
        {id: 1, message:'fdgdfg', likesCount: 11 },
        {id: 2, message:'rtrtrrt', likesCount: 15},
        {id: 3, message:'cvcv', likesCount: 5},
    ],
    newPostText:''
};

const sidebarReducer =(state = initialState, action) => {

    return state;
}
export  default sidebarReducer;
