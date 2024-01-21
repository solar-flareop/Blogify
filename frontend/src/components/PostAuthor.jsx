import { Link } from "react-router-dom";
import Avatar from "/images/avatar1.jpg";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdf`} className="post__author">
      <div className="post__author-avatar">
        <img src={Avatar} alt="poster" />
      </div>
      <div className="post_author-details">
        <h5>By: Suraj</h5>
        <small>Just Now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
