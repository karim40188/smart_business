import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Navbar() {
  let [links] = useState([
    { name: "Home", path: "/" },
    { name: "Academy", path: "/academy" },
    { name: "Sessions", path: "/sessions" },
    { name: "Trade Alerts", path: "/trade-alerts" },
    { name: "Scanners", path: "/scanners" },
    { name: "be a partner", path: "/be-a-partner" },
    { name: "login", path: "/login" },
  ]);
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        width: "100%",
        height: "90px",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex:'12',
        display: "flex",
        alignItems: "center",
        border: "1px solid",
        borderImageSource:
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #5E3457 50%, rgba(255, 255, 255, 0) 100%)",
        backdropFilter: "blur(15.699999809265137px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          color: "#fff",
          justifyContent: "space-between",
          width: "95%",
          mx: "auto",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "104px", height: "53px" }}>
          <Box
            component="img"
            src={logo}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {links.map((link) => {
            return (
              <Link to={link.path} key={link.name} style={{ color: "#fff",fontSize:'25px',fontFamily:'SF Pro Display' }}>
                {link.name}
              </Link>
            );
          })}

          <Button
            sx={{
              width: "154px",
              height: "31px",
              background: "linear-gradient(90deg, #46DFFC 0%, #E14696 100%)",
              color: "#fff",
              fontSize:'25px',
              fontWeight:'700'
            }}
          >
            Join us
          </Button>

          <Button
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              width: "50.53px",
              height: "27.95px",
            }}
          >
            AR
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
