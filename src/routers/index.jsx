import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Dashboard from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);
