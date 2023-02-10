import React from 'react'
import Navbar from './Navbar'
import {Box, Container, Typography, styled} from '@mui/material'
import earthly from './earthly-homepage.png'
import CustomButton from "./CustomButton";
import {motion} from 'framer-motion';

const FrontPage = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
      }));
    
    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "60px",
        color: "hsl(149,59%,14%)",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));
  return (
    <Box sx={{ backgroundColor: "hsl(76,60%,96%)", minHeight: "90vh" }}>
    <Container>
      <Navbar />
      <motion.div
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           transition={{delay: 0.5,duration: 1.2}}
       >
      <CustomBox>
      <motion.div
               initial={{x:'-100vw'}}
               animate={{x:0}}
               transition={{delay:0.8,duration: 1.2}}
        >
        <Box sx={{ flex: "1"}}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "18px",
              color: "#687690",
              fontWeight: "500",
              mt: 10,
              mb: 4,
            }}
          >
            
                Welcome to Earthly
            
          </Typography>
          <Title variant="h1">
            Join the Revolution Make It Possible
          </Title>
          <Typography
            variant="body2"
            sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
          >
            We are on a mission to create an affordable, sustainable and guilt-free version of the products you use by harnessing the power of data and design.
          </Typography>
          <CustomButton
            backgroundColor="hsl(149,59%,14%)"
            color="#fff"
            buttonText="More About Us"
            heroBtn={true}
          />
        </Box>
        </motion.div>
        <motion.div
               initial={{x:'100vw'}}
               animate={{x:0}}
               transition={{delay:0.8,duration: 1.2}}
        >
        <Box sx={{ flex: "1.25"}}>
          <img
            src={earthly}
            alt="homeImg"
            style={{ maxWidth: "100%", marginTop: "6rem", marginBottom: "2rem",backgroundSize: '100%',backgroundPosition: 'right-bottom' }}
          />
        </Box>
        </motion.div>
      </CustomBox>
      </motion.div>
    </Container>
  </Box>
  )
}

export default FrontPage