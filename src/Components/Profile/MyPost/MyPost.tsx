import React, {ChangeEvent} from 'react';
import  s from './MyPost.module.css'
import {MyPostType} from "./MyPostContainer";









export  const MyPost = React.memo( (props:MyPostType) => {


console.log('render')

    const AddPost = ()=> {
            props.addPost(props.pageReducer.newPostText)


    }


const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {
        let newPost =e.currentTarget.value
        props.updatePost(newPost)

}


    return (
        <div>
         <div className={s.style}>{
             props.pageReducer.post.map((p)=>{
                 return (
                     <li key={p.id}>
                         {p.message}{p.likeCount}
                     </li>
                 )
             })
         }</div>
            <input onChange={onChangeHandler} value={props.pageReducer.newPostText} />

            <button  onClick={AddPost} className={s.style_Button}>Add Post</button>

        </div>
    );
});

