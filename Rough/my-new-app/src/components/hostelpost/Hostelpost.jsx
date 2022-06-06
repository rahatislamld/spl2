import { Link } from "react-router-dom";
import "./hostelpost.css";

export default function Hostelpost({post}) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
    {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
    <br></br>
    <div className="postInfo">
      <div className="postCats">
        {post.categories.map((c) => (
          <span className="postCat">{c.name}</span>
        ))}
      </div>
      <Link to={`/hostel/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
      </Link>
      <hr />
      <span className="postDate">
        {new Date(post.createdAt).toDateString()}
      </span>
    </div>
    <p className="postDesc">{post.desc}</p>
  </div>
);
}