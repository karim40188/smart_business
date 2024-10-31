import { Box, Typography } from "@mui/material";
import userImg from "../../assets/pages_assets/user.png";
function NavbarPages() {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #130E14 0% 70%, #d94f9c 100%)",
        width: "100%",
        height: "82px",
        display: "flex",
        alignItems: "center",
        justifyContent:'end',
        px:'20px',
        gap:'10px'
      }}
    >
      <Box sx={{ width: "37px", height: "37px" }}>
        <Box
          component="img"
          sx={{ width: "100%", height: "100%" }}
          src={userImg}
        />
      </Box>

      <Typography sx={{ fontSize: "15px", fontWeight: "700" }}>
        ahmed Khaled
      </Typography>
    </Box>
  );
}

export default NavbarPages;
