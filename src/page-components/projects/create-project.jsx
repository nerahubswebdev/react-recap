import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/auth-context";

const CreateProject = () => {
  const { userData } = useAuthContext();
  useEffect(() => {
    if (!userData || userData?.isAdmin !== "ADMIN") {
      window.location.assign("/");
    }
  }, []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = () => {};
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Project Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter project title"
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter project description"
            rows="4"
          />
        </div>

        {/* Image Input */}
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter image URL"
          />
        </div>

        {/* Submit Button */}
        <div className="mb-4 text-center">
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
