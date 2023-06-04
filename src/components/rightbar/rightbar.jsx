import React from 'react'
import "./rightbar.scss"

const Rightbar = () => {
  return (
      <div className="rightBar">
        <div className="container">
           <div className="item">
             <span>Suggestions For You</span>
             <div className="user">
                <div className="userInfo">
                  <img src="https://images.pexels.com/photos/10057618/pexels-photo-10057618.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <span>Ivan Rusakov</span>
                </div>
                <div className="buttons">
                  <button>follow</button>
                  <button>dismiss</button>
                </div>
             </div>

             <div className="user">
                <div className="userInfo">
                  <img src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <span>Arena Neubert</span>
                </div>
                <div className="buttons">
                  <button>follow</button>
                  <button>dismiss</button>
                </div>
             </div>
           </div>
          
            <div className="item">
              <span>Latest Activities</span>

              <div className="user">
                <div className="userInfo">
                  <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <p>
                    <span>Michael</span> Update their profile picture
                  </p>
                </div>
                <span>1 min ago</span>
             </div>

             <div className="user">
                <div className="userInfo">
                  <img src="https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <p>
                    <span>Alex</span> Liked your comment
                  </p>
                </div>
                <span>1 min ago</span>
             </div>

             <div className="user">
                <div className="userInfo">
                  <img src="https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <p>
                    <span>Daniel</span> changed their cover picture
                  </p>
                </div>
                <span>1 min ago</span>
             </div>

             <div className="user">
                <div className="userInfo">
                  <img src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <p>
                    <span>Jecika</span> Update their profile picture
                  </p>
                </div>
                <span>1 min ago</span>
             </div>
            </div>

            <div className="item">
              <span>Online Friends</span>

              <div className="user">
                <div className="userInfo">
                  <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <div className="online"></div>
                    <span>John Doe</span>
                </div>
             </div>

             <div className="user">
                <div className="userInfo">
                  <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <div className="online"></div>
                    <span>Roman</span>
                </div>
             </div>

             <div className="user">
                <div className="userInfo">
                  <img src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <div className="online"></div>
                    <span>Nevil</span>
                </div>
             </div>

             <div className="user">
                <div className="userInfo">
                  <img src="https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                  <div className="online"></div>
                    <span>Jennifer</span>
                </div>
             </div>
             
            </div>

        </div>
      </div>
    )
}

export default Rightbar