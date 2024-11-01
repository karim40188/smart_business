import { Box, Typography, Button } from "@mui/material";
import Draggable from "react-draggable";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { useState } from "react";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools">
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  );
};

function Network() {
  const [scale, setScale] = useState(1);

  return (
    <Box className="">
      <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
        Your Network
      </Typography>

      <TransformWrapper
        scale={scale}
        minScale={0.5}
        maxScale={2}
        centerOnInit={true}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                mt: 2,
              }}
            >
              <Button onClick={() => zoomIn()}>+</Button>
              <Button onClick={() => zoomOut()}>-</Button>
              <Button onClick={() => resetTransform()}>Reset</Button>
            </Box>

            <TransformComponent>
              <Draggable>
                <Box
                  sx={{
                    height: "100vh",
                    py: "10px",
                    px: "10px",
                    display: "flex",
                    flexDirection: "column",
                    mx: "auto",
                    cursor: "grab",
                    width: "100vw",
                  }}
                >
                  {/* First Level */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "60px",
                    }}
                  >
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
                          width: { xs: "100%", md: "300px" },
                          height: "3px",
                          backgroundColor: "#fff",
                          position: "absolute",
                          top: "130%",
                          left: "50%",
                          transform: "translateX(-50%)",
                          "&::after": {
                            content: "'R'",
                            position: "absolute",
                            right: "-30px",
                            top: "-10px",
                          },
                          "&::before": {
                            content: "'L'",
                            position: "absolute",
                            left: "-30px",
                            top: "-10px",
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Second Level */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: "60px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        mt: "60px",
                      }}
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
                                sx={{
                                  width: "100%",
                                  fontSize: "10px",
                                  mt: "20px",
                                }}
                              >
                                Abdelraheman Hamed
                              </Typography>
                              <Typography
                                sx={{ width: "100%", fontSize: "10px" }}
                              >
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
                                width: { xs: "100%", md: "300px" },
                                height: "3px",
                                backgroundColor: "#fff",
                                position: "absolute",
                                top: "130%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                "&::after": {
                                  content: "'R'",
                                  position: "absolute",
                                  right: "-30px",
                                  top: "-10px",
                                },
                                "&::before": {
                                  content: "'L'",
                                  position: "absolute",
                                  left: "-30px",
                                  top: "-10px",
                                },
                              }}
                            />
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>

                  {/* Third Level */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      mt: "60px",
                      flexWrap: "wrap",
                    }}
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
                              sx={{
                                width: "100%",
                                fontSize: "10px",
                                mt: "20px",
                              }}
                            >
                              Abdelraheman Hamed
                            </Typography>
                            <Typography
                              sx={{ width: "100%", fontSize: "10px" }}
                            >
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
              </Draggable>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </Box>
  );
}

export default Network;
