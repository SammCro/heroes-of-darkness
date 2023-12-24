import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const goToHeroList = (navigate) => {
  navigate('UserList')
}

const goToAddHero = (navigate) => {
  navigate("AddUser")
}

const goToHeros = (navigate) => {
  navigate("Heros")
}

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello there !</Text>
      <TouchableOpacity style={styles.route_button} onPress={() => { goToHeroList(navigate) }}><Text>Go to the User List!</Text></TouchableOpacity>
      <TouchableOpacity style={styles.route_button} onPress={() => { goToAddHero(navigate) }}><Text>Go to the Add User!</Text></TouchableOpacity>
      <TouchableOpacity style={styles.route_button} onPress={() => { goToHeros(navigate) }}><Text>Go to the Heros!</Text></TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    alignItems: "center"
  },
  route_button: {
    marginVertical: 30,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 20
  }
});

export default HomeScreen;
