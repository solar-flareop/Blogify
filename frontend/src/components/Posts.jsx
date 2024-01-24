import { useState } from "react";

import PostItem from "./PostItem";
import { DUMMY_POSTS } from "../data.js";

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
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

export default Posts;
