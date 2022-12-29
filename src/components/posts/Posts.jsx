import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  ///TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Aaron",
      userId: 1,
      profilePic: "https://avatarfiles.alphacoders.com/336/336132.jpg",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Meghna",
      userId: 2,
      profilePic: "https://avatarfiles.alphacoders.com/286/286069.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
