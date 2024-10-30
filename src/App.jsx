import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./Components/Layout"
import "react-router-dom";
import Layout from "./Components/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import Test from "./Components/Test";
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
  let router = createBrowserRouter([{ path: "/", element: <Layout /> },

    {path:'/test',element:<Test/>}

  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
