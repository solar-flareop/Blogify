import { Link } from "react-router-dom";
import Avatar1 from "/images/avatar1.jpg";
import Avatar2 from "/images/avatar2.jpg";
import Avatar3 from "/images/avatar3.jpg";
import Avatar4 from "/images/avatar4.jpg";
import Avatar5 from "/images/avatar5.jpg";
import { useState } from "react";

const authorsData = [
  {
    id: 1,
    avatar: Avatar1,
    name: "Sucheta",
    posts: 3,
  },
  {
    id: 2,
    avatar: Avatar2,
    name: "Suraj",
    posts: 8,
  },
  {
    id: 3,
    avatar: Avatar3,
    name: "Rahul",
    posts: 10,
  },
  {
    id: 4,
    avatar: Avatar4,
    name: "Riya",
    posts: 6,
  },
  {
    id: 5,
    avatar: Avatar5,
    name: "Pradnya",
    posts: 4,
  },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);
  return (
    <section>
      <div className="authors">
        {authors.length > 0 ? (
          <div className="container authors__container">
            {authors.map((author) => (
              <Link
                to={`/posts/users/${author.id}`}
                key={author.id}
                className="author"
              >
                <div className="author__avatar">
                  <img src={author.avatar} alt={`${author.name}`} />
                </div>
                <div className="author__info">
                  <h4>{author.name}</h4>
                  <p>{author.posts}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <h2 className="center">No users/authors found</h2>
        )}
      </div>
    </section>
  );
};

export default Authors;
