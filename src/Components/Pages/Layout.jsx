import { Box } from "@mui/material";
import NavbarPages from "./NavbarPages";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ width: "100%" }}>
        <NavbarPages />

        <Box sx={{ p: "40px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
