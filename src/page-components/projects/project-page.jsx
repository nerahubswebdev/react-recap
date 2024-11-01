import React, { useEffect, useState } from "react";
import Projectdetails from "../../reusable-components/projects/projectDetail";

function ProjectPage() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const products = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products").then(
          (res) => res.json()
        );
        if (response) {
          setProductData(response);
        }
      } catch (error) {
        console.log("did not fetch");
      }
    };
    products();
  }, []);

  console.log("product from state : ", productData);

  return (
    <div>
      {productData?.length < 1 ? (
        <div className="flex justify-center items-center h-full">
          <h3 className="font-bold text-orange-500 text-xl animate-pulse transition duration-200 ease-in">
            Loading.....
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {productData?.map((pers) => (
            <Projectdetails key={pers.id} personData={pers} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
