import { createContext, useState } from "react";
import { DefaultTheme, MD3DarkTheme } from "react-native-paper";


// é esse cara que eu exporto 
// porque é ele o responsável por criar o contexto
// e o que é exportado é o contexto
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(DefaultTheme);

  function tradeTheme() {
    // Se o Theme atual estiver marcado como DefaultTheme 
    // então é hora de altera-lo para MD3DarkTheme
    // Mas se ele já é MD3DarkTheme então é hora de 
    // voltar para DefaultTheme
    setTheme(theme === DefaultTheme ? MD3DarkTheme : DefaultTheme);
  }
  return(
    <ThemeContext.Provider value={{ theme, tradeTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;