import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";
import React, { Component } from "react";

const { width, height } = Dimensions.get("window");

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Moods")}
        >
          <Image
            source={require("../assets/Welcome.jpg")}
            style={styles.picture}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFBFB",
  },
  picture: {
    width: width,
    height: height / 2,
    top: 125,
    right: 5,
  },
});
