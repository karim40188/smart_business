import { Box, Typography, Button } from "@mui/material";
import Draggable from "react-draggable";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useContext, useState } from "react";
import { Context } from "../Context";

// بيانات المستويات والكاردات
const levelsData = [
  {
    id: 1,
    members: [{ name: "Abdelraheman Hamed", id: "#1000000" }],
  },
  {
    id: 2,
    members: [
      { name: "Member 1", id: "#1000001" },
      { name: "Member 2", id: "#1000002" },
    ],
  },
  {
    id: 3,
    members: [
      { name: "Member 3", id: "#1000003" },
      { name: "Member 4", id: "#1000004" },
      { name: "Member 5", id: "#1000005" },
      { name: "Member 6", id: "#1000006" },
    ],
  },
  {
    id: 4,
    members: [
      { name: "Member 3", id: "#1000003" },
      { name: "Member 4", id: "#1000004" },
      { name: "Member 5", id: "#1000005" },
      { name: "Member 6", id: "#1000006" },
      { name: "Member 3", id: "#1000003" },
      { name: "Member 4", id: "#1000004" },
      { name: "Member 5", id: "#1000005" },
      { name: "Member 6", id: "#1000006" },
    ],
  },
  {
    id: 5,
    members: [
      { name: "Member 3", id: "#1000003" },
      { name: "Member 4", id: "#1000004" },
      { name: "Member 5", id: "#1000005" },
      { name: "Member 6", id: "#1000006" },
      { name: "Member 3", id: "#1000003" },
      { name: "Member 4", id: "#1000004" },
      { name: "Member 5", id: "#1000005" },
      { name: "Member 6", id: "#1000006" },
      { name: "Member 3", id: "#1000003" },
      { name: "Member 4", id: "#1000004" },
      { name: "Member 5", id: "#1000005" },
      { name: "Member 6", id: "#1000006" },
      { name: "Member 3", id: "#1000003" },
      { name: "Member 4", id: "#1000004" },
      { name: "Member 5", id: "#1000005" },
      { name: "Member 6", id: "#1000006" },
    ],
  },
];

function Network() {
  const [scale] = useState(1);
  let { sidebarOpen } = useContext(Context);

  return (
    <Box sx={{ position: "relative", height: "100vh" }}>
      <Typography sx={{ fontSize: "20px", fontWeight: "700", mb: "20px" }}>
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
                position: "absolute",
                top: "10px",
                left: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
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
                    py: "10px",
                    px: "10px",
                    display: "flex",
                    flexDirection: "column",
                    mx: "auto",
                    cursor: "grab",
                    width: sidebarOpen
                      ? { md: "85vw" }
                      : { xs: "100%", md: "100vw" },
                  }}
                >
                  {/* رسم المستويات والكاردات */}
                  {levelsData.map((level, levelIndex) => (
                    <Box
                      key={level.id}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        gap: "20px",
                        justifyItems: "center",
                        mt: levelIndex === 0 ? 0 : "60px",
                      }}
                    >
                      {level.members.map((member) => (
                        <Box
                          key={member.id}
                          sx={{
                            width: "150px",
                            height: "180px",
                            position: "relative",
                            boxShadow: "0px 2px 8.4px 3px #000000",
                            borderRadius: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#fff",
                          }}
                        >
                          <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                            {member.name}
                          </Typography>
                          <Typography sx={{ fontSize: "10px", color: "#555" }}>
                            {member.id}
                          </Typography>
                          <Box
                            sx={{
                              width: "76px",
                              height: "76px",
                              borderRadius: "50%",
                              backgroundColor: "#eee",
                              position: "absolute",
                              top: "10px",
                              left: "50%",
                              transform: "translateX(-50%)",
                            }}
                          />
                          {/* إضافة الخط بين الكاردات */}
                          {levelIndex < levelsData.length - 1 && (
                            <Box
                              sx={{
                                width: "3px",
                                height: "42px",
                                backgroundColor: "#fff",
                                position: "absolute",
                                top: "100%",
                                left: "50%",
                                transform: "translateX(-50%)",
                              }}
                            />
                          )}
                        </Box>
                      ))}
                    </Box>
                  ))}
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
