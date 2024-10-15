import { Box, Typography } from '@mui/material';

const Hero = () => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundImage: 'url(/path-to-your-image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <Typography variant="h2" color="white">
            Welcome to Our Wedding!
        </Typography>
        <Typography variant="h6" color="white">
            Join us on June 30, 2024, in Zermatt, Switzerland
        </Typography>
    </Box>
);

export default Hero;
