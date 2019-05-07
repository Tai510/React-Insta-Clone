import React from "react";
import Comments from "./Comments"
import styled from 'styled-components';

// style component start

const Post = styled.div `
   margin-top: 20px;
   margin-left: 420px;
`;

const ThumbnailContainer = styled.div `
   display: flex;
   margin-left: 15px;
`;

const ThumbnailImage = styled.img `
   border-radius: 50%;
   height: 30px;
   margin-right: 12px;
   margin-bottom: 8px;
   border: 1px solid black;
`;

const Username = styled.div `
   margin-top: 3px;
   font-weight: bolder;
   font-size: 20px;
`;

const Likes = styled.div `
  margin-bottom: 20px;
  margin-left: 15px;
`;

const PageIcons = styled.div `
  display: flex;
  margin: 10px 15px;
  font-size: 25px;
`;

const Hearts = styled.i `
  margin-right: 15px; 
`
const ComputerInput = styled.input `
  width: 610px;
  height: 30px;
  font-size: 15px;
  border: 1px solid white;
  border-top: 1px solid grey;
  margin-top: 10px;
  margin-left: 15px;
`;


// style component start

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
     <Post>
         <ThumbnailContainer>
         <div><ThumbnailImage src={`${props.item.thumbnailUrl}`} alt="post"/></div>
         <Username><strong>{props.item.username}</strong></Username>
         </ThumbnailContainer>
         <div className='img'><img src={`${props.item.imageUrl}`} alt="post"/></div>
         <PageIcons>
         <div onClick={incrementLikes} ><Hearts className="far fa-heart"></Hearts></div>
         <div><i className="far fa-comment"></i></div>
         </PageIcons>
         <Likes /* onChange={e=>setLikeInput(e.target.value)} value={LikeInput} */><strong>{`${likes} likes`}</strong></Likes>
         <Comments data={props.item.comments} likes={props.item.likes}/>
         
         
    <form onSubmit={e=> addComment(e, "tr3zzy510")}>
    <ComputerInput placeholder='Add a comment ...' type="text" id="site-search" onChange={e=>setCommentInput(e.target.value)} value={commentInput}/>
    </form>
     </Post>  /* post end */
   )

}



export default PostContain;