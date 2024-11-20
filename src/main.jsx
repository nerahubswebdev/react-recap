import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout.jsx";
import AboutPage from "./page-components/about/about-page.jsx";
import ProjectPage from "./page-components/projects/project-page.jsx";
import AboutLayout from "./layouts/about-layout.jsx";
import Employee1 from "./page-components/about/employee1.jsx";
import Employee2 from "./page-components/about/employee2.jsx";
import Employee3 from "./page-components/about/employee3.jsx";
import ProjectLayout from "./layouts/project-layout.jsx";
import Fulldetailspage from "./page-components/projects/fulldetailspage.jsx";
import LoginForm from "./authentication/login.jsx";
import RegistrationForm from "./authentication/register.jsx";
import { AuthContextProvider } from "./context/auth-context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateProject from "./page-components/projects/create-project.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "about",
        element: <AboutLayout />,
        children: [
          {
            index: true,
            element: <AboutPage />,
          },
          {
            path: "employee1",
            element: <Employee1 />,
          },
          {
            path: "employee2",
            element: <Employee2 />,
          },
          {
            path: "employee3",
            element: <Employee3 />,
          },
        ],
      },
      {
        path: "projects",
        element: <ProjectLayout />,
        children: [
          {
            index: true,
            element: <ProjectPage />,
          },
          {
            path: ":id",
            element: <Fulldetailspage />,
          },
          {
            path: "create",
            element: <CreateProject />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthContextProvider>
  </StrictMode>
);
