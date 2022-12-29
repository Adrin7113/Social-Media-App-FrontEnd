import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext.js";
import { Link } from "react-router-dom";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Aaron",
      userId: 1,
      profilePic: "https://avatarfiles.alphacoders.com/336/336132.jpg",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Meghna",
      userId: 2,
      profilePic: "https://avatarfiles.alphacoders.com/286/286069.png",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <Link
              to={`/profile/${comment.userId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{comment.name}</span>
            </Link>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
