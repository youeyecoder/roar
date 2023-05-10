import {Bike} from "../Components/Bike"
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const ContStyle = {marginTop: '3em', color: '#8585ad'}
let items = ['Bike 1','Bike 2','Bike 3','Bike 4','Bike 5'];

export const Bikes = () => {
    return <>
        <Typography style={ContStyle} m={2} spacing={2}>
            <h2>FIND THE RIGHT BIKE</h2>
            Get Comprehensive Information on Bike Prices, Specs, Reviews & More!
        </Typography>
        <Grid container spacing={3} style={ContStyle}>
                {items.map((letter, index) => {
                    return (
                        <Grid item>
                            <Bike /> 
                        </Grid>
                )
                })}
        </Grid>
    </>
}