import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

export default class MoodSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require("../assets/Background.jpg")}
        style={styles.container}
      >
        <StatusBar hidden={true} />
        <Swiper>
          <View style={styles.slide}>
            <Text style={styles.texts}> I am feeling...</Text>
            <Image
              source={require("../assets/Happy.png")}
              style={styles.image}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigate("MainMenu", { mood: "Joyful" });
              }}
            >
              <Image
                source={require("../assets/Joyful2.jpg")}
                style={styles.titles}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.slide}>
            <Text style={styles.texts}> I am feeling...</Text>
            <Image
              source={require("../assets/DejectedImg.jpg")}
              style={styles.image}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigate("MainMenu", { mood: "Dejected" });
              }}
            >
              <Image
                source={require("../assets/Dejected.jpg")}
                style={styles.titles1}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.slide}>
            <Text style={styles.texts}> I am feeling...</Text>
            <Image
              source={require("../assets/SereneImg.jpg")}
              style={styles.image}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigate("MainMenu", { mood: "Serene" });
              }}
            >
              <Image
                source={require("../assets/Serene.jpg")}
                style={styles.titles1}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.slide}>
            <Text style={styles.texts}> I am feeling...</Text>
            <Image
              source={require("../assets/ApprehensiveImg.jpeg")}
              style={styles.image}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigate("MainMenu", { mood: "Apprehensive" });
              }}
            >
              <Image
                source={require("../assets/Apprehensive.jpg")}
                style={styles.titles2}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.slide}>
            <Text style={styles.texts}> I am feeling...</Text>
            <Image
              source={require("../assets/AggrievedImg.jpg")}
              style={styles.image}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigate("MainMenu", { mood: "Aggrieved" });
              }}
            >
              <Image
                source={require("../assets/Aggrieved.jpg")}
                style={styles.titles2}
              />
            </TouchableOpacity>
          </View>
        </Swiper>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    paddingTop: 30,
    width: width,
    height: height / 2,
    justifyContent: "center",
    top: 30,
  },

  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  titles: {
    width: width / 2,
    height: height / 8,
    backgroundColor: "#FAE2E2",
    borderRadius: 20,
  },

  titles1: {
    width: width / 2,
    height: height / 8,
    borderRadius: 20,
  },

  titles2: {
    width: width,
    height: height / 8,
    borderRadius: 20,
  },

  button: {
    top: 40,
  },

  texts: {
    fontStyle: "italic",
    fontSize: 48,
    marginTop: 0,
    marginLeft: -70,
  },
});
