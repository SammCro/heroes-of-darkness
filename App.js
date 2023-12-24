import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import HeroList from "./src/screens/HeroList";
import AddHero from "./src/screens/AddHero";
import Heros from "./src/screens/Heros";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    HeroList: HeroList,
    AddHero: AddHero,
    Heros: Heros
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
