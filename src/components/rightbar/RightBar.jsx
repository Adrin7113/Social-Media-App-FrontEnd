import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatarfiles.alphacoders.com/336/336132.jpg"
                alt=""
              />
              <span>Aaron</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatarfiles.alphacoders.com/286/286069.png"
                alt=""
              />
              <span>Meghna</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatarfiles.alphacoders.com/286/286069.png"
                alt=""
              />
              <p>
                <span>Meghna</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatarfiles.alphacoders.com/336/336132.jpg"
                alt=""
              />
              <p>
                <span>Aaron</span> changed their cover picture
              </p>
            </div>
            <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatarfiles.alphacoders.com/286/286069.png"
                alt=""
              />
              <p>
                <span>Meghna</span> changed their cover picture
              </p>
            </div>
            <span>3 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatarfiles.alphacoders.com/336/336132.jpg"
                alt=""
              />
              <p>
                <span>Aaron</span> changed their cover picture
              </p>
            </div>
            <span>4 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatarfiles.alphacoders.com/336/336132.jpg"
                alt=""
              />
              <div className="online" />
              <span>Aaron</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatarfiles.alphacoders.com/286/286069.png"
                alt=""
              />
              <div className="online" />
              <span>Meghna</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatarfiles.alphacoders.com/336/336132.jpg"
                alt=""
              />
              <div className="online" />
              <span>Aaron</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://avatarfiles.alphacoders.com/286/286069.png"
                alt=""
              />
              <div className="online" />
              <span>Meghna</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
