import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import CustomColorPiece from '../components/CustomColor';

const CustomColorScreen = () => {
    // pass props here for each components 'color'
    //change state here of numbers increasing/decreasing
    // Pass a 'callback function' down to children so they can edit the state/values

    //variable for incrementing color
    const COLOR_INCREMENT = 10;

    //Setting state here:
    const [ red, setRed ] = useState(0);
    const [ green, setGreen ] = useState(0);
    const [ blue, setBlue ] = useState(0);

    // Make a helper function to validate that number does not go below 0 or above 255
    const setColor = ( color, change ) => {
        // 'color' === 'red', 'green' or 'blue'
        // 'change' = the amount changed
        //Using both a switch statement and a ternary operator below, rather than lots of lengthy IF statements
        
        switch(color){
            case 'red':
                    (red + change < 0 || red + change > 255) ?  null : setRed(red + change)    
                    break;
            case 'green':
                    (green + change < 0 || green + change > 255) ? null : setGreen(green + change)
                    break;
            case 'blue':
                    (blue + change < 0 || blue + change > 255) ? null : setBlue(blue + change)          
        }
    };

    //Passing props and callbacks to children. Passing two callback props so child can either increment or decrement the state
    return (
        <View>
           <CustomColorPiece 
                color="Red" 
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}/>
           <CustomColorPiece 
                color="Green"
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1*COLOR_INCREMENT)}/>
           <CustomColorPiece 
                color="Blue"
                onIncrease={() => setColor('blue',COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1*COLOR_INCREMENT)}/>
           <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red},${green},${blue})` }}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CustomColorScreen;