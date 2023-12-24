import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Hero from '../components/Hero'

const Heros = () => {
    return (
        <ScrollView>
            <View>
                <Hero imageSrc={require('../assets/img/darth_vader.jpg')} imageName={"Darth Vader"} ></Hero>
                <Hero imageSrc={require('../assets/img/Fingolfin.png')} imageName={"Fingolfin"}></Hero>
                <Hero imageSrc={require('../assets/img/darth_vader.jpg')} imageName={"Darth Vader"} ></Hero>
                <Hero imageSrc={require('../assets/img/Fingolfin.png')} imageName={"Fingolfin"}></Hero>
                <Hero imageSrc={require('../assets/img/darth_vader.jpg')} imageName={"Darth Vader"} ></Hero>
                <Hero imageSrc={require('../assets/img/Fingolfin.png')} imageName={"Fingolfin"}></Hero>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create(
    {

    }
)

export default Heros;