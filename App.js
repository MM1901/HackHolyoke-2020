import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MoodSliderPage from "./Screens/MoodSliderPage.js";
import HomeScreen from "./Screens/HomeScreen.js";
import NavigationScreen from "./Screens/NavigationScreen.js";

const AppNavigator = createStackNavigator(
  {
    Home: {
      navigationOptions: {
        header: null
      },
      screen: HomeScreen
    },
    Moods: {
      navigationOptions: {
        header: null
      },
      screen: MoodSliderPage
    },
    MainMenu: {
      navigationOptions: {
        header: null
      },
      screen: NavigationScreen
    },
  },
  {
    initialRouteName: "Home",

  }
);

const App = createAppContainer(AppNavigator);

export default App;
