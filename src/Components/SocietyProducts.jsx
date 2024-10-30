import { Box, Typography } from "@mui/material";
import blankImg from "../assets/blank.png";

import googlePlay from "../assets/googleplay.png";
import appleStore from "../assets/apple.png";
import card1Bg from "../assets/card1-bg.png";
import card1Bg2 from "../assets/card1_bg2.png";
import cardsBg from "../assets/cards_bg.png";
import hfs_scoiety_img from "../assets/hfs-society-img.png";
import { motion, useScroll, useTransform } from "framer-motion";

function SocietyProducts() {
  const { scrollYProgress } = useScroll();

  // تحويل نسبة التمرير للتحكم في الشفافية لكل عنصر بناءً على فهرسه
  const opacityLevels = [
    useTransform(scrollYProgress, [0, 0.3], [1, 0]),
    useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
    useTransform(scrollYProgress, [0.6, 1], [0, 1]),
  ];
  return (
    <Box sx={{}}>
      <Box className="container">
        <Typography
          sx={{
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "75px",
            letterSpacing: "50px",
            textAlign: "center",
            mb: "100px",
          }}
        >
          SOCIETY
          <br />
          PRODUCTS
        </Typography>

        {["1", "2", "3"].map((_, index) => {
          return (
            <Box
              key={index}
              sx={{
                overflow: "hidden", // تأكد أن العنصر الأب يحتوي على overflow صحيح
                position: "sticky",
                top: 0, // تحدد النقطة التي يبدأ فيها العنصر بالتثبيت
                zIndex: 10, // تأكد من أنه في الأعلى عند التثبيت
              }}
            >
              <Box
                sx={{
                  width: "1099px",
                  background: "#13131321",
                  height: "100%",
                  mx: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "40px",
                  position: "relative",
                  zIndex: "12",
                  borderRadius: "15px",
                  backgroundImage: `url(${cardsBg})`,
                  backgroundSize: "cover",
                  objectFit: "cover",
                  backgroundPosition: "center center",
                  px: "80px",
                  py: "100px",
                  overflow: "hidden",
                }}
              >
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
                    comprehensive resources to help you navigate the
                    complexities of forex trading with confidence.
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
              </Box>

              <Box
                className="blur"
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
                  bottom: "-50px",
                  right: "25px",
                  // zIndex: "99",
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
        })}
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "469px", height: "469px" }}>
          <Box
            component="img"
            src={hfs_scoiety_img}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Typography
          sx={{ fontSize: "50px", textAlign: "center", fontWeight: "700" }}
        >
          Want to join the community?
          <br />
          Join the next webinar
        </Typography>
      </Box>
    </Box>
  );
}

export default SocietyProducts;
