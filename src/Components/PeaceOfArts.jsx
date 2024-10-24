import { Box, Typography } from "@mui/material";
import peace_of_arts_img from "../assets/peace_of_arts_img.png";
function PeaceOfArts() {
  return (
    <Box>
      <Box className="container">
        <Typography
          sx={{
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "75px",
            letterSpacing: "50px",
            textAlign: "center",
            mb:'30px'
          }}
        >
          PEACE OF ART
        </Typography>

        <Box sx={{maxWidth:'1291px',height:'513px'}}>
          <Box
            component="img"
            src={peace_of_arts_img}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default PeaceOfArts;
