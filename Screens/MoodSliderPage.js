import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

export default class MoodSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Image
        source={require("../assets/I am feeling image.jpg")}
        style={styles.container}
      >
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <Swiper>
            <View style={styles.slide}>
              <Image
                source={require("../assets/Happy.png")}
                style={styles.image}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  alert("you clicked me");
                }}
              >
                <Image
                  source={require("../assets/Joyful2.jpg")}
                  style={styles.titles}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.slide}>
              <Image
                source={require("../assets/Sad.png")}
                style={styles.image}
              />
            </View>

            <View style={styles.slide}>
              <Image
                source={require("../assets/Down.png")}
                style={styles.image}
              />
            </View>
          </Swiper>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    paddingTop: 40,
    width: width,
    height: height / 2,
    justifyContent: "center",
    top: 70,
  },

  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  titles: {
    width: width / 2,
    height: height / 5,
  },

  button: {
    top: 75,
  },
});
