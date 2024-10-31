import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./Components/Layout"
import "react-router-dom";
import Layout from "./Components/Pages/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./Components/Home";
import Dashboard from "./Components/Pages/Dashboard";
import Membership from "./Components/Pages/Membership";
function App() {
  let theme = createTheme({
    typography: {
      body1: {
        fontFamily: "SF Pro Display",
        fontSize: "18px",
      },
      h4: {
        fontFamily: "Tanseek Modern Pro Arabic",
      },
    },
  });

  let router = createBrowserRouter([
    { path: "/", element: <Home /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/membership", element: <Membership /> },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
