import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Platform, ImageBackground } from 'react-native';
import BodyText from './BodyText';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity
            onPress={props.onSelectMealItem}>
            <View>
            <View style={{...styles.mealContainer, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                </View>
            </ImageBackground>
            </View>
            <View style={{...styles.mealContainer, ...styles.mealDetail}}>
                <BodyText>{props.duration} min</BodyText>
                <BodyText>{props.complexity}</BodyText>
            </View>
            </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10
    },
    mealContainer: {
        flexDirection: 'row'
    },  
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'   
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    }
});

export default MealItem;