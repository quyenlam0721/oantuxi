import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function RoundCount(props) {
    return (
        <View style={styles.RoundCount}>
            <View style={styles.total}>
                <Text style={{ fontSize: 25, fontWeight: '200', color: 'black' }}>Total rounds: {props.totalRound} </Text>
            </View>
            <View style={styles.count}>
                <Text style={{ fontSize: 15, fontWeight: '200', color: 'green' }}>Win: {props.winRound} ({props.percentWin}%) </Text>
                <Text style={{ fontSize: 15, fontWeight: '200', color: 'red' }}>Lost: {props.loseRound} ({props.percentLose}%) </Text>
                <Text style={{ fontSize: 15, fontWeight: '200', color: 'brown' }}>Tie: {props.tieRound} ({props.percentTie}%) </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    RoundCount: {
        flex: 1,
        flexDirection: 'column',
    },
    count: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    total: {
        flexDirection: 'row',
        justifyContent: "center",
    }
});


export default RoundCount;