import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 70,
    },
});

const HeroList = () => {
    const friends = [
        { key: 'Devin', age: 31 },
        { key: 'Dan', age: 31 },
        { key: 'Dominic', age: 31 },
        { key: 'Jackson', age: 31 },
        { key: 'James', age: 31 },
        { key: 'Joel', age: 31 },
        { key: 'John', age: 31 },
        { key: 'Jillian', age: 31 },
        { key: 'Jimmy', age: 31 },
        { key: 'İlkay Samet', age: 31 },
    ]
    return (
        <View style={styles.container}>
            <FlatList
                // horizontal = {true}
                // keyExtractor = {friend => friend.name}
                showsVerticalScrollIndicator={true}
                data={friends}
                renderItem={(element) => {
                    return (
                        <Text style={styles.item} key={element.index}>
                            {element.item.key} - {element.item.age}
                        </Text>
                    )
                }}
            />
        </View>
    );
};

export default HeroList;