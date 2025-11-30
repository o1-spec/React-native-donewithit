import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,         
    left: 0,          
    right: 0,         
    bottom: 0,        
    backgroundColor: "white", 
    opacity: 0.8,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 350,
    height: 350,
  },
});

export default ActivityIndicator;