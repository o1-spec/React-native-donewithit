// // // import {
// // //   Dimensions,
// // //   StyleSheet,
// // //   SafeAreaView,
// // //   Button,
// // //   Platform,
// // //   StatusBar,
// // //   View,
// // // } from "react-native";
// // // import { useDeviceOrientation } from "@react-native-community/hooks";

// // // export default function App() {
// // //   const {landscape} = useDeviceOrientation()
// // //   return (
// // //     <SafeAreaView style={styles.container}>
// // //       <Button title="Press Me" onPress={() => Alert.alert("Hello World")} />
// // //       <View
// // //         style={{
// // //           backgroundColor: "dodgerblue",
// // //           width: '100%',
// // //           height: landscape ? '100%' : '30%',
// // //           marginTop: 20,
// // //         }}
// // //       ></View>
// // //     </SafeAreaView>
// // //   );
// // // }
// // // // const containerStyle = {
// // // //   backgroundColor: "blue",
// // // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: "#fff",
// // //     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
// // //     // justifyContent: "center",
// // //     // alignItems: "center",
// // //   },

// // {
// //   /* <View
// //       style={{
// //         backgroundColor: "white",
// //         flex: 1,
// //         flexDirection: "row",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         flexWrap: "wrap",
// //       }}
// //     >
// //       <View
// //         style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }}
// //       />
// //       <View
// //         style={{
// //           backgroundColor: "gold",
// //           width: 100,
// //           height: 100,
// //           top: 20,
// //           left: 100,
// //           position: "absolute",
// //         }}
// //       />
// //       <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
// //     </View> */
// //   // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //   {
// //     /* <View
// //         style={{
// //           backgroundColor: "dodgerblue",
// //           width: 100,
// //           height: 100,
// //           borderWidth: 10,
// //           borderColor: "royalblue",
// //           borderRadius: 50,
// //           // borderTopWidth: 20,
// //           // borderTopLeftRadius: 40,
// //         }}
// //       ></View> */
// //   }
// //   {
// //     /* <View
// //         style={{
// //           backgroundColor: "dodgerblue",
// //           width: 100,
// //           height: 100,
// //           shadowColor: "grey",
// //           shadowOffset: { width: 0, height: 10 },
// //           shadowOpacity: 0.8,
// //           shadowRadius: 10,
// //           elevation: 10, //Android doesnt give us much control mover our shadows, we cant control theior color, offset, opacity, or radius and can only apply an elevation
// //         }}
// //       ></View> */
// //   }
// //   {
// //     /* <View
// //         style={{
// //           backgroundColor: "dodgerblue",
// //           width: 100,
// //           height: 100,
// //           padding: 20,
// //           paddingHorizontal: 10,
// //           paddingLeft: 30,
// //         }}
// //       >
// //         <View style={{ backgroundColor: "gold", width: 50, height: 50 }}></View>
// //       </View>
// //         <View style={{ backgroundColor: "tomato", width: 100, height: 100 , margin: 20}}></View> */
// //   }
// //   {
// //     /* <AppText>I love React Native</AppText> */
// //   }
// //   {
// //     /* <MaterialCommunityIcons name="email" size={100} color="tomato" /> */
// //   }
// //   {
// //     /* <AppButton title="Login" onPress={() => console.log('Pressed')}/>
// //     </View> */
// //   }
// // }
// // // });

// // // import React, { useState } from "react";
// // // import { Switch, Text, View } from "react-native";
// // // import WelcomeScreen from "./app/screens/WelcomeScreen";
// // // import ViewImageScreen from "./app/screens/ViewImageScreen";
// // // import { MaterialCommunityIcons } from "@expo/vector-icons";

// // // import AppText from "./app/components/AppText";
// // // import AppButton from "./app/components/AppButton";
// // // import Card from "./app/components/Card";
// // // import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// // // import MessagesScreen from "./app/screens/MessagesScreen";
// // // import {
// // //   GestureHandlerRootView,
// // //   TextInput,
// // // } from "react-native-gesture-handler";
// // // import AccountScreen from "./app/screens/AccountScreen";
// // // import ListingsScreen from "./app/screens/ListingsScreen";
// // // import Screen from "./app/components/Screen";
// // // import AppTextInput from "./app/components/AppTextInput";
// // // import AppPicker from "./app/components/AppPicker";

