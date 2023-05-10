import {Car} from "../Components/Car"
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const ContStyle = {marginTop: '3em', color: '#8585ad'}
let cars = [
        {
            title: "Maruti Fronx",
            subtitle: "Designed to plug the gap between the Baleno and Brezza, the new Fronx has quite a lot going for it",
            brand: "Maruti",
            img: "maruti.webp",
            price: "Rs. 8.9 Lac"
        },
        {
            title: "Tata Nexon",
            subtitle: "The stand-out exterior changes make it much more handsome, the cabin is still comfortable",
            brand: "Tata",
            img: "tata.webp",
            price: "Rs. 7.8 Lac"
        },
        {
            title: "BMW M5",
            subtitle: "This iteration of the BMW M5 is an icon among sports car",
            brand: "BMW",
            img: "bmw.webp",
            price: "Rs. 1.8 Cr"
        },
        {
            title: "Mahindra KUV100 NXT",
            subtitle: "The KUV100 NXT is for those who want a spacious cabin with an SUV stance, but at the same time, also appreciate the footprint of a compact hatchback",
            brand: "Mahindra",
            img: "mahindra.webp",
            price: "Rs. 7.9 Lac"
        },
        {
            title: "Volkswagen Taigun",
            subtitle: "The 2023 Taigun is a compact SUV that embodies Volkswagen in every possible manner, right from the way it drives, to the way it feels and appears.",
            brand: "Volkswagen",
            img: "volkswagen.webp",
            price: "Rs. 21.9 Lac"
        }
    ];

export const Cars = () => {
    return <>
        <Typography style={ContStyle} m={2} spacing={2}>
            <h2>FIND THE RIGHT CAR</h2>
            Get Comprehensive Information on Car Prices, Specs, Reviews & More!
        </Typography>
        <Grid container spacing={3} style={ContStyle}>
                {cars.map((car, index) => {
                    return (
                        <Grid item>
                            <Car car={car}/> 
                        </Grid>
                )
                })}
        </Grid>
    </>
}