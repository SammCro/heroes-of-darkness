import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Hero = ({ imageSrc, imageName }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageSrc}></Image>
            <View style={styles.text_container}>
                <Text style={styles.image_text}>{imageName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        image: {
            width: 150,
            height: 150,
            borderRadius: 10
        },

        container: {
            alignItems: "center",
            flexDirection: 'row',
            padding: 10,
            margin: 15,
            borderStyle: 'solid',
            borderRadius: 10,
            borderWidth: 1,
        },

        image_text: {
            fontSize: 15,
            fontWeight: 'bold'
        },

        text_container: {
            flex: 1,
            marginLeft: 20
        }
    }
)


export default Hero;