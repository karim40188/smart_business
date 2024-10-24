
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./Components/Layout"
import "react-router-dom"
import Layout from "./Components/Layout";
function App() {
  let router = createBrowserRouter([{ path: "/", element: <Layout /> }]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
