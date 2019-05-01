 import React from "react";
 const Comment = ({username, text , likes})=>{
     return (
         <div className='comment-section'>
         <div><strong>{username}</strong> <span>{text}</span> </div>
         </div>
     )
 }




 export default Comment;