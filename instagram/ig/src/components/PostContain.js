import React from "react";
import Comments from "./Comments"



const PostContain = (props) => { 
const [commentInput, setCommentInput] = React.useState("")
let [likes, setLikes] = React.useState(props.item.likes)
  console.log(commentInput)
  const addComment = (e, username)=>{
    e.preventDefault()
    console.log(props.item)
props.item.comments.push({
  username:username,
  text:commentInput
});

setCommentInput("")
}

const incrementLikes = () => {
  let iLike = likes++;
  setLikes(iLike)
}

   return (
     <div className='post'>
         <div className='thumbnail-container'>
         <div className='thumbnail-img'><img src={`${props.item.thumbnailUrl}`} alt="post"/></div>
         <div className='username'><strong>{props.item.username}</strong></div>
         </div>
         <div className='img'><img src={`${props.item.imageUrl}`} alt="post"/></div>
         <div className='page-icons'>
         <div onClick={incrementLikes} ><i className="far fa-heart"></i></div>
         <div><i className="far fa-comment"></i></div>
         </div>
         <div className='likes' /* onChange={e=>setLikeInput(e.target.value)} value={LikeInput} */><strong>{`${likes} likes`}</strong></div>
         <Comments data={props.item.comments} likes={props.item.likes}/>
         
         
    <form onSubmit={e=> addComment(e, "tr3zzy510")}>
    <input className='comment-input' placeholder='Add a comment ...' type="text" id="site-search" onChange={e=>setCommentInput(e.target.value)} value={commentInput}/>
    </form>
     </div>  /* post end */
   )

}



export default PostContain;