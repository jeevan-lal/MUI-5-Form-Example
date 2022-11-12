import { createBrowserRouter } from "react-router-dom";
// Components
import ErrorPage from "../Views/Error/ErrorPage";
import RootLayout from "../Views/Layout/RootLayout";
import ExampleLayout from "../Views/Layout/ExampleLayout";
import HomePage from "../Views/HomePage";
import Example1 from "../Views/Example/Example-1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { 
        index: true,
        element: <HomePage />
      },
    ],
  },
  {
    path: "/example",
    element: <ExampleLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "1",
        element: <Example1 />,
      },
    ],
  }
]);

export default router