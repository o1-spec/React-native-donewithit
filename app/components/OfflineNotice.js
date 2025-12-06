import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice() {
  const netInfo = useNetInfo();
  if (netInfo.isConnected !== false) return null;

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight,
    left: 0,
    right: 0,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
