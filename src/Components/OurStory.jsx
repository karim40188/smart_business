import { Box, Typography } from "@mui/material";
function OurStory() {
  return (
    <Box>
      <Box className="container">
        <Typography
          sx={{
            fontFamily: "Tanseek Modern Pro Arabic",
            fontSize: "75px",
            letterSpacing: "50px",
            textAlign: "center",
          }}
        >
          OUR STORY
        </Typography>

        <Typography
          sx={{
            width: "50%",
            mx: "auto",
            mt: "30px",
            textAlign: "center",
            fontFamily: "SF Pro Display",
            fontSize: "20px",
            lineHeight: "23.87px",
          }}
        >
          At HFS, we believe that success is not just measured by numbers, but
          by the connections we build, the lives we touch, and the dreams we
          help turn into reality. Founded with a simple yet profound vision, HFS
          stands for Home, Family, and Support—a reflection of the values that
          guide everything we do.
          <br />
          <br />
          Our journey began with a desire to create more than just a business.
          We wanted to build a community where people can thrive together,
          supporting each other in reaching their highest potential. We
          recognized that in today’s fast-paced world, people are searching for
          something deeper—genuine connections, meaningful opportunities, and a
          sense of belonging. That’s what HFS is all about.
          <br />
          <br />
          We bring together the power of network marketing, trading expertise,
          programming solutions, and wellness products to offer holistic growth
          opportunities. Our products are designed to enhance your financial,
          mental, and physical well-being, while our supportive community lifts
          you up every step of the way. We are more than just a company—we are a
          family that stands by you.
          <br />
          <br />
          At HFS, we’re here to support your journey, no matter where it begins.
          Whether you’re looking to build a thriving business, improve your
          skills, or live a healthier life, we provide the tools and the network
          to help you achieve your goals. Together, we rise, and together, we
          succeed. Join us at HFS, where home, family, and support meet
          opportunity.
        </Typography>
      </Box>
    </Box>
  );
}

export default OurStory;
