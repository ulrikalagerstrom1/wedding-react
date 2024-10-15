import { useFormik } from 'formik';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const RSVP = () => {
    const formik = useFormik({
        initialValues: { name: '', email: '', attending: '' },
        onSubmit: values => {
            console.log('Form values', values);
            // Handle form submission
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                name="name"
                label="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                fullWidth
                margin="normal"
            />

            <TextField
                id="email"
                name="email"
                label="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                fullWidth
                margin="normal"
            />

            <FormControl fullWidth margin="normal">
                <InputLabel id="attending-label">Will you attend?</InputLabel>
                <Select
                    id="attending"
                    name="attending"
                    labelId="attending-label"
                    value={formik.values.attending}
                    onChange={formik.handleChange}
                >
                    <MenuItem value="yes">Yes</MenuItem>
                    <MenuItem value="no">No</MenuItem>
                </Select>
            </FormControl>

            <Button type="submit" variant="contained" color="primary">
                Submit RSVP
            </Button>
        </form>
    );
};

export default RSVP;
