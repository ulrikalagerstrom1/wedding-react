import {Link, Paper, Typography} from '@mui/material';

const Accommodation = () => (
    <Paper elevation={3} sx={{padding: 3}}>
        <Typography variant="h4" gutterBottom>
            Where to Stay
        </Typography>
        <Typography paragraph>
            We have reserved rooms at Hotel XYZ. Please mention our wedding when booking to get a
            discount.
        </Typography>
        <Link href="https://hotelxyz.com" target="_blank">
            Book Here
        </Link>
    </Paper>
);

export default Accommodation;
