import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const Dtic = () => {
    const handleOpenWebPage = async () => {
        await WebBrowser.openBrowserAsync('https://uce-dtic.blogspot.com');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>UCE-DTIC</Text>
            <Image
                source={{ uri: 'https://source.unsplash.com/weekly?tech' }}
                style={styles.image}
            />
            <Button
                title="Abrir Web"
                onPress={handleOpenWebPage}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 10,
    },
    button: {
        borderRadius: 10,
    },
});

export default Dtic;
