import React from 'react'
import "./Comments.scss"

const Comments = () => {

    const comments = [
        {
          id: 1,
          name: "John Doe",
          userId: 1,
          profilePicture:
            "https://images.pexels.com/photos/371160/pexels-photo-371160.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          img: "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          id: 2,
          name: "Jane Doe",
          userId: 2,
          profilePicture:
            "https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=1600",
          desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur.",
        },
      ];

  return (
    <div className='comments'>
        <div className="write">
            <img src="https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <input type="text" placeholder='write a comment' />
            <button>Send</button>
        </div>
        {
        comments.map( comment =>(
          <div className="comment">
            <img src={comment.profilePicture} alt="" />
            <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
            </div>
              <span className='date'>1 hour age</span>
          </div>
       ))
}
    </div>
  )
}

export default Comments