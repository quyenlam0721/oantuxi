import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CHOICES } from './constain';

function ButtonGroup(props) {
    const choices = CHOICES;
    return choices.map(item => {
                    return (
                        <TouchableOpacity
                        key={item.name}
                        onPress={()=> props.onPressButton(item.name)}
                        style={styles.ButtonChoice}>
                            <Text style={styles.Text}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                })
            }

const styles = StyleSheet.create({
    ButtonChoice:{
        width:150,
        marginVertical:15,
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:15,
        backgroundColor:'gray',
    },
    Text:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'300',
        color: 'white',
    }
});

export default ButtonGroup;