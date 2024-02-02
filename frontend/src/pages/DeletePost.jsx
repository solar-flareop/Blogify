import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import toast from "react-hot-toast";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const DeletePost = ({ postId: id }) => {
  //redirect for not logged in
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (!currentUser?.token) {
      navigate("/");
    }
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`${SERVER_URL}/posts/${id}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${currentUser?.token}` },
      });

      if (response.status == 200) {
        toast.success("Post deleted successfully");
        if (location.pathname == `/myposts/${currentUser?.token}`) {
          navigate(0);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <Link className="btn sm danger" onClick={() => deletePost(id)}>
      Delete
    </Link>
  );
};

export default DeletePost;
