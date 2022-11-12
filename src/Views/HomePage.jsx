import * as React from 'react';
import { Link } from "react-router-dom";
// MUI
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <Container component="main" maxWidth="sm">
      <h1>React MUI - Form Components</h1>
      <Link to={`example/1`}>Example - 1 (Basic Form Components)</Link>
    </Container>
  );
}
