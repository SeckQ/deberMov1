import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const Blog = () => {
    const handleOpenWebPage = async () => {
        await WebBrowser.openBrowserAsync('https://uce-ing-informatica.blogspot.com');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Blog de Facultad de Ingenieria y Ciencias Aplicadas</Text>
            <Image
                source={{ uri: 'https://source.unsplash.com/weekly?blog' }}
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

export default Blog;
