import {AllAction} from "./state";
import React from "react";

export type InitializationStatePageType = {
    post:PostType []
    newPostText:string
}

type PostType = {
    id:number;
    message:string
    likeCount:number
}

const InitializationState:InitializationStatePageType = {
    post : [{id:1,message:'Hi, how are you?', likeCount:12},
        {id:2,message:'Hi, how are you?', likeCount:10},
        {id:3,message:'Hi, how are you?', likeCount:8},
        {id:4,message:'Hi, how are you?', likeCount:6},],
    newPostText:'it-kamasutra'
}


export  const pageReducer= (state=InitializationState,action:AllAction) => {

    switch (action.type) {

        case 'ADD-Post': {
            let newPost =
                {id: 6, message: state.newPostText, likeCount: 18}

            state.post.push(newPost)
            state.newPostText = ''
           break
        }
        case 'UpdateText': {

                state.newPostText=action.newText
            break
        }

        default :return state
}
    }




