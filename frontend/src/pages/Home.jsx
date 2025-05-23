import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link to="/create" className="px-4 py-2 bg-blue-600 text-white rounded">
          + New Blog
        </Link>
      </div>
      {blogs.map((blog) => (
        <div key={blog._id} className="border p-4 rounded mb-4">
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
          <div className="mt-2 flex gap-4">
            <Link to={`/view/${blog._id}`} className="text-blue-500">
              View
            </Link>
            <Link to={`/edit/${blog._id}`} className="text-yellow-500">
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
