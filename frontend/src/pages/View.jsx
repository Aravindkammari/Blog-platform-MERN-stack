import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/blogs/${id}`);
    navigate("/");
  };

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="text-gray-700">{blog.content}</p>
      <p className="mt-4 text-sm text-gray-500">Author: {blog.author}</p>
      <button
        onClick={handleDelete}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default View;
