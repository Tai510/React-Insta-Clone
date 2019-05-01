import React from 'react'
import Comment from './Comment';


const Comments = props => {
    return (
        <div>
          {
             props.data.map((item, index) => {
                 return (
                    <Comment {...item} likes={props.likes} key={index}/>
                 )
             }) 
          }
      </div>    
    )
}

export default Comments;