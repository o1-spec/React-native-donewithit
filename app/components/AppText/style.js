const { StyleSheet, Platform } = require("react-native");

 const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily:Platform.OS === 'android' ? 'Roboto' : 'Avenir', 
    }
 })

 export default styles;