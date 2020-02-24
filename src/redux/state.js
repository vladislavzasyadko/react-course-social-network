import { rerenderEntireTree } from "../render";

let state = {
    profileData:{
        posts:[
            { message: "Hello!", likeCount: 20 },
            { message: "Welcome to my page!", likeCount: 15 },
            { message: "REEEEEEEEEEEEEEEEE", likeCount: 1 },
            { message: "one more ", likeCount: 100 },
        ],
    },
    dialogsData:{
        dialogs:[
            { id: 1, name: 'User 1', },
            { id: 2, name: 'User 2', },
            { id: 3, name: 'User 3', },
            { id: 4, name: 'User 4', },
        ],
        messages:[
            { id: 1, message: 'Hello', },
            { id: 2, message: 'MAAAAAN', },
            { id: 3, message: 'Waduuuup', },
            { id: 3, message: 'hella fuego', },
        ],
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    state.profileData.posts.unshift(newPost);
    rerenderEntireTree(state);
}
export default state