import React from "react";
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {

    return(
        <Box sx={{
            mt:{lg: "212px", xm: "70px"},
            ml: {sm: "50px"}
        }} position="relative" p="20px">

            <Typography color="#ff2625" fontWeight="600"
            fontSize="24px"
            >

            Fitness Club
            </Typography>

            <Typography fontWeight={700}
            sx={{fontSize: {lg: '44px', xs: '40px'}}}
            mb='23px' mt="30px"
            >
                Sweat, Smile <br /> and Repeat
            </Typography>

            <Typography fontSize='20px'lineHeight="35px" mb={5}>
                Check out the most effective Exercises
            </Typography>

        <Button variant="contained" color="error"
        href="#exercises"
        sx={{backgroundColor: "#ff2625", padding:"10px"}}
        >Explore Exercises
        </Button>
        <Typography fontWeight={600} color="#ff2625"
        sx={{
            opacity: 0.1, 
            display: {lg: "block", sm: 'none'}
        }}
        fontSize="200px"
        >
            Exercise
        </Typography>

        <img className="hero-banner-img" src={HeroBannerImage} alt='bannerImage' />

        </Box>
    )
}

export default HeroBanner