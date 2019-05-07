import React from "react";
import PostContain from "./PostContain";




const Post = (props) => {
    return (
      <div>
          {
             props.data.map((item, index) => {
                 return <PostContain item={item} key={index} {...props} />
             }) 
          }
      </div>    
    )

}








export default Post;