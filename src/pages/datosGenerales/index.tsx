import { Button, Container } from "@mui/material"
import React from "react";
import { trabajador } from "../../api/trabajador";
import { HeaderComponent } from "../../components"

export const DatosGenerales: React.FC<{}> = () => {
    React.useEffect(() => {
        trabajador.getAll({}).then((r)=>{
            console.log(r.data.results)
        }).catch((e)=>{
            console.log(e);
        })
    }, [])
    return(
        <Container maxWidth="xl">
            <HeaderComponent title="Hola mundo" description="hola mundo bienvenido a Agricola Chapi" element={<Button fullWidth variant="contained">hola mundo</Button>}/>

            
        </Container>
    );
};