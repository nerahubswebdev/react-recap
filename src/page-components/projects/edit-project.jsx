import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/auth-context";
import { toast } from "react-toastify";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";

const EditProject = () => {
  const baseUrl = import.meta.env.VITE_BASE_API;
  const { id } = useParams();
  console.log("the hdhdh :", id);
  const [singleProductData, setSingleProductData] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [updatingproject, setUpdatingproject] = useState(false);

  useEffect(() => {
    const products = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/project/getsingle-project/${id}`
        );
        console.log(response);

        if (response?.data) {
          setSingleProductData(response?.data?.project);
          setTitle(response?.data?.project?.title);
          setDescription(response?.data?.project?.description);
          setImage(response?.data?.project?.image);
        }
      } catch (error) {
        console.log("did not fetch");
      }
    };
    products();
  }, [id]);

  const updatedata = {
    title,
    description,
    image,
  };

  axios.defaults.withCredentials = true;
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setUpdatingproject(true);
      if (!title || !description || !image) {
        toast.error("Required feilds needed.");
        return;
      }
      const response = await axios.patch(
        `${baseUrl}/project/update-project/${id}`,
        updatedata,
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
      setUpdatingproject(false);
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Update Project</h1>
      <form onSubmit={handleUpdate}>
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
            disabled={updatingproject}
            className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            {updatingproject ? (
              <div className="flex items-center space-x-2 justify-center">
                <span className="animate-pulse">Updating project</span>{" "}
                <FaSpinner className=" animate-spin " />
              </div>
            ) : (
              "Update"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProject;
