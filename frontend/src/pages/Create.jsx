import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [form, setForm] = useState({ title: "", content: "", author: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/blogs", form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Content"
        rows="6"
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        className="w-full p-2 border rounded"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Create;
