import { Box, Typography } from "@mui/material";
import vector from "../assets/vector.png";
import plastine_flag from "../assets/plastine_flag.png";
function OurFocus() {
  return (
    <Box>
      <Box className="container" sx={{}}>
        <Typography
          sx={{
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "75px",
            letterSpacing: "50px",
            textAlign: "center",
          }}
        >
          OUR FOCUS
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "space-between",
            gap: "10px",
            mt: "30px",
          }}
        >
          <Box
            sx={{
              width: "15%",
              textAlign: "center",
            }}
          >
            <Box sx={{ width: "173px", height: "173px" }}>
              <Box
                component="img"
                src={vector}
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: "75px",
                fontFamily: "Tanseek Modern Pro Arabic",
                lineHeight: "105.6px",
              }}
            >
              S
              <br />
              O
              <br />
              C
              <br />
              I
              <br />
              E
              <br />
              T
              <br />
            </Typography>
          </Box>

          <Box
            sx={{ width: "307.48px", height: "293.96px", alignSelf: "center" }}
          >
            <Box
              component="img"
              src={plastine_flag}
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
       
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" ,pt:'120px'}}>
            <Box
              sx={{
                width: "371px",
                height: "424px",
                backdropFilter: "blur(38.599998474121094px)",
                backgroundColor: "#000",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "314px", height: "221px" }}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "SF Pro Display",
                    lineHeight: "35.8px",
                    mb: "20px",
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "SF Pro Display",
                    fontWeight: "400",
                    lineHeight: "23.87px",
                  }}
                >
                  At HFS , our vision is to empower families worldwide by
                  providing the resources, support, and opportunities they need
                  to thrive. We aim to foster financial independence, health,
                  and well-being for every household, building a stronger future
                  together.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "371px",
                height: "424px",
                backdropFilter: "blur(38.599998474121094px)",
                backgroundColor: "#000",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "314px", height: "221px" }}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "SF Pro Display",
                    lineHeight: "35.8px",
                    mb: "20px",
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "SF Pro Display",
                    fontWeight: "400",
                    lineHeight: "23.87px",
                  }}
                >
                  At HFS , our vision is to empower families worldwide by
                  providing the resources, support, and opportunities they need
                  to thrive. We aim to foster financial independence, health,
                  and well-being for every household, building a stronger future
                  together.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Box
              sx={{
                width: "371px",
                height: "424px",
                backdropFilter: "blur(38.599998474121094px)",
                backgroundColor: "#000",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "314px", height: "221px" }}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "SF Pro Display",
                    lineHeight: "35.8px",
                    mb: "20px",
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "SF Pro Display",
                    fontWeight: "400",
                    lineHeight: "23.87px",
                  }}
                >
                  At HFS , our vision is to empower families worldwide by
                  providing the resources, support, and opportunities they need
                  to thrive. We aim to foster financial independence, health,
                  and well-being for every household, building a stronger future
                  together.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "371px",
                height: "424px",
                backdropFilter: "blur(38.599998474121094px)",
                backgroundColor: "#000",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: "314px", height: "221px" }}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "SF Pro Display",
                    lineHeight: "35.8px",
                    mb: "20px",
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "SF Pro Display",
                    fontWeight: "400",
                    lineHeight: "23.87px",
                  }}
                >
                  At HFS , our vision is to empower families worldwide by
                  providing the resources, support, and opportunities they need
                  to thrive. We aim to foster financial independence, health,
                  and well-being for every household, building a stronger future
                  together.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OurFocus;
