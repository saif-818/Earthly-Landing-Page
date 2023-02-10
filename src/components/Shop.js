import React from 'react'
import {Box, styled, Typography, Container} from '@mui/material'
import wheatFibre from './wheat_fibre.png'
import orangeFibre from './orange_fibre.png'

const Shop = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-around",
        marginTop: '150px',
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          textAlign: "center",
        },
      }));
  return (
    <div style={{background: 'hsl(76,60%,95%)'}}>
       <CustomContainer>
            <Box>
                <img
                src={wheatFibre}
                alt="wheatFibreImg"
                style={{ width: "100%", marginTop: "6rem", marginBottom: "2rem",backgroundSize: '100%',backgroundPosition: 'right-bottom' }}
                />
            </Box>
            <Box sx={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
                <Typography
                variant="body2"
                sx={{ fontSize: "24px", color: "#5A6473", my: 4 }}
                >
                <p data-aos='fade-left' data-aos-duration='3000'>Sourced from local farmers, plant residue from Wheat, Barley, and Bamboo is molded into durable cups using our proprietary technology.
                </p>
                </Typography>

            </Box>
       </CustomContainer>
       <CustomContainer>
            <Box sx={{ display: 'flex',alignItems: 'center',justifyContent: 'center' }}>
            <Typography
                variant="body2"
                sx={{ fontSize: "24px", color: "#5A6473", my: 4, }}
                >
                <p data-aos='fade-right' data-aos-duration='3000'>Made from Orange peels and other organic matter left behind after Orange is harvested.
                </p>
                </Typography>
            </Box>
            <Box>
                <img
                    src={orangeFibre}
                    alt="orangeFibreImg"
                    style={{ maxWidth: "100%", marginTop: "6rem", marginBottom: "2rem",backgroundSize: '100%',backgroundPosition: 'right-bottom' }}
                />
            </Box>
       </CustomContainer>
    </div>
  )
}

export default Shop