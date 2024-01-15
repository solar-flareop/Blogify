import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components";
import { Error } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Layout />, errorElement: <Error /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
