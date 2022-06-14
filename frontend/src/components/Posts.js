import React,{useState} from "react";
import '../App.css';

function Posts(props){
    const [show,setShow] = useState({
        button:"View",
        value:false
    });

    const clickHandler = ()=>{
      if(show.value){
          setShow({...show,button: "View",value:false});
      }
      else{
          setShow({...show,button: "Hide",value:true});
      }
  }

    return(
        <div className="posts">
          <h2>{props.name}</h2>
          <h3>{props.title}</h3>
          {//<p>{props.story}</p>;
          }
          <button className='delete' onClick={clickHandler}>{show.button}</button>
          {show.value && 
          <div className="postStory">
            <p>{props.story}</p>
          </div>}
        </div>
    );
}
export default Posts;