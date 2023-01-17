import React from 'react';
import city from "../../image/iceland.jpg";
import  s from './Profile.module.css'
import {MyPost} from "./MyPost";
import {ProfileInfo} from "./ProfileInfo";

export  const Profile = () => {
    return (
<div className={s.content} >
    <div className={s.style} >
        <img className={s.city_img} src={city}/>Main contain</div>
    <ProfileInfo/>
    <MyPost/>
</div>

    );
};

