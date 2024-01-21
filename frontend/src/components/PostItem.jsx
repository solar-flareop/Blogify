import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = (props) => {
  const { postID, thumbnail, category, title, desc, authorID } = props;
  const shortDesc = desc.length > 145 ? desc.substr(0, 100) + "..." : desc;
  const shortTitle = title.length > 25 ? title.substr(0, 25) + "..." : title;
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post__content">
        <Link to={`/posts/${postID}`}>
          <h3>{shortTitle}</h3>
        </Link>
        <p> {shortDesc} </p>
        <div className="post__footer">
          <PostAuthor />
          <Link to={`/posts/categories/${category}`} className="btn category">
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
