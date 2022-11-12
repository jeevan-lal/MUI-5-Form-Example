import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
// Views
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import HomePage from '../src/Views/HomePage';

export default function App() {

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}></Box>
      <Footer></Footer>
    </Container>
  );
}
