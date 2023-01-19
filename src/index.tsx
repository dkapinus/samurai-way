import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DialogData = [{id:1,name:'Hróðgeirr'},
    {id:2,name:'Eiríkr'},
    {id:3,name:'Hróðgeirr'},
    {id:4,name:'Egill'},
    {id:5,name:'Styrr'}
]

const MessageData = [{id:1,message:'Å slite og slepe for å få endene til å møtes'},
    {id:2,message:'Å være i den sjuende himmel'},
    {id:3,message:'Å drive dank'},
    {id:4,message:'Å dra ved nesa'},
    {id:5,message:'Å gjøre en mygg til en elefant'}]

const PostData =[{id:1,message:'Hi, how are you?', likeCount:12},
    {id:2,message:'Hi, how are you?', likeCount:10},
    {id:3,message:'Hi, how are you?', likeCount:8},
    {id:4,message:'Hi, how are you?', likeCount:6}]

ReactDOM.render(
    <App DialogData={DialogData} MessageData={MessageData} PostData={PostData}/>,
  document.getElementById('root')
);






