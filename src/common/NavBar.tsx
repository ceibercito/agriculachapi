import React from "react";
import {Box, AppBar, Toolbar, Container, Grid, Button, Typography, Stack} from "@mui/material";
import { useNavigate } from "react-router";

export const NavBar: React.FC<{}> = () => {
    const navigate = useNavigate()
    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction={"row"} justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography>Agricola Chapi</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                <Button variant="contained" onClick={()=> navigate("login")}>Login</Button>        
                                <Button variant="outlined">Register</Button>
                                </Stack>
                                      
                                
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
} 