import { Box, Typography } from "@mui/material";
import peace_of_arts_img from "../assets/peace_of_arts_img.png";
import img1 from "../assets/peace_of_art_imgs/img1.png";
import img2 from "../assets/peace_of_art_imgs/img2.png";
import img3 from "../assets/peace_of_art_imgs/img3.png";
import img4 from "../assets/peace_of_art_imgs/img4.png";
import img5 from "../assets/peace_of_art_imgs/img5.png";
import img6 from "../assets/peace_of_art_imgs/img6.png";
import img7 from "../assets/peace_of_art_imgs/img7.png";
import img8 from "../assets/peace_of_art_imgs/img8.png";
import img9 from "../assets/peace_of_art_imgs/img9.png";
import img10 from "../assets/peace_of_art_imgs/img10.png";
import { useState } from "react";

function PeaceOfArts() {
  return (
    <Box sx={{overflowX:'hidden'}}>
      <Box className="container">
        <Typography
          sx={{
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "75px",
            letterSpacing: "50px",
            textAlign: "center",
            mb: "30px",
          }}
        >
          PEACE OF ART
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            width: { xs: "100%", xl: "90%" },
            mx: "auto",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "191px" },
              height: "253px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={img1}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "376px" },
              height: "253px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={img2}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "191px" },
              height: "253px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={img3}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "366px" },
              height: "253px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={img4}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "191px" },
              height: "253px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={img5}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "376px" },
              height: "253px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={img6}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "191px" },
              height: "253px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={img7}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "366px" },
              height: "253px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={img8}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "191px" },
              height: "253px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={img9}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "191px" },
              height: "253px",
              borderRadius: "10px",
            }}
          >
            <Box
              component="img"
              src={img10}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PeaceOfArts;
