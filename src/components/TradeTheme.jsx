import React, { useContext } from "react";
import { Button } from "react-native-paper";
import ThemeContext from "../contexts/ThemeContext";

export default function TradeTheme() {
  let { tTheme } = useContext(ThemeContext);
  return <Button onPress={tTheme}>Trocar Tema</Button>;
}

