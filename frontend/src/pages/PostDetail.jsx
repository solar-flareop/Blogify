import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "/images/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo
          commodi repellendus iste ipsa ipsum, dolor cum voluptatum recusandae.
          Assumenda!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
          fuga, quae culpa aperiam excepturi, ad autem praesentium quisquam rem
          quibusdam qui eius officiis placeat consequatur in sit neque cumque.
          Mollitia in, obcaecati animi necessitatibus perspiciatis explicabo,
          sit neque magni labore reprehenderit non nesciunt aperiam nobis iure
          harum commodi soluta consequuntur cupiditate architecto nam sed quasi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          corporis magni nisi sint accusamus nobis, vitae illo sit optio dolorem
          debitis facilis libero culpa tempore autem accusantium, esse labore
          sequi!
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
