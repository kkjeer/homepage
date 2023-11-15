import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import ErrorPage from "./ErrorPage";
import { Projects } from "./Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <div>Hello world</div>,
  },
  {
    path: "projects/",
    element: <Projects />,
  },
  {
    path: "projects/:projectId",
    element: <Projects />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
