import React,{useState,useEffect} from 'react';
import MySoloPost from './MySoloPost';
import "../App.css"

function MyPosts({uname,token}){
    const [myPosts,setMyPosts] = useState([]); 
    const req = {
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
            'auth-token' : token
        },
        body:JSON.stringify({
                "name" : uname
            })
    };

    useEffect(()=>{
        fetch("https://incog-back.herokuapp.com/api/posts/userPosts",req)
        .then(response=>response.json())
        .then(data=>{
            setMyPosts(data);
            });
    });
    return(
        <div>
            <h1 style={{marginTop:"5%",marginBottom:"5%"}}>My posts!!!!!!!!!</h1>
            <ul className="postsList">
            {myPosts.map(post => (
              <li key={post._id}><MySoloPost name={post.name} date={post.date.slice(0,10)} time={post.time} title={post.title} story={post.story} id={post._id} token={token}/></li>
            ))}
          </ul>

        </div>
    )
}

export default MyPosts;