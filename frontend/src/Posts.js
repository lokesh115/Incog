import React,{useState} from "react";
import './App.css';

function Posts(props){
    const [show,setShow] = useState(false);

    const clickHandler = ()=>{
      setShow(!show);
    }
    return(
        <div className="posts">
          <h2>{props.name}</h2>
          <h3>{props.title}</h3>
          
          {//<p>{props.story}</p>;
          }
          <button onClick={clickHandler}>Nokku</button>
          {show && 
          <div className="desc">
            <p>{props.story}</p>
          </div>}
        </div>
    );
}

export default Posts;