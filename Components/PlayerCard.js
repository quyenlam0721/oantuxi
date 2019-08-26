import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';

function PLayerCard(props) {

    return (
        <View style={styles.Card}>
            <Text style={styles.playerName}>{props.playerName}</Text>
            <Image
                source={{ uri: props.choices.uri}}
                resizeMode="contain"
                style={styles.choiceImage}
            />
            <Text style={styles.playerName}>Chose: {props.choices.name} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Card: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    choiceImage: {
        height: 150,
        width: 150,
    },
    playerName:{
        fontSize:20,
        fontWeight:'300',
    }
});

export default PLayerCard;