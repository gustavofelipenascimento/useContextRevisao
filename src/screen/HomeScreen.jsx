import { Surface, Text } from "react-native-paper";
import style from "../config/style";
import TradeTheme from "../components/TradeTheme";

export default function HomeScreen() {
  return (
    <Surface style={style.container}>
      <Text>HomeScreen</Text>
      <TradeTheme />
    </Surface>
  );
}
