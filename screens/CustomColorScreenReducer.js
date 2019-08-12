//Same as CustomColorScreen but using REDUCER to manage STATE. Refactored code.

import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import CustomColorPiece from '../components/CustomColor';


const CustomColorScreen = () => {

    const COLOR_INCREMENT = 10;


    return (
        <View>
           <CustomColorPiece 
                color="Red" 
                onIncrease={() => {}}
                onDecrease={() => {}}/>
           <CustomColorPiece 
                color="Green"
                onIncrease={() => {}}
                onDecrease={() => {}}/>
           <CustomColorPiece 
                color="Blue"
                onIncrease={() => {}}
                onDecrease={() => {}}/>
           <View style={{ 
               height: 100, 
               width: 100, 
               backgroundColor: `rgb(${red},${green},${blue})` }}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CustomColorScreenReducer;