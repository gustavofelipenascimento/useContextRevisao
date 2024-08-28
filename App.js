import React, { useContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import ThemeContext, { ThemeProvider } from './src/contexts/ThemeContext';
import HomeScreen from './src/screen/HomeScreen';


export default function App() {
  let theme = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <PaperProvider theme={theme}>
        <HomeScreen />
      </PaperProvider>
    </ThemeProvider>
  );
}

