import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AxionPage from './pages/AxionPage';

function App() {
  return (
    <ThemeProvider>
      <AxionPage />
    </ThemeProvider>
  );
}

export default App;