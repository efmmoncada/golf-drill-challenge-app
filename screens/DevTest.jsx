import React from "react";
import { View, StyleSheet, Text } from "react-native";


export default function DevTest() {

    return (
        <View style={styles.container}>
            <Text>Test Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})