// // // const categories = [
// // //   { label: "Furniture", value: 1 },
// // //   { label: "Clothing", value: 2 },
// // //   { label: "Cameras", value: 3 },
// // // ];

// // // export default function App() {
// // //   const [firstName, setFirstName] = useState("");
// // //   const [isNew, setIsNew] = useState(true);
// // //   const [category, setCategory] = useState();
// // //   return (
// // //     // <View
// // //     //   style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}
// // //     // >
// // //     //   <Card title="Red Jacket for Sale" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
// // //     // </View>
// // //     // <GestureHandlerRootView style={{ flex: 1 }}>
// // //     //   <ListingsScreen />
// // //     // </GestureHandlerRootView>
// // //     <GestureHandlerRootView>
// // //       <Screen>
// // //         {/* <Text>{firstName}</Text>
// // //         <TextInput
// // //         secureTextEntry
// // //           keyboardType="numeric"
// // //           onChangeText={(text) => setFirstName(text)}
// // //           placeholder="First Name"
// // //           style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
// // //         /> */}
// // //         {/* <AppTextInput placeholder="Username" icon='email ' /> */}
// // //         {/* <Switch
// // //           value={isNew}
// // //           onValueChange={(newValue) => setIsNew(newValue)}
// // //         /> */}
// // //         <AppPicker selectedItem={category} onSelectItem={item => setCategory(item)} items={categories} placeholder="Category" icon="apps" />
// // //         <AppPicker placeholder="Email" icon="email" />
// // //       </Screen>
// // //     </GestureHandlerRootView>
// // //   );
// // // }

// // import React from "react";
// // import LoginScreen from "./app/screens/LoginScreen";
// // import RegisterScreen from "./app/screens/RegisterScreen";
// // import ListingEditScreen from "./app/screens/ListingEditScreen";
// // import WelcomeScreen from "./app/screens/WelcomeScreen";
// // import AccountScreen from "./app/screens/AccountScreen";
// // import { GestureHandlerRootView } from "react-native-gesture-handler";
// // import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// // import ListingsScreen from "./app/screens/ListingsScreen";
// // import MessagesScreen from "./app/screens/MessagesScreen";
// // import ViewImageScreen from "./app/screens/ViewImageScreen";

// // function App(props) {
// //   return (
// //     <GestureHandlerRootView>
// //       <MessagesScreen />
// //     </GestureHandlerRootView>
// //   );
// // }

// // export default App;
// import * as ImagePicker from "expo-image-picker";
// import { Alert, Button, Image } from "react-native";
// import React, { useEffect, useState } from "react";
// import Screen from "./app/components/Screen";
// import * as Permissions from "expo-permissions";
// import ImageInput from "./app/components/ImageInput";
// import ImageInputList from "./app/components/ImageInputList";

// function App() {
//   // const requestPermission = async () => {
//   //   const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//   //   if (status !== 'granted') {
//   //     Alert.alert(
//   //       "Permissi on Required",
//   //       "You need to enable permission to access the photo library."
//   //     );
//   //   }
//   // };

//   // useEffect(() => {
//   //   requestPermission();
//   // }, []);
//   const [imageUris, setImageUris] = useState([]);

//   const handleAdd = uri => {
//     setImageUris([...imageUris, uri]);
//   }

//   const handleRemove = uri => {
//     setImageUris(imageUris.filter(imageUri => imageUri !== uri));
//   }

//   return (
//     <Screen>
//       <ImageInputList
//         imageUris={imageUris}
//         onAddImage={handleAdd}
//         onRemoveImage={handleRemove}
//       />
//     </Screen>
//   );
// }

// export default App;

import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Screen from "./app/components/Screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>TweetDetails{route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "dodgerblue" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Tweets"
        component={Tweets}
        options={{
          headerStyle: { backgroundColor: "tomato" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
  );
};

const AccountNavigator = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
  // screenOptions={{
  //   tabBarActiveBackgroundColor: "tomato",
  //   tabBarActiveTintColor: "white",
  //   tabBarInactiveBackgroundColor: "lightgrey",
  //   tabBarInactiveTintColor: "black",
  // }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

function App(props) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
