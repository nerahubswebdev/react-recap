import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Fulldetailspage() {
  const baseUrl = import.meta.env.VITE_BASE_API;
  const { id } = useParams();
  console.log("the hdhdh :", id);

  const [singleProductData, setSingleProductData] = useState();

  useEffect(() => {
    const products = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/project/getsingle-project/${id}`
        );
        console.log(response);

        if (response?.data) {
          setSingleProductData(response?.data?.project);
        }
      } catch (error) {
        console.log("did not fetch");
      }
    };
    products();
  }, [id]);

  return (
    <div>
      <h3 className="text-2xl font-semibold text-red-600">
        {singleProductData?.title}
      </h3>
      <p>{singleProductData?.description}</p>
      <div>
        <img
          src={singleProductData?.image}
          alt="hfhfhf"
          className="w-24 h-24 object-contain rounded-lg"
        />
      </div>
    </div>
  );
}

export default Fulldetailspage;
