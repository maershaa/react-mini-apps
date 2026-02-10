import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import App from './App.jsx';
import { theme } from '@/styles/theme.js';
import GlobalStyles from './styles/global';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);

// const Card = styled.div`
// background-color: ${({ theme }) => theme.colors.background.gray};
// color: ${({ theme }) => theme.colors.text.primary};
// `;
