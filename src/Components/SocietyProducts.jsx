import { Box, Typography } from "@mui/material";
import blankImg from "../assets/blank.png";
function SocietyProducts() {
  return (
    <Box>
      <Box className="container">
        <Typography
          sx={{
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "75px",
            letterSpacing: "50px",
            textAlign: "center",
          }}
        >
          SOCIETY
          <br />
          PRODUCTS
        </Typography>

        <Box sx={{}}>
          <Box
            sx={{
              width: "1099px",
              background: "#13131321",
              height: "522px",
              mx: "auto",
            }}
          >
            <Box
              className="flex-center"
              sx={{ justifyContent: "space-between" }}
            >
              <Box

              className="blur"
                sx={{
                  width: "201px",
                  height: "194px",
                  background:
                    "linear-gradient(180deg, #866B31 0%, #ECBC56 100%)",


                }}
              ></Box>
              <Box sx={{ width: "45%" }}>
                <Typography>EDUCATIONAL</Typography>
                <Typography>TRADING SOCIETY</Typography>

                <Typography>
                  TRADING SOCIETY is more than just an educational platform;
                  it’s a gateway to mastering the fast-evolving world of forex.
                  We empower our community with cutting-edge tools, expert
                  guidance, and comprehensive resources to help you navigate the
                  complexities of forex trading with confidence.
                </Typography>
              </Box>

              <Box
                className="flex-center"
                sx={{
                  width: "432px",
                  height: "366px",
                  backgroundImage: `url(${blankImg})`,
                  justifyContent: "center",
                }}
              >
                432 x 366
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SocietyProducts;
