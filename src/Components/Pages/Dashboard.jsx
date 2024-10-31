import { Box, Typography } from "@mui/material";
import copy_icon from "../../assets/pages_assets/copy_icon.png";
import vector1 from "../../assets/pages_assets/vector1.png";
import { MdArrowOutward } from "react-icons/md";

function Dashboard() {
  return (
    <Box>
      <Box sx={{ width: "752px", height: "auto", borderRadius: "15px" }}>
        <Box
          sx={{
            background:
              "linear-gradient(280.13deg, #DC4B9A 40.3%, #51D5F5 59.7%)",
            height: "71px",
            borderRadius: "15px 15px 0 0",
            display: "flex",
            justifyContent: "space-between",
            px: "30px",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "19px" }}>LEFT</Typography>
          <Typography sx={{ fontSize: "19px" }}>Network status</Typography>
          <Typography sx={{ fontSize: "19px" }}>RIGHT </Typography>
        </Box>

        <Box
          sx={{
            height: "100%",
            px: "30px",
            py: "50px",
            backgroundColor: "#091B29",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            borderRadius: "0 0  15px 15px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography>489,000</Typography>
            <Typography>0</Typography>
            <Typography>677</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography>Rank volume</Typography>
            <Typography>Total Network volume</Typography>
            <Typography>Total downline</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography>1,755,100</Typography>
            <Typography>1,281,200</Typography>
            <Typography>4,265</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "752px",
          height: "auto",
          borderRadius: "15px",
          mt: "30px",
        }}
      >
        <Box
          sx={{
            background:
              "linear-gradient(280.13deg, #DC4B9A 40.3%, #51D5F5 59.7%)",
            height: "71px",
            borderRadius: "15px 15px 0 0",
            display: "flex",
            justifyContent: "space-between",
            px: "30px",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "19px" }}>LEFT</Typography>
          <Typography sx={{ fontSize: "19px" }}>Network status</Typography>
          <Typography sx={{ fontSize: "19px" }}>RIGHT </Typography>
        </Box>

        <Box
          sx={{
            height: "100%",
            px: "30px",
            py: "50px",
            backgroundColor: "#091B29",
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            borderRadius: "0 0  15px 15px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography>ROYAL CROWN DIAMOND</Typography>
            <Typography>CROWN DIAMOND</Typography>
            <Typography>BLACK DIAMOND</Typography>
            <Typography>BLUE DIAMOND</Typography>
            <Typography>DIAMOND</Typography>
            <Typography>EMERALD</Typography>
            <Typography>RUBY</Typography>
            <Typography>SAPPHIRE</Typography>
            <Typography>JADE</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
            <Typography>0</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: "30px" }}>
        <Box
          sx={{
            width: "355px",
            height: "217px",
            background:
              "linear-gradient(116.25deg, #51D5F5 13.83%, #762853 33.13%, #02070B 86.17%)",
            borderRadius: "15px",
            p: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography>Left Referral link</Typography>
            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Box
                sx={{
                  width: "auto",
                  height: "38px",
                  bordderRadius: "5px",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  justifyContent: "sstart",
                  alignItems: "center",
                  px: "10px",
                }}
              >
                <Typography sx={{ color: "#000" }}>
                  https://www.google.com/s.....
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "18px", height: "18px" }}>
                  <Box
                    component="img"
                    src={copy_icon}
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography>Right Referral link</Typography>
            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <Box
                sx={{
                  width: "auto",
                  height: "38px",
                  bordderRadius: "5px",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  justifyContent: "sstart",
                  alignItems: "center",
                  px: "10px",
                }}
              >
                <Typography sx={{ color: "#000" }}>
                  https://www.google.com/s.....
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "18px", height: "18px" }}>
                  <Box
                    component="img"
                    src={copy_icon}
                    sx={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          width: "355px",
          height: "163px",
          backgroundColor: "#061622",
          mt: "100px",
          borderRadius: "15px",
          p: "15px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            lineHeight: "17.9px",
            letterSpacing: "8px",
          }}
        >
          Current
          <br />
          Rank
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "700",
              letterSpacing: "8px",
              alignSelf: "center",
            }}
          >
            JADE
          </Typography>

          <Box>
            <MdArrowOutward />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(${vector1})`,
            width: "133px",
            height: "133px",
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition: "center",
            position: "absolute",
            top: "-60px",
            right: "30px",
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          mt: "100px",
          width: "355px",
          height: "261px",
          border: "1px solid #061622",
          backgroundColor:'#061622'
        }}
      ></Box>
    </Box>
  );
}

export default Dashboard;
