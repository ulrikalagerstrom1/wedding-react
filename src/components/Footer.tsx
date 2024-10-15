import { Typography, Link } from '@mui/material';

const Footer = () => (
    <footer>
        <Typography variant="body1">
            Follow us on Instagram: <Link href="https://instagram.com/yourwedding" target="_blank">#YourWedding</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary">
            &copy; 2024 by [Your Names]. All rights reserved.
        </Typography>
    </footer>
);

export default Footer;
