import { Box, Typography } from "@mui/material";

function Network() {
  return (
    <Box className="container">
      <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
        Your Network
      </Typography>

      <Box
        sx={{
          height: "100vh",
          py: "10px",
          px: "10px",
          display: "flex",
          flexDirection: "column",
          width: "80%",
          mx: "auto",
        }}
      >
        {/* first level */}
        <Box
          sx={{
            width: "125px",
            height: "152px",
            position: "relative",
            boxShadow: "0px 2px 8.4px 3px #000000",
            borderRadius: "15px",
            alignSelf: "center",
          }}
        >
          <Box className="network-header" />
          <Box
            sx={{
              height: "97px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography sx={{ width: "100%", fontSize: "10px", mt: "20px" }}>
              Abdelraheman Hamed
            </Typography>
            <Typography sx={{ width: "100%", fontSize: "10px" }}>
              #1000000
            </Typography>
          </Box>

          <Box
            sx={{
              width: "76px",
              height: "76px",
              borderRadius: "50%",
              position: "absolute",
              backgroundColor: "#fff",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-80%)",
            }}
          />

          <Box
            sx={{
              width: "3px",
              height: "42px",
              backgroundColor: "#fff",
              position: "absolute",

              top: "100%",
              left: "50%",
            }}
          />
          <Box
            sx={{
              width: "300px",
              height: "3px",
              backgroundColor: "#fff",
              position: "absolute",

              top: "130%",
              left: "50%",
            
              transform: "translateX(-50%)",
              "&::after": {
                content: "'R'",
                position:'absolute',
                right:'-30px',
                top:'-10px'
              },
              "&::before": {
                content: "'L'",
                position:'absolute',
                left:'-30px',
                top:'-10px'
              },
            }}
          />
        </Box>

        {/* second level */}
        <Box
          sx={{ display: "flex", justifyContent: "space-around", mt: "60px" }}
        >
          {[1, 2].map((_, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: "125px",
                  height: "152px",
                  position: "relative",
                  boxShadow: "0px 2px 8.4px 3px #000000",
                  borderRadius: "15px",
                  alignSelf: "center",
                }}
              >
                <Box className="network-header" />
                <Box
                  sx={{
                    height: "97px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{ width: "100%", fontSize: "10px", mt: "20px" }}
                  >
                    Abdelraheman Hamed
                  </Typography>
                  <Typography sx={{ width: "100%", fontSize: "10px" }}>
                    #1000000
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "76px",
                    height: "76px",
                    borderRadius: "50%",
                    position: "absolute",
                    backgroundColor: "#fff",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-80%)",
                  }}
                />

                <Box
                  sx={{
                    width: "3px",
                    height: "42px",
                    backgroundColor: "#fff",
                    position: "absolute",

                    top: "100%",
                    left: "50%",
                  }}
                />
               <Box
            sx={{
              width: "300px",
              height: "3px",
              backgroundColor: "#fff",
              position: "absolute",

              top: "130%",
              left: "50%",
            
              transform: "translateX(-50%)",
              "&::after": {
                content: "'R'",
                position:'absolute',
                right:'-30px',
                top:'-10px'
              },
              "&::before": {
                content: "'L'",
                position:'absolute',
                left:'-30px',
                top:'-10px'
              },
            }}
          />
              </Box>
            );
          })}
        </Box>

        {/* thirt level */}
        <Box
          sx={{ display: "flex", justifyContent: "space-around", mt: "60px" }}
        >
          {[1, 2, 3, 4].map((_, index) => {
            return (
              <Box
                key={index}
                sx={{
                  width: "125px",
                  height: "152px",
                  position: "relative",
                  boxShadow: "0px 2px 8.4px 3px #000000",
                  borderRadius: "15px",
                  alignSelf: "center",
                }}
              >
                <Box className="network-header" />
                <Box
                  sx={{
                    height: "97px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{ width: "100%", fontSize: "10px", mt: "20px" }}
                  >
                    Abdelraheman Hamed
                  </Typography>
                  <Typography sx={{ width: "100%", fontSize: "10px" }}>
                    #1000000
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "76px",
                    height: "76px",
                    borderRadius: "50%",
                    position: "absolute",
                    backgroundColor: "#fff",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-80%)",
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Network;
