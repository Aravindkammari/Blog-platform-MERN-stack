import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "", author: "" });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => setForm(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/blogs/${id}`, form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <input
        type="text"
        name="title"
        value={form.title}
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />
      <textarea
        name="content"
        value={form.content}
        rows="6"
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        value={form.author}
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-yellow-500 text-white rounded"
      >
        Update
      </button>
    </form>
  );
};

export default Edit;
