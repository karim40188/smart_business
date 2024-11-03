import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import membership from "../../assets/pages_assets/membership.png";
import dashboard from "../../assets/pages_assets/dashboard.png";
import wallet from "../../assets/pages_assets/wallet.png";
import network from "../../assets/pages_assets/network.png";
import transactions from "../../assets/pages_assets/transactions.png";
import sidebar_bg from "../../assets/pages_assets/sidebar_bg.png";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../Context";

function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(Context);
  const sidebarRef = useRef(null);
  const activeLinkRef = useRef(null);
  const navigate = useNavigate();

  const [links] = useState([
    { name: "Dashboard", path: "/Dashboard", icon: dashboard },
    { name: "Membership", path: "/Membership", icon: membership },
    { name: "Wallet", path: "/Wallet", icon: wallet },
    { name: "Network", path: "/Network", icon: network },
    { name: "Transactions", path: "/Transactions", icon: transactions },
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        window.innerWidth < 600 &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSidebarOpen]);

  const handleLinkClick = (e, path) => {
    navigate(path);

    if (activeLinkRef.current) {
      activeLinkRef.current.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    activeLinkRef.current = e.currentTarget;
  };

  return (
    <Box
      ref={sidebarRef}
      sx={{
        width: sidebarOpen ? "260px" : "0",
        transition: "width 400ms",
        height: "100vh",
        backgroundImage: `url(${sidebar_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: { xs: "fixed", md: "sticky" },
        left: "0",
        top: "0",
        bottom: "0",
        backgroundColor: "#141017",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        zIndex: "99999",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "88px",
          height: "60px",
          mx: "auto",
          mt: "30px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <Box component="img" src={logo} sx={{ width: "100%", height: "100%" }} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {links.map((link) => (
          <Box
            key={link.name}
            sx={{ cursor: "pointer" }}
            onClick={(e) => handleLinkClick(e, link.path)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                height: "53px",
                textAlign: "center",
                width: "60%",
                mx: "auto",
              }}
            >
              <Box sx={{ width: "20px", height: "20px" }}>
                <Box
                  component="img"
                  src={link.icon}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Typography sx={{ fontSize: "15px", fontWeight: "700", textAlign: "center" }}>
                {link.name}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Sidebar;
