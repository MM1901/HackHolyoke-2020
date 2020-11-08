import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MoodSliderPage from "./Screens/MoodSliderPage.js";
import HomeScreen from "./Screens/HomeScreen.js";
import NavigationScreen from "./Screens/NavigationScreen.js";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Moods: MoodSliderPage,
    MainMenu: NavigationScreen,
  },
  {
    initialRouteName: "Home",
  }
);

const App = createAppContainer(AppNavigator);

export default App;
