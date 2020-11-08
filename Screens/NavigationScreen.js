import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Exercise_1 from "./Exercise_1/Exercise";
import Exercise_2 from "./Exercise_2/Exercise";
import Exercise_3 from "./Exercise_3/Exercise";
import Exercise_4 from "./Exercise_4/Exercise";
import Exercise_5 from "./Exercise_5/Exercise";

//messages that will be displayed at the top on the screen in the topContainer
const intro_messages = {
  Joyful:
    "“When you are joyful, when you say yes to life and have fun and project positivity all around you, you become a sun in the center of every constellation, and people want to be near you.” ― Shannon L. Alder",
  Dejected:
    "“We are sometimes dragged into a pit of unhappiness by someone else’s opinion that we do not look happy.” ― Mokokoma Mokhonoana",
  Serene:
    "“Serenity is knowing that your worst shot is still pretty good.” -Unknown",
  Aggrieved:
    'For every minute you remain angry, you give up sixty seconds of peace of mind" -Ralph Waldo Emerson',
  Apprehensive:
    "“Confidence is what we get when we take fear, face it and replace it.” ― Tim Fargo",
};

export default class NavigationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { state } = this.props.navigation;
    return (
      <View style={styles.containter}>
        <Text style={styles.topText}>
          {" "}
          {intro_messages[state.params.mood]}{" "}
        </Text>
        <Text style={styles.bottomText}>
          Click an Activity Below to Get Started!
        </Text>
        {display_mood(state.params.mood)}
      </View>
    );
  }
}

const Stack = createStackNavigator();

//fuction takes mood string, and returns the fuction with the corresponding JSX code
function display_mood(mood) {
  switch (mood) {
    case "Joyful":
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="nav" component={Joyful} />
            <Stack.Screen name="Exercise_1" component={Exercise_1} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    case "Dejected":
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="nav" component={Dejected} />
            <Stack.Screen name="Exercise_1" component={Exercise_2} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    case "Serene":
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="nav" component={Serene} />
            <Stack.Screen name="Exercise_1" component={Exercise_4} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    case "Aggrieved":
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="nav" component={Aggrieved} />
            <Stack.Screen name="Exercise_1" component={Exercise_3} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    case "Apprehensive":
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="nav" component={Apprehensive} />
            <Stack.Screen name="Exercise_1" component={Exercise_5} />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }
}

//bottomContainer gets filled by one of these compontents with the activities and links to the pages to the respective moods
function Joyful(props) {
  return (
    <View>
      <Button
        color="#a955ee"
        title="Promoting Happiness"
        onPress={() => props.navigation.navigate("Exercise_1")}
      />
      <Button color="#a955ee" title="Activity #2" />
      <Button color="#a955ee" title="Activity #3" />
    </View>
  );
}
function Dejected(props) {
  return (
    <View>
      <Button
        color="#a955ee"
        title="Recognizing Sadness"
        onPress={() => props.navigation.navigate("Exercise_1")}
      />
      <Button color="#a955ee" title="Activity #2" />
      <Button color="#a955ee" title="Activity #3" />
    </View>
  );
}
function Serene(props) {
  return (
    <View>
      <Button
        color="#a955ee"
        title="Embracing Calm"
        onPress={() => props.navigation.navigate("Exercise_1")}
      />
      <Button color="#a955ee" title="Activity #2" />
      <Button color="#a955ee" title="Activity #3" />
    </View>
  );
}
function Aggrieved(props) {
  return (
    <View>
      <Button
        color="#a955ee"
        title="Accepting Anger"
        onPress={() => props.navigation.navigate("Exercise_1")}
      />
      <Button color="#a955ee" title="Activity #2" />
      <Button color="#a955ee" title="Activity #3" />
    </View>
  );
}
function Apprehensive(props) {
  return (
    <View>
      <Button
        color="#a955ee"
        title="Calming Apprehension"
        onPress={() => props.navigation.navigate("Exercise_1")}
      />
      <Button color="#a955ee" title="Activity #2" />
      <Button color="#a955ee" title="Activity #3" />
    </View>
  );
}

//styles
const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: "#eecc55",
  },
  topContainer: {
    backgroundColor: "#eecc55",
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  bottomContainer: {
    backgroundColor: "#a955ee",
    flex: 5,
    justifyContent: "flex-start",
  },
  topText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  bottomText: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
    marginTop: 50,
  },
});
