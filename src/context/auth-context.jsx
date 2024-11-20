import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const baseUrl = import.meta.env.VITE_BASE_API;
  console.log("the base api link => ", baseUrl);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const validResponse = async () => {
      try {
        const response = await axios.get(`${baseUrl}/auth/validate`, {
          withCredentials: true,
        });
        console.log("the valid response => ", response);

        if (!response?.data || !response?.data?.success) {
          console.log("session ended");
          return;
        }

        if (response?.data?.success) {
          console.log("session ok");
          setUserData(response?.data?.user);
        }
      } catch (error) {
        if (error instanceof axios.AxiosError) {
          console.log("No session => ", error?.response?.data);
        } else {
          console.log("Session error => ", error);
        }
      }
    };

    validResponse();
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
