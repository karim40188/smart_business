/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material";
import home_bg from "../../assets/pages_assets/home_bg.png";
import check_icon from "../../assets/check_icon.png";
import x_mark_icon from "../../assets/x_mark_icon.png";
import { useState } from "react";

function CardComponent({ title, price, cardItems, cv }) {
  return (
    <Box
      className="subs-card"
      sx={{
        width: "320px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "20px",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: "12px" }}>{title}</Typography>
        <Typography sx={{ fontSize: "14px" }}>
          {price}{" "}
          <Typography component="span" sx={{ fontSize: "8px" }}>
            / Monthly
          </Typography>
        </Typography>

        <Typography sx={{ fontSize: "9px", fontWeight: "700" }}>
          {cv} CV
        </Typography>
      </Box>
      <Box
        sx={{
          mt: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {cardItems.map((card, index) => {
          const isLastItem = index === cardItems.length - 1;
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                position: "relative",
                color: "#CACACA",
              }}
            >
              <Box
                sx={{ width: "7px", height: "7px" }}
                component="img"
                src={card.icon}
              />

              <Typography
                sx={{
                  width: "100%",
                  fontSize: "11px",
                  "&::after": !isLastItem && {
                    content: '""',
                    position: "absolute",
                    bottom: "-10px",
                    border: "1px solid #fff",
                    width: "180px",
                    left: "20px",

                    borderColor: "#CACACA",
                  },
                }}
              >
                {card.title}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ textAlign: "center", mt: "30px" }}>
        <Button
          sx={{
            width: "146px",
            height: "22px",
            backgroundColor: "#FFFFFF",

            color: "#000",
            borderRadius: "5px",
            fontSize: "10px",
          }}
        >
          Purchase NOW
        </Button>
      </Box>
    </Box>
  );
}

function Membership() {
  const [cardLists] = useState([
    {
      title: "Essential",
      price: "99",
      cv: "25",
      items: [
        { icon: check_icon, title: "Trade alert" },
        { icon: check_icon, title: "Beginner course" },
        { icon: check_icon, title: "Basics course" },
        { icon: check_icon, title: "Live trading" },
        { icon: x_mark_icon, title: "Live sessions" },
        { icon: x_mark_icon, title: "Advance course" },
        { icon: x_mark_icon, title: "Expert course" },
        { icon: x_mark_icon, title: "Expert plus course" },
        { icon: x_mark_icon, title: "Scanners" },
        { icon: x_mark_icon, title: "private sessions with selected coach" },
        { icon: x_mark_icon, title: "Affiliate program" },
        { icon: x_mark_icon, title: "Affiliate program with extra Bonus" },
      ],
    },
    {
      title: "Basic",
      price: "399",
      cv: "100",
      items: [
        { icon: check_icon, title: "Trade alert" },
        { icon: check_icon, title: "Beginner course" },
        { icon: check_icon, title: "Basics course" },
        { icon: x_mark_icon, title: "Live trading" },
        { icon: check_icon, title: "Live sessions" },
        { icon: x_mark_icon, title: "Advance course" },
        { icon: x_mark_icon, title: "Expert course" },
        { icon: x_mark_icon, title: "Expert plus course" },
        { icon: x_mark_icon, title: "Scanners" },
        { icon: x_mark_icon, title: "private sessions with selected coach" },
        { icon: x_mark_icon, title: "Affiliate program" },
        { icon: x_mark_icon, title: "Affiliate program with extra Bonus" },
      ],
    },
    {
      title: "Premium",
      price: "749",
      cv: "200",
      items: [
        { icon: check_icon, title: "Trade alert" },
        { icon: check_icon, title: "Beginner course" },
        { icon: check_icon, title: "Basics course" },
        { icon: check_icon, title: "Live trading" },
        { icon: check_icon, title: "Live sessions" },
        { icon: check_icon, title: "Advance course" },
        { icon: x_mark_icon, title: "Expert course" },
        { icon: x_mark_icon, title: "Expert plus course" },
        { icon: check_icon, title: "One Scanners" },
        { icon: x_mark_icon, title: "private sessions with selected coach" },
        { icon: x_mark_icon, title: "Affiliate program" },
        { icon: x_mark_icon, title: "Affiliate program with extra Bonus" },
      ],
    },
    {
      title: "Pro",
      price: "1499",
      cv: "500",
      items: [
        { icon: check_icon, title: "Trade alert" },
        { icon: check_icon, title: "Beginner course" },
        { icon: check_icon, title: "Basics course" },
        { icon: check_icon, title: "Live trading" },
        { icon: check_icon, title: "Live sessions" },
        { icon: check_icon, title: "Advance course" },
        { icon: check_icon, title: "Expert course" },
        { icon: x_mark_icon, title: "Expert plus course" },
        { icon: check_icon, title: "All scanners" },
        { icon: check_icon, title: "4 private sessions with selected coach" },
        { icon: check_icon, title: "Affiliate program" },
        { icon: check_icon, title: "Affiliate program with extra Bonus" },
      ],
    },

    {
      title: "Premium",
      price: "749",
      cv: "600",
      items: [
        { icon: check_icon, title: "Trade alert" },
        { icon: check_icon, title: "Beginner course" },
        { icon: check_icon, title: "Basics course" },
        { icon: check_icon, title: "Live trading" },
        { icon: check_icon, title: "Live sessions" },
        { icon: check_icon, title: "Advance course" },
        { icon: check_icon, title: "Expert course" },
        { icon: check_icon, title: "Expert plus course" },
        { icon: check_icon, title: "All scanners" },
        { icon: check_icon, title: "4 private sessions with selected coach" },
        { icon: check_icon, title: "Affiliate program" },
        { icon: check_icon, title: "Affiliate program with extra Bonus" },
      ],
    },
  ]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${home_bg})`,
        backgroundSize: "cover",
        height: "100%",
      }}
    >
      <Box className="container" sx={{ width: "90%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {cardLists.map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              price={card.price}
              cardItems={card.items}
              cv={card.cv}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Membership;
