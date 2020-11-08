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

function NavigationScreen(props) {
  return (
    <View style={styles.containter}>
      <View style={styles.topContainer}>
        <Text style={styles.topText}> {intro_messages[props.mood]} </Text>
        <Text style={styles.bottomText}>
          Click an Activity Below to Get Started!
        </Text>
      </View>
      <View style={styles.bottomContainer}>{display_mood(props.mood)}</View>
    </View>
  );
}
//fuction takes mood string, and returns the fuction with the corresponding JSX code
function display_mood(mood) {
  switch (mood) {
    case "Joyful":
      return <Joyful />;
    case "Dejected":
      return <Dejected />;
    case "Serene":
      return <Serene />;
    case "Aggrieved":
      return <Aggrieved />;
    case "Apprehensive":
      return <Apprehensive />;
  }
}
//bottomContainer gets filled by one of these compontents with the activities and links to the pages to the respective moods
function Joyful() {
  return (
    <View>
      <Button color="#a955ee" title="Activity #1" />
      <Button color="#a955ee" title="Activity #2" />
      <Button color="#a955ee" title="Activity #3" />
    </View>
  );
}
function Dejected() {
  return (
    <View>
      <Button color="#a955ee" title="Activity #1" />
      <Button color="#a955ee" title="Activity #2" />
      <Button color="#a955ee" title="Activity #3" />
    </View>
  );
}
function Serene() {
  return (
    <View>
      <Button color="#a955ee" title="Activity #1" />
      <Button color="#a955ee" title="Activity #2" />
      <Button color="#a955ee" title="Activity #3" />
    </View>
  );
}
function Aggrieved() {
  return (
    <View>
      <Button color="#a955ee" title="Activity #1" />
      <Button color="#a955ee" title="Activity #2" />
      <Button color="#a955ee" title="Activity #3" />
    </View>
  );
}
function Apprehensive() {
  return (
    <View>
      <Button color="#a955ee" title="Activity #1" />
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

export default NavigationScreen;
