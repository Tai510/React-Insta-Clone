import React from "react";
import Comments from "./Comments"


const PostContain = (props) => {
   return (
     <div className='post'>
         <div className='thumbnail-container'>
         <div className='thumbnail-img'><img src={`${props.item.thumbnailUrl}`} alt="post"/></div>
         <div className='username'><strong>{props.item.username}</strong></div>
         </div>
         <div className='img'><img src={`${props.item.imageUrl}`} alt="post"/></div>
         <div className='page-icons'>
         <div><i class="far fa-heart"></i></div>
         <div><i class="far fa-comment"></i></div>
         </div>
         <div className='likes'><strong>{`${props.item.likes} likes`}</strong></div>
         <Comments data={props.item.comments} likes={props.item.likes}/>
     </div>  /* post end */
   )

}



export default PostContain;