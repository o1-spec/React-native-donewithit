// import {
//   Dimensions,
//   StyleSheet,
//   SafeAreaView,
//   Button,
//   Platform,
//   StatusBar,
//   View,
// } from "react-native";
// import { useDeviceOrientation } from "@react-native-community/hooks";

// export default function App() {
//   const {landscape} = useDeviceOrientation()
//   return (
//     <SafeAreaView style={styles.container}>
//       <Button title="Press Me" onPress={() => Alert.alert("Hello World")} />
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: '100%',
//           height: landscape ? '100%' : '30%',
//           marginTop: 20,
//         }}
//       ></View>
//     </SafeAreaView>
//   );
// }
// // const containerStyle = {
// //   backgroundColor: "blue",
// // };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // justifyContent: "center",
//     // alignItems: "center",
//   },

{
  /* <View
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }} 
    >
      <View
        style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          top: 20,
          left: 100,
          position: "absolute",
        }}
      />
      <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
    </View> */
  // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  {
    /* <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 50,
          // borderTopWidth: 20,
          // borderTopLeftRadius: 40,
        }}
      ></View> */
  }
  {
    /* <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          shadowColor: "grey",
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.8,
          shadowRadius: 10,
          elevation: 10, //Android doesnt give us much control mover our shadows, we cant control theior color, offset, opacity, or radius and can only apply an elevation
        }}
      ></View> */
  }
  {
    /* <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          padding: 20,
          paddingHorizontal: 10,
          paddingLeft: 30,
        }} 
      >
        <View style={{ backgroundColor: "gold", width: 50, height: 50 }}></View>
      </View>
        <View style={{ backgroundColor: "tomato", width: 100, height: 100 , margin: 20}}></View> */
  }
  {
    /* <AppText>I love React Native</AppText> */
  }
  {
    /* <MaterialCommunityIcons name="email" size={100} color="tomato" /> */
  }
  {
    /* <AppButton title="Login" onPress={() => console.log('Pressed')}/>
    </View> */
  }
}
// });

// import React, { useState } from "react";
// import { Switch, Text, View } from "react-native";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AppText from "./app/components/AppText";
// import AppButton from "./app/components/AppButton";
// import Card from "./app/components/Card";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
// import {
//   GestureHandlerRootView,
//   TextInput,
// } from "react-native-gesture-handler";
// import AccountScreen from "./app/screens/AccountScreen";
// import ListingsScreen from "./app/screens/ListingsScreen";
// import Screen from "./app/components/Screen";
// import AppTextInput from "./app/components/AppTextInput";
// import AppPicker from "./app/components/AppPicker";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ];  

// export default function App() {
//   const [firstName, setFirstName] = useState("");
//   const [isNew, setIsNew] = useState(true);
//   const [category, setCategory] = useState();
//   return (
//     // <View
//     //   style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}
//     // >
//     //   <Card title="Red Jacket for Sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
//     // </View>
//     // <GestureHandlerRootView style={{ flex: 1 }}>
//     //   <ListingsScreen />
//     // </GestureHandlerRootView>
//     <GestureHandlerRootView>
//       <Screen>
//         {/* <Text>{firstName}</Text>
//         <TextInput
//         secureTextEntry
//           keyboardType="numeric"
//           onChangeText={(text) => setFirstName(text)}
//           placeholder="First Name"
//           style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
//         /> */}
//         {/* <AppTextInput placeholder="Username" icon='email ' /> */}
//         {/* <Switch
//           value={isNew}
//           onValueChange={(newValue) => setIsNew(newValue)}
//         /> */}
//         <AppPicker selectedItem={category} onSelectItem={item => setCategory(item)} items={categories} placeholder="Category" icon="apps" />
//         <AppPicker placeholder="Email" icon="email" />
//       </Screen>
//     </GestureHandlerRootView>
//   );
// }


import React from 'react';
import LoginScreen from './app/screens/LoginScreen';

function App(props) {
  return (
    <LoginScreen/>
  );
}

export default App;