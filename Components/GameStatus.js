import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function GameStatus(props) {
    if (props.result == 'Victory!') {
        return <Text style={styles.textWin}>{props.result}</Text>;
    }
    else if (props.result == 'Defeat!') {
        return <Text style={styles.textLose}>{props.result}</Text>;
    }
    else {
        return <Text style={styles.textTie}>{props.result}</Text>;
    }
}

const styles = StyleSheet.create({
    textWin: {
        fontSize: 40,
        fontWeight: '300',
        color: 'green'
    },
    textLose: {
        fontSize: 40,
        fontWeight: '300',
        color: 'red'
    },
    textTie: {
        fontSize: 40,
        fontWeight: '300',
        color: 'brown'
    },
});


export default GameStatus;