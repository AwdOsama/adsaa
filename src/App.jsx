import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/blog";
import BlogPosts from "./Pages/BlogPosts";
import Notfound from "./Pages/Notfound";

const routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "adsaa", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogPosts /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
