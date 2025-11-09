import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

function CategoryPickerItem({  item, label, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.text}>{label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddinhHorizontal: 30,
    paddingVertical: 15,
    width: "33%",
    alignItems: "center",
    // borderRadius: 15,
    // justifyContent: "center",
    // overflow: "hidden",
    // width: 100,
    // height: 100,
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});


export default CategoryPickerItem;
