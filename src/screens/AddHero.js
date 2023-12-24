import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const AddHero = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input_text} placeholder="Name"></TextInput>
            <TextInput style={styles.input_text} placeholder="Age"></TextInput>
            <TouchableOpacity style={styles.add_button}>
                <Text>
                    Add User
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            alignItems: "center",
        },
        input_text: {
            marginVertical: 10,
            backgroundColor: "#e5e0e0",
            width: 200,
            textAlign: "center",
        },
        add_button: {
            backgroundColor: "#6fb532",
            padding: 15,
            borderRadius: 20
        }
    }
)

export default AddHero;