import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import MenuTab from './MenuTab';

const App: React.FC = () => {
  const [amount, setAmount] = useState([
    { type: 'money', amt: 0, value: 0, isAdded: false },
    { type: 'silver', amt: 0, value: 0, isAdded: false },
    { type: 'gold', amt: 0, value: 0, isAdded: false, carat: '' },
    { type: 'stocks', amt: 0, value: 0, isAdded: false },
    { type: 'mutual', amt: 0, value: 0, isAdded: false },
  ]);
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 1 }}>
        <MenuTab handleAmount={setAmount} amount={amount} />
      </Box>
    </Container>
  );
};

export default App;
