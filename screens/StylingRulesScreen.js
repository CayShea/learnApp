
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';

const StylingRulesScreen = () => {

    const [ noText, noTextShow ] = useState(false);
    const [ yesText, yesTextShow ] = useState(false);

    return (
        <View>
            <View style={styles.section}>
                <Text>1. BOX OBJECT: Apply BOX OBJECT Model Rules</Text>
                <Text>2. POSITION: Is POSITION absolute?</Text>
                <View style={styles.viewStyleFlexDirection}>
                    <Button title='No' onPress={() => noTextShow(!noText)}/>
                    <Button title='Yes'onPress={() => yesTextShow(!yesText)}/>
                </View>
                { noText ? <Text>3. FLEX BOX: Apply all flex box rules- considering siblings</Text> : null }
                { noText ? <Text>4. Place element inside parent</Text> : null }
                { noText ? <Text>5. POSITION: Apply top, left, right, bottom</Text> : null }
                { yesText ? <Text>3. FLEX BOX: Apply some Flex Box Rules- ignore all siblings.</Text> : null }
                { yesText ? <Text>4. POSITION: Apply top, left, right, bottom</Text> : null }
            </View>
        </View>
    )
};

StylingRulesScreen.navigationOptions = {
    title: 'Styling Rules Guide',
  };

const styles = StyleSheet.create({
    viewStyleFlexDirection: {
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
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

export default StylingRulesScreen;