import React from "react";
import { StyleSheet } from "react-native";

import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import Navigation from "./navigation";
import { Block } from "./components";

// import all used images
const images = [
  //require("./assets/rice.jpg"),
  require("./assets/wheat.jpg"),
  require("./assets/tomato.jpg"),
  require("./assets/plants_1.jpg"),
  require("./assets/explore_1.jpg"),
  require("./assets/avatar.jpg"),
  require("./assets/back.png")

];

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  handleResourcesAsync = async () => {

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }

   /* return (
      <Block white>
        <Navigation />
      </Block>
    );*/ 
  }
}

const styles = StyleSheet.create({});