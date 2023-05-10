import {Bike} from "../Components/Bike"
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const ContStyle = {marginTop: '3em', color: '#8585ad'}
let bikes = [
        {
            title: "BMW S 1000 RR",
            subtitle: "SUPERBIKE OF SUPERLATIVES",
            brand: "BMW",
            img: "bmw.jpg",
            price: "Rs. 2.9 Cr"
        },
        {
            title: "Royal Enfield Hunter 350",
            subtitle: "Royal Enfield",
            brand: "Royal Enfield",
            img: "royalenfield.webp",
            price: "Rs. 2.9 Cr"
        },
        {
            title: "KTM 200 Duke",
            subtitle: "SUPERBIKE OF SUPERLATIVES",
            brand: "KTM",
            img: "ktm.webp",
            price: "Rs. 1.9 Cr"
        },
        {
            title: "Yamaha MT 15 V2",
            subtitle: "SUPERBIKE OF SUPERLATIVES",
            brand: "Yamaha",
            img: "yamaha.webp",
            price: "Rs. 0.9 Cr"
        },
        {
            title: "Triumph Rocket 3",
            subtitle: "SUPERBIKE OF SUPERLATIVES",
            brand: "Triumph",
            img: "triumph.webp",
            price: "Rs. 1.9 Cr"
        }
    ];

export const Bikes = () => {
    return <>
        <Typography style={ContStyle} m={2} spacing={2}>
            <h2>FIND THE RIGHT BIKE</h2>
            Get Comprehensive Information on Bike Prices, Specs, Reviews & More!
        </Typography>
        <Grid container spacing={3} style={ContStyle}>
                {bikes.map((bike, index) => {
                    return (
                        <Grid item>
                            <Bike bike={bike}/> 
                        </Grid>
                )
                })}
        </Grid>
    </>
}