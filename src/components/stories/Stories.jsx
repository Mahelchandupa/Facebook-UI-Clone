import React from 'react'
import "./Stories.scss"

const Stories = () => {

    const stories =[
        {
            id: 1,
            name: "John Doe",
            img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 2,
            name: "Roman",
            img: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 3,
            name: "Nevil",
            img: "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            id: 4,
            name: "Jennifer",
            img: "https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },

    ]

  return (
    <div className='stories'>
        <div className="story">
                    <img src="https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>Mahel</span>
                    <button>+</button>
                </div>
        {
            stories.map(story =>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))
        }
    </div>
  )
}

export default Stories