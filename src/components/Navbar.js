import React,{useState} from 'react'
import { Box, styled, Typography, ListItem, ListItemButton, List, ListItemIcon, ListItemText, Drawer, Container} from '@mui/material'
import CustomButton from './CustomButton'
import MenuIcon from '@mui/icons-material/Menu'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import logoImg from './logo-img-2_adobe_express.svg'


const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState({
        left: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event.type === "keydown" &&
          (event.type === "Tab" || event.type === "Shift")
        ) {
          return;
        }
    
        setMobileMenu({ ...mobileMenu, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {["Home", "Shop", "Blog","Contact"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 && <HomeIcon />}
                      {index === 1 && <ShoppingCartIcon/>}
                      {index === 2 && <RssFeedIcon />}
                      {index === 3 && <ContactsIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      );


    const NavbarLinksBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
    }));
    
    const NavLink = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        color: "#4F5361",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
          color: "#fff",
        },
    }));
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
    
    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: "pointer",
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
          display: "block",
        },
    }));

    const NavbarLogo = styled("img")(({ theme }) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
    }));
    const NavbarContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(1),
        [theme.breakpoints.down("md")]: {
          padding: theme.spacing(2),
        },
      }));
    
    
  return (
    <NavbarContainer>
        <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={logoImg} sx={{width: '130px',height: '120px',marginBottom: '20px'}} alt="logo" />
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2">Home</NavLink>
          <NavLink variant="body2">Shop</NavLink>
          <NavLink variant="body2">Blog</NavLink>
          <NavLink variant="body2">Contact</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavLink variant="body2">Sign Up</NavLink>
        <CustomButton
          backgroundColor="hsl(149,59%,14%)"
          color="#fff"
          buttonText="Register"
        />
      </Box>
       
    </NavbarContainer>
  )
}

export default Navbar