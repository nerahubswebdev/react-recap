import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/auth-context";
import { toast } from "react-toastify";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const CreateProject = () => {
  const { userData } = useAuthContext();
  useEffect(() => {
    if (!userData || userData?.isAdmin !== "ADMIN") {
      window.location.assign("/");
    }
  }, []);
  const baseUrl = import.meta.env.VITE_BASE_API;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [addingproject, setAddingproject] = useState(false);

  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setAddingproject(true);
      if (!title || !description || !image) {
        toast.error("Required feilds needed.");
        return;
      }
      const response = await axios.post(
        `${baseUrl}/project/create-project`,
        {
          title,
          description,
          image,
        },
        {
          withCredentials: true,
        }
      );

      if (response?.data?.success) {
        setTitle("");
        setDescription("");
        setImage("");
        toast.success(response?.data?.message);
        // do something
      }
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        console.log("No logout => ", error?.response?.data);
      } else {
        console.log("logout error => ", error);
      }
    } finally {
      setAddingproject(false);
    }
  };
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
            disabled={addingproject}
            className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            {addingproject ? (
              <div className="flex items-center space-x-2 justify-center">
                <span className="animate-pulse">Adding project</span>{" "}
                <FaSpinner className=" animate-spin " />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
