import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Specials() {
    return (
        <>
            <div className='specials'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/Images/Salad.jpg"
                        title="Greek salad"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Greek Salad
                        </Typography>
                        <Typography variant="caption" color='warning' gutterBottom sx={{ display: 'block' }}>
                            $5.0
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Info about a greek salad
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Order a delivery</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/Images/Pasta.jpg"
                        title="Pasta"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pasta
                        </Typography>
                        <Typography variant="caption" color='warning' gutterBottom sx={{ display: 'block' }}>
                            $4.50
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Info about a pasta
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Order a delivery</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/Images/Bruchata.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bruchata
                        </Typography>
                        <Typography variant="caption" color='warning' gutterBottom sx={{ display: 'block' }}>
                            $2.99
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Info about a bruchata
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Order a delivery</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
}