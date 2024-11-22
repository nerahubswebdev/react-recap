import React, { useEffect, useState } from "react";
import Projectdetails from "../../reusable-components/projects/projectDetail";
import axios from "axios";

function ProjectPage() {
  const baseUrl = import.meta.env.VITE_BASE_API;
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const products = async () => {
      try {
        const response = await axios.get(`${baseUrl}/project/getall-projects`);

        console.log("tyhe projects => ", response);

        if (response) {
          setProjectData(response?.data?.projects);
        }
      } catch (error) {
        console.log("did not fetch");
      }
    };
    products();
  }, []);

  console.log("product from state : ", projectData);

  return (
    <div>
      {projectData?.length < 1 ? (
        <div className="flex justify-center items-center h-full">
          <h3 className="font-bold text-orange-500 text-xl animate-pulse transition duration-200 ease-in">
            Loading.....
          </h3>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {projectData?.map((pers) => (
            <Projectdetails key={pers.id} personData={pers} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
