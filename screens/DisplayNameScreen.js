
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';

const DisplayNameScreen = () => {

    const [ name, setName ] = useState(' ');
    const [ password, setPassword ] = useState('');


    return (
        <View>
            <View style={styles.section}>
                <Text style={styles.header}>Enter Name:</Text>
                <TextInput 
                    style={styles.text}
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={(text) => {setName(text)}}
                    // value={( name )}  
                />   
                <View style={styles.section}>
                    <Text>Your name is:  { name }</Text>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.header}>Enter Password:</Text>
                <TextInput 
                    style={styles.text}
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={(text) => {setPassword(text)}}
                    // value={( name )}  
                />   
                <View style={styles.section}>
                    {password.length < 6 ? <Text>Password must at least 6 characters!</Text> : null }
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        width: 300
    },
    header:{
        fontSize: 25
    },
    section:{
        margin: 20
    }
});

export default DisplayNameScreen;