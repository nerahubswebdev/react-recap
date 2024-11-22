import React from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { useAuthContext } from "../../context/auth-context";
import { FaTrash } from "react-icons/fa";

function Projectdetails({ personData }) {
  const { userData } = useAuthContext();
  console.log("the props coming : ", personData);

  const handleDelete = () => {};

  return (
    <Link to={`${personData._id}`}>
      <div className="bg-green-200 rounded-xl p-3 cursor-pointer">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-red-600">
            {personData.title}
          </h3>
          {userData?._id === personData?.createdby && (
            <FaRegEdit
              onClick={() =>
                window.location.assign(`projects/edit/${personData?._id}`)
              }
            />
          )}
          {userData?._id === personData?.createdby && (
            <FaTrash className="text-red-500" onClick={() => {}} />
          )}
        </div>

        <p>{personData.description}</p>
        <div>
          <img
            src={personData.image}
            alt="hfhfhf"
            className="w-24 h-24 object-contain rounded-lg"
          />
        </div>
      </div>
    </Link>
  );
}

export default Projectdetails;
