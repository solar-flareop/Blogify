import { useState } from "react";
import { DUMMY_POSTS } from "../data.js";
import PostItem from "../components/PostItem.jsx";

const CategoryPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section>
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map((post) => (
            <PostItem
              key={post.id}
              postID={post.id}
              thumbnail={post.thumbnail}
              category={post.category}
              title={post.title}
              desc={post.desc}
              authorID={post.authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No posts found</h2>
      )}
    </section>
  );
};

export default CategoryPosts;
