import React from "react";
import { Container, Button, Grid, Paper, Box, Typography, TextField } from '@mui/material';
import { useNotification } from '../../context/notification.context';

type HomeType = {
    dni: string,
    fecha: string,
};

export const HomePage:React.FC<{}> = () => {
    const {getError} = useNotification();
    const handleClick = () =>{
        getError("Hola") 
    };
    
    const [HomeData, setHomeData] = React.useState<HomeType>({
        dni: "",
        fecha: "",
    });

    const dataHome = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setHomeData({...HomeData, [e.target.name]: e.target.value});
    };

    const HandleSubmit = (e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault();
        console.log(HomeData);
    }

    return (
        <Container maxWidth="sm">
            <Grid container direction ="column" alignItems="left" justifyContent="center" sx={{minHeight:"100vh"}}>
               <Grid item gridColumn="auto">
                <Paper sx={{padding:"1.2em", borderRadius:"0.5em"}}>
                    <Typography sx={{mt:1, mb:1}} variant="h5">Bienvenidos al sistema de Utilidades de Agricola Chapi</Typography>
                    <Box component="form" onSubmit={HandleSubmit}>
                        <TextField name="dni" margin="normal" fullWidth label="DNI" sx={{mt:2, mb:1.5}} onChange={dataHome}/>
                        <TextField name="fecha" margin="normal" type="date" fullWidth label="FECHA DE NACIEMIENTO" sx={{mt:1.5, mb:1.5}} onChange={dataHome}/>                        
                        <Button onClick={handleClick} fullWidth type="submit" variant="contained" sx={{mt:1.5, mb:3}}>Ingresar</Button>
                    </Box>
                </Paper>
               </Grid> 
            </Grid>
        </Container>
    )
}