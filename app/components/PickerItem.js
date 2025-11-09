import React from "react";
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import AppText from "./AppText";

function PickerItem({ item, onPress  }) {
  return (
    <TouchableOpacity onPress={onPress}>
        <AppText style={styles.text}>{item.label}</AppText>
      {/* <View  style={styles.item}>
        <AppText>{label}</AppText>
      </View> */}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
})

export default PickerItem;
