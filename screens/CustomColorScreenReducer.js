//Same as CustomColorScreen but using REDUCER to manage STATE. Refactored code.

import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import CustomColorPiece from '../components/CustomColor';

const COLOR_INCREMENT = 10;

//define my reducer function (called below). By convention, define this outside the main screen object
// pass in two objects- state object and how you want it to change
const reducer = (state, action) => {
     //state === { red: number, green: number, blue: number}
     //action=== { colorToChange: 'red' || 'green' || 'blue, amount: 10 || -10}
     switch(action.type) {
          case 'change_red':
               return (state.red + action.payload > 255 || state.red + action.payload < 0) ? state : { ...state, red: state.red + action.payload }
          case 'change_green':
               return (state.green + action.payload > 255 || state.green + action.payload < 0) ? state : { ...state, green: state.green + action.payload };
          case 'change_blue':
               return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ? state : { ...state, blue: state.blue + action.payload };
          default:
     }
}


const CustomColorScreenReducer = () => {

     //to useReducer, passing in 1. the function (I create) and 2. the initial state object
     // so now I have set the state variable below to the second portion 'initial state'
     const [ state, dispatch ]  = useReducer(reducer, {red: 0, green: 0, blue: 0});
     // destructuring, so I can easily call my inner variables within state:
     // const { red, green, blue } = state;
     

    return (
        <View>
           <CustomColorPiece 
                color="Red" 
                onIncrease={() => {dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}}
                onDecrease={() => {dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}}/>
           <CustomColorPiece 
                color="Green"
                onIncrease={() => {dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}}
                onDecrease={() => {dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}}/>
           <CustomColorPiece 
                color="Blue"
                onIncrease={() => {dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}}
                onDecrease={() => {dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}}/>
           <View style={{ 
               height: 100, 
               width: 100, 
               backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CustomColorScreenReducer;