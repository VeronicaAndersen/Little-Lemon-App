import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
export default function Testimonials() {

    return (
        <>
            <div className='testimonials'>
                <Box className="testimonial">
                    <h3>Rating</h3>
                    <img src={"/Images/Pasta.jpg"} alt="userpic" width={"150px"}/>
                    <Rating
                        name="text-feedback"
                        value="5"
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <Box sx={{ ml: 2 }}>{labels["5"]}</Box>
                </Box>
                <Box className="testimonial">
                    <h3>Rating</h3>
                    <img src={"/Images/Pasta.jpg"} alt="userpic" width={"150px"}/>
                    <Rating
                        name="text-feedback"
                        value="3.5"
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <Box sx={{ ml: 2 }}>{labels["3.5"]}</Box>
                </Box>
                <Box className="testimonial">
                    <h3>Rating</h3>
                    <img src={"/Images/Pasta.jpg"} alt="userpic" width={"150px"}/>
                    <Rating
                        name="text-feedback"
                        value="4"
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <Box sx={{ ml: 2 }}>{labels["4"]}</Box>
                </Box>
                <Box className="testimonial">
                    <h3>Rating</h3>
                    <img src={"/Images/Pasta.jpg"} alt="userpic" width={"150px"}/>
                    <Rating
                        name="text-feedback"
                        value="4.5"
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <Box sx={{ ml: 2 }}>{labels["4.5"]}</Box>
                </Box>
            </div>
        </>
    );
}