 import React from "react";
 import styled from 'styled-components';

// styled component start

const CommentSection = styled.div `
 margin-bottom: 10px;
  margin-left: 15px;
  font-weight: bolder;
`;

const Span = styled.span `
  margin-left: 10px;
  font-weight: 400;
`;

// styled component start


 const Comment = ({username, text , likes})=>{
     return (
         <CommentSection>
         <div><strong>{username}</strong> <Span>{text}</Span> </div>
         </CommentSection>
     )
 }




 export default Comment;