import React from 'react'
import {Box, styled, Typography, Container, TextField} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Contact = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-around",
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', 
        borderRadius: '12px',
        padding: '35px',
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          textAlign: "center",
        },
      }));
      const Title = styled(Typography)(({ theme }) => ({
        fontSize: "40px",
        color: "hsl(149,59%,14%)",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 54),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));
    const IconBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        [theme.breakpoints.down("sm")]: {
          justifyContent: "center",
        },
      }));
  return (
    <div>
        <Box>
          <Title>Have Some Questions?</Title>
        </Box>
       <CustomContainer sx={{background: 'linear-gradient(to right, white 75%,hsl(103, 80%, 88%) 50%)'}}>
           <Box sx={{display: 'flex',width: '70%',gap: '30px',}}>
                <Box sx={{display: 'flex',flexDirection: 'column', justifyContent: 'space-between',width: '50%'}}>
                    <Typography>
                        SEND US A MESSAGE
                    </Typography>
                    <Box>
                        <Typography>Your name</Typography>
                        <Box sx={{width: '100%',height: '100%'}}>
                           <TextField fullWidth id="fullWidth" InputProps={{ sx:{height:35} }}>John Doe</TextField>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>Phone Number</Typography>
                        <Box sx={{width: '100%',height: '100%'}}>
                        <TextField fullWidth id="fullWidth" InputProps={{ sx:{height:35} }}>John Doe</TextField>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>Email Address</Typography>
                        <Box sx={{width: '100%',height: '100%'}}>
                        <TextField fullWidth id="fullWidth" InputProps={{ sx:{height:35} }}>John Doe</TextField>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{width: '50%',}}>
                   <Typography>Your Message</Typography>
                   <Box sx={{width: '100%',}}>
                      <TextField fullWidth id="fullWidth" size='large' InputProps={{ sx: { height: 150 } }} label='How can we help you'> </TextField>
                   </Box>
                   <Box height='100px'><SendIcon sx={{marginTop: '15%',marginLeft: '75%',fontSize: '40px',borderRadius: '100%',backgroundColor: 'hsl(103, 80%, 88%)', color: 'black',padding: '5px'}}></SendIcon></Box>
                </Box>
           </Box>




           <Box sx={{width: '20%'}}>
               <Typography variant='h5'>Contact Information</Typography>
               <Box sx={{display: 'flex',flexDirection: 'column',justifyContent: 'space-between',marginTop: '25px',marginBottom: '35px',gap: '10px'}}>
                    <Typography sx={{wordWrap: 'break-word',wordBreak: 'break-word'}}><LocationOnIcon fontSize='small'></LocationOnIcon>Address: 16 Liffey Ave, Liffey Valley Park, Lucan, Co. Dublin, K78 HW50, Ireland</Typography>
                    <Typography><PhoneIcon fontSize='small'></PhoneIcon>Phone No: +353 1552 4908</Typography>
                    <Typography sx={{paddingBottom: '20px'}}><ContactMailIcon fontSize='small'></ContactMailIcon>support@example.com</Typography>
               </Box>
              


               <IconBox>
              <FacebookIcon alt="fbIcon" style={{ cursor: "pointer" }} />
              <TwitterIcon
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <LinkedInIcon
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
           </Box>

       </CustomContainer>
    </div>
  )
}

export default Contact