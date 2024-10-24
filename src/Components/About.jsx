import { Typography, Box } from "@mui/material";
import About_img from "../assets/aboutus_img.png";
import bg1 from "../assets/bg1.png";
function About() {
  return (
    <Box sx={{ position: "relative",   }}>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            //   alignItems: "start",
            justifyContent: "space-between",
          
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "70px", xl: "100px" },
                fontWeight: "400",
                lineHeight: "114px",
                fontFamily: "Bebas Neue",
              }}
            >
              Smart Business <br /> with Smart People
            </Typography>

            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "40px",
                fontFamily: "Poppins",
              }}
            >
              Grow your business to the next level <br /> to improve your
              business performance to <br /> stay competitive
            </Typography>

            <Box sx={{ display: "flex", gap: "20px", textAlign: "center" }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "48px",
                    lineHeight: "57.6px",
                    fontFamily: "Bebas Neue",
                  }}
                >
                  10+
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "#BFA0A0",
                    fontFamily: "Poppins",
                  }}
                >
                  Years Experience
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "48px",
                    lineHeight: "57.6px",
                    fontFamily: "Bebas Neue",
                  }}
                >
                  891
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "#BFA0A0",
                    fontFamily: "Poppins",
                  }}
                >
                  Cases Solved
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "48px",
                    lineHeight: "57.6px",
                    fontFamily: "Bebas Neue",
                  }}
                >
                  263
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "27px",
                    color: "#BFA0A0",
                    fontFamily: "Poppins",
                  }}
                >
                  Business Partners
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "569px",
              height: "506px",
              position: "relative",
              zIndex: "10",
            }}
          >
            <Box
              component="img"
              src={About_img}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      </Box>
<Box sx={{width:'1500px', position: "absolute", top: "-1100px", right: "-300px", }}>
<Box
        component="img"
        src={bg1}
        sx={{width:'100%',transform:'rotate(45deg)'}}
      />
</Box>
     
    </Box>
  );
}

export default About;
