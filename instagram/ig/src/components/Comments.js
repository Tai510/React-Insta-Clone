import React from 'react'
import Comment from './Comment';


const Comments = props => {
    return (
        <div>
          {
             props.data.map((item) => {
                 return (
                    <Comment {...item} likes={props.likes}/>
                 )
             }) 
          }
      </div>    
    )
}

export default Comments;