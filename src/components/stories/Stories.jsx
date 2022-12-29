import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext.js";

//https://i.postimg.cc/2SsSSNxx/Meghna-Story.jpg
//https://i.postimg.cc/hP3GNdz6/Aaron-Story.jpg

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Meghna",
      img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Aaron",
      img: "https://i.postimg.cc/hP3GNdz6/Aaron-Story.jpg",
    },
    {
      id: 3,
      name: "Meghna",
      img: "https://i.postimg.cc/2SsSSNxx/Meghna-Story.jpg",
    },
    {
      id: 4,
      name: "Aaron",
      img: "https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="Story" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="Story" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
