import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import membership from "../../assets/pages_assets/membership.png";
import dashboard from "../../assets/pages_assets/dashboard.png";
import wallet from "../../assets/pages_assets/wallet.png";
import network from "../../assets/pages_assets/network.png";
import transactions from "../../assets/pages_assets/transactions.png";
import sidebar_bg from "../../assets/pages_assets/sidebar_bg.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "260px",
          height:'100vh',
          backgroundImage: `url(${sidebar_bg})`,
          backgroundSize:'cover',
          objectFit:'cover',
          backgroundPositon:'center center',
          position: {
            xs: "fixed",
            md: "sticky",
          },
          left: "0",
          top: "0",
          bottom: "0",
          backgroundColor: "#141017",
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          alignItems: "center",
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
        >
          <Box
            component="img"
            src={logo}
            sx={{ width: "100%", height: "100%" }}
            onClick={() => {
              navigate("/");
            }}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "120px",
            }}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <Box sx={{ width: "20px", height: "20px" }}>
              <Box
                component="img"
                src={dashboard}
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
              Dashboard
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "120px",
              cursor: "pointer",
              position: "relative",
              zIndex: "10",
            }}
            onClick={() => {
              navigate("/membership");
            }}
          >
            <Box sx={{ width: "20px", height: "20px" }}>
              <Box
                component="img"
                src={membership}
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
              Membership
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "120px",
            }}
            onClick={() => {
              navigate("/wallet");
            }}
          >
            <Box sx={{ width: "20px", height: "20px" }}>
              <Box
                component="img"
                src={wallet}
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>

            <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
              Wallet
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "120px",
            }}
          >
            <Box sx={{ width: "20px", height: "20px" }}>
              <Box
                component="img"
                src={network}
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
              Network
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              width: "120px",
            }}
          >
            <Box sx={{ width: "20px", height: "20px" }}>
              <Box
                component="img"
                src={transactions}
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
              Transactions
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "0",
          bottom: "-110px",
          zIndex: "0",
        }}
      >
        <Box
          component="img"
          src={sidebar_bg}
          sx={{
            width: "100%",
            height: "100%",
            // backgroundSize: "cover",
            // objectFit: "cover",
            // backgroundPosition: "center",
          }}
        />
      </Box> */}
    </Box>
  );
}

export default Sidebar;
