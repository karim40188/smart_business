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
    members: Array.from({ length: 8 }, (_, index) => ({
      name: `Member ${index + 7}`,
      id: `#10000${index + 7}`,
    })),
  },
];

function Network() {
  const [scale] = useState(1);
  let { sidebarOpen } = useContext(Context);

  return (
    <Box className="container" sx={{ position: "relative", height: "100vh" }}>
      <Typography sx={{ fontSize: "20px", fontWeight: "700", py: '10px' }}>
        Your Network
      </Typography>

      <TransformWrapper scale={scale} minScale={0.5} maxScale={2} centerOnInit={true}>
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
                zIndex: '9999',
                py: '100px'
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
                    width: sidebarOpen ? { md: "85vw" } : { xs: "100%", md: "100vw" },
                  }}
                >
                  {levelsData.map((level, levelIndex) => (
                    <Box key={level.id} sx={{ display: "flex", justifyContent: "center", mt: levelIndex === 0 ? 0 : "60px" }}>
                      <Box sx={{ display: "flex", justifyContent: "space-around", width: '100%' }}>
                        {level.members.map((member, memberIndex) => (
                          <Box key={member.id} sx={{ width: "125px", height: "152px", position: "relative", boxShadow: "0px 2px 8.4px 3px #000000", borderRadius: "15px", alignSelf: "center" }}>
                            <Box className="network-header" />
                            <Box sx={{ height: "97px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                              <Typography sx={{ width: "100%", fontSize: "10px", mt: "20px" }}>{member.name}</Typography>
                              <Typography sx={{ width: "100%", fontSize: "10px" }}>{member.id}</Typography>
                            </Box>
                            <Box sx={{ width: "76px", height: "76px", borderRadius: "50%", position: "absolute", backgroundColor: "#fff", top: "50%", left: "50%", transform: "translate(-50%,-80%)" }} />
                            <Box sx={{ width: "3px", height: "42px", backgroundColor: "#fff", position: "absolute", top: "100%", left: "50%" }} />
                            {levelIndex < levelsData.length - 1 && (
                              <Box sx={{ width: { xs: "100%", md: "300px" }, height: "3px", backgroundColor: "#fff", position: "absolute", top: "130%", left: "50%", transform: "translateX(-50%)", "&::after": { content: "'R'", position: "absolute", right: "-30px", top: "-10px" }, "&::before": { content: "'L'", position: "absolute", left: "-30px", top: "-10px" } }} />
                            )}
                          </Box>
                        ))}
                      </Box>
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
