import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import QA from "./components/QA";
import Accommodation from "./components/Accommondation";
import RSVP from "./components/RSPV";
import Navbar from "./components/NavBar";
import {Container, Grid, Paper} from "@mui/material";

const App = () => {
    return (
        <BrowserRouter>

            <Container>
                <Grid container spacing={3} sx={{marginTop: 2}}>
                    <Grid xs={12}>
                        <Paper elevation={3} sx={{padding: 3}}>
                            <Navbar/>
                            <Routes>
                                {/* Define the main page route */}
                                <Route path="/" element={<MainPage/>}/>
                                <Route path="/question-and-answers" element={<QA/>}/>
                                <Route path="/accommodation" element={<Accommodation/>}/>
                                <Route path="/rsvp" element={<RSVP/>}/>
                            </Routes>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </BrowserRouter>
    );
};

export default App;
