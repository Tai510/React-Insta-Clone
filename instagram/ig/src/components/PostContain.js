import React from "react";
import Comments from "./Comments"



const PostContain = (props) => {
  const [commentInput, setCommentInput] = React.useState("")
  const addComment = (e, username)=>{
    e.preventDefault()
props.item.comments.push({
  username:username,
  text:commentInput
  
})
  }
   return (
     <div className='post'>
         <div className='thumbnail-container'>
         <div className='thumbnail-img'><img src={`${props.item.thumbnailUrl}`} alt="post"/></div>
         <div className='username'><strong>{props.item.username}</strong></div>
         </div>
         <div className='img'><img src={`${props.item.imageUrl}`} alt="post"/></div>
         <div className='page-icons'>
         <div><i className="far fa-heart"></i></div>
         <div><i className="far fa-comment"></i></div>
         </div>
         <div className='likes'><strong>{`${props.item.likes} likes`}</strong></div>
         <Comments data={props.item.comments} likes={props.item.likes}/>
         
         
    <form onSubmit={e=> addComment(e, "Tashi")}>
    <input className='comment-input' placeholder='Add a comment ...' type="text" id="site-search" onChange={e=>setCommentInput(e.target.value)} value={commentInput}/>
    </form>
     </div>  /* post end */
   )

}



export default PostContain;