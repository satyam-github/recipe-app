import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = props => {
    return <Text>{props.children}</Text>
}

const styles = StyleSheet.create({
    textContainer: {
        fontFamily: 'open-sans'
    }
})

export default BodyText;