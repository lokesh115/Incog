import React from "react";

function ViewStory(state){
    return(
        <div>
            <h1>This is the stroy</h1>
            {console.log(state)}
            <p>{state.story}</p>
        </div>
    );
}


export default ViewStory;