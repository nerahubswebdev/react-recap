import React, { useState } from "react";
import { useAuthContext } from "../context/auth-context";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Header = () => {
  const baseUrl = import.meta.env.VITE_BASE_API;
  const { userData } = useAuthContext();
  const [isloggingOut, setIsLoggingOut] = useState(false);

  // logout function
  axios.defaults.withCredentials = true;
  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const response = await axios.post(`${baseUrl}/auth/logout`, {
        withCredentials: true,
      });

      if (response?.data.success) {
        console.log("the logout response => ", response?.data);
        toast.success(response?.data?.message);
        //window.location.reload();
      }
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        console.log("No logout => ", error?.response?.data);
      } else {
        console.log("logout error => ", error);
      }
    } finally {
      setIsLoggingOut(false);
    }
  };
  return (
    <div className="flex items-center justify-between px-3">
      <h3>
        {userData && userData?.isAdmin === "ADMIN" && (
          <Link to="projects/create">Create Project</Link>
        )}
      </h3>
      <div className="flex items-center space-x-3">
        {userData ? (
          <>
            <button
              disabled={isloggingOut}
              onClick={handleLogout}
              className="bg-red-500 text-white p-2 rounded-md"
            >
              {isloggingOut ? (
                <span className="animate-pulse duration-300 transition ease-in">
                  logging out
                </span>
              ) : (
                "Logout"
              )}
            </button>
          </>
        ) : (
          <Link to="login">
            <button className="bg-gray-500 text-white p-2 rounded-md">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
