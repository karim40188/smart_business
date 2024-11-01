import { Box, Typography } from "@mui/material";
import blankImg from "../assets/blank.png";
import googlePlay from "../assets/googleplay.png";
import appleStore from "../assets/apple.png";
import card1Bg from "../assets/card1-bg.png";
import card1Bg2 from "../assets/card1_bg2.png";
import cardsBg from "../assets/cards_bg.png";
const Test = () => {
  return (

        <Box
          sx={{
            width: "1099px",
            height: "522px",
            mx: "auto",
            display: "flex",
            alignItems: "center",
            backgroundColor:'#000',
            justifyContent: "space-between",
            mt: "40px",
            borderRadius: "15px",
            backgroundImage: `url(${cardsBg})`,
            backgroundSize: "cover",
            objectFit: "cover",
            position: "sticky",
            top: "0px",
            px:'30px',
            overflow:'hidden'
            
          
          }}
        >
          {/* left side */}
          <Box
            sx={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: "40px", letterSpacing: "11px" }}
            >
              EDUCATIONAL
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "50px",
                lineHeight: "10.35px",
                mb: "40px",
                fontWeight: "700",
                letterSpacing: "10px",
              }}
            >
              TRADING SOCIETY
            </Typography>

            <Typography
              sx={{
                fontWeight: "700",
                color: "#ABABAB",
                lineHeight: "21.48px",
              }}
            >
              <Typography component="span" sx={{ color: "#E3CB86" }}>
                TRADING SOCIETY
              </Typography>{" "}
              is more than just an educational platform; it’s a gateway to
              mastering the fast-evolving world of forex. We empower our
              community with cutting-edge tools, expert guidance, and
              comprehensive resources to help you navigate the complexities of
              forex trading with confidence.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mt: "20px",
              }}
            >
              <Box
                sx={{
                  width: "172px",
                  height: "48px",
                  cursor: "pointer",
                  transition: "400ms transform",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={googlePlay}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  width: "172px",
                  height: "48px",
                  cursor: "pointer",
                  // zIndex: "100",
                  transition: "400ms transform",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={appleStore}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>

          {/* right side */}
          <Box
            sx={{
              width: "432px",
              height: "366px",
              backgroundImage: `url(${blankImg})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
            }}
          >
            432 x 366
          </Box>



          <Box
          sx={{
            width: "201px",
            height: "194px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Box
            component="img"
            src={card1Bg}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box
          sx={{
            width: "189.38px",
            height: "189.38px",
            position: "absolute",
            bottom: "-60px",
            right: "-70px",
            transform: "rotate(150.19 deg)",
          }}
        >
          <Box
            component="img"
            src={card1Bg2}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
        </Box>

      

  
  );
};

export default Test;
