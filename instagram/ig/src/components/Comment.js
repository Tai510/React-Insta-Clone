 import React from "react";
 const Comment = ({username, text , likes})=>{
     return (
         <div className='comment-section'>
         <div><span><strong>{username}</strong>{text}</span> </div>
         </div>
     )
 }




 export default Comment;