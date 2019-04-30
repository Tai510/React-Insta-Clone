import React from "react";
import PostContain from "./PostContain";




const Post = (props) => {
    return (
      <div>
          {
             props.data.map((item) => {
                 return <PostContain item={item} />
             }) 
          }
      </div>    
    )

}





export default Post